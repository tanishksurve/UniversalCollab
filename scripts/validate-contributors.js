#!/usr/bin/env node
/**
 * Simple validator for data/contributors.ndjson
 * Ensures each line is JSON with required fields and no duplicates.
 */
const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'data', 'contributors.ndjson');
const text = fs.readFileSync(file, 'utf8');
const lines = text.split(/\n/).map(l => l.replace(/\r$/, '')).filter(l => l.trim().length > 0);

let ok = true;
const seenUsernames = new Set();
let lineNo = 0;
for (const line of lines) {
    lineNo++;
    try {
        const single = line.trim();
        const obj = JSON.parse(single);
        if (!obj || typeof obj !== 'object') throw new Error('Not an object');
        if (!obj.name || !obj.username) throw new Error('Missing required fields: name and username');
        if (seenUsernames.has(obj.username)) throw new Error(`Duplicate username: ${obj.username}`);
        seenUsernames.add(obj.username);
    } catch (e) {
        console.error(`Error on line ${lineNo}: ${e.message}`);
        ok = false;
    }
}

if (!ok) {
    console.error('\nValidation failed. Please fix the errors above.');
    process.exit(1);
}

console.log(`Validation passed: ${lines.length} entr${lines.length === 1 ? 'y' : 'ies'}.`);
