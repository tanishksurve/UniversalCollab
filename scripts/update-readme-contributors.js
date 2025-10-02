#!/usr/bin/env node
/**
 * Updates README.md with a contributors section showing avatars
 * Reads from data/contributors.ndjson and updates the README
 */
const fs = require('fs');
const path = require('path');

const contributorsFile = path.join(__dirname, '..', 'data', 'contributors.ndjson');
const readmeFile = path.join(__dirname, '..', 'README.md');

// Read contributors
const text = fs.readFileSync(contributorsFile, 'utf8');
const lines = text.split(/\n/).map(l => l.replace(/\r$/, '')).filter(l => l.trim().length > 0);

const contributors = lines.map(line => {
    try {
        return JSON.parse(line.trim());
    } catch (e) {
        console.error(`Error parsing line: ${line}`);
        return null;
    }
}).filter(Boolean);

console.log(`Found ${contributors.length} contributors`);

// Generate contributors section
const contributorsSection = `## Thank you - Contributors

Thank you to all the amazing contributors who have helped make this project better! 🎉

<table>
${generateContributorsTable(contributors)}
</table>
`;

function generateContributorsTable(contributors) {
    const rows = [];
    const perRow = 6; // 6 contributors per row
    
    for (let i = 0; i < contributors.length; i += perRow) {
        const rowContributors = contributors.slice(i, i + perRow);
        
        // Avatar row
        const avatarRow = rowContributors.map(c => {
            const avatarUrl = c.avatar || `https://avatars.githubusercontent.com/${c.username}`;
            const profileUrl = c.github || `https://github.com/${c.username}`;
            return `    <td align="center"><a href="${profileUrl}"><img src="${avatarUrl}" width="80px;" alt="${c.name}"/></a></td>`;
        }).join('\n');
        
        // Name row
        const nameRow = rowContributors.map(c => {
            const profileUrl = c.github || `https://github.com/${c.username}`;
            return `    <td align="center"><a href="${profileUrl}"><sub><b>${c.name}</b></sub></a></td>`;
        }).join('\n');
        
        rows.push('  <tr>\n' + avatarRow + '\n  </tr>');
        rows.push('  <tr>\n' + nameRow + '\n  </tr>');
    }
    
    return rows.join('\n');
}

// Read current README
let readme = fs.readFileSync(readmeFile, 'utf8');

// Check if contributors section already exists
const contributorsSectionRegex = /## Thank you - Contributors[\s\S]*?(?=\n## |$)/;

if (contributorsSectionRegex.test(readme)) {
    // Replace existing section
    readme = readme.replace(contributorsSectionRegex, contributorsSection.trim());
    console.log('Updated existing contributors section');
} else {
    // Add section at the end
    readme = readme.trimEnd() + '\n\n' + contributorsSection;
    console.log('Added new contributors section');
}

// Write updated README
fs.writeFileSync(readmeFile, readme, 'utf8');
console.log('README.md updated successfully!');
