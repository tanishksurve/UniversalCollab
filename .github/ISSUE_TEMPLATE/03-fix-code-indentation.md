---
name: 🎨 Fix code indentation
about: Fix inconsistent indentation in app.js
title: "Fix indentation in app.js detectRepoUrl function"
labels: ["good first issue", "code-style", "bug"]
assignees: ''
---

## Description
There is an indentation issue in `assets/app.js` on line 13. The line declaring `const repo` has incorrect indentation, breaking the visual flow of the code.

## Current Code (Lines 11-14)
```javascript
                const owner = location.hostname.split('.')[0];
                const parts = location.pathname.split('/').filter(Boolean);
            const repo = parts[0] || 'firstleaf';
                return `https://github.com/${owner}/${repo}`;
```

## Expected Code (Lines 11-14)
```javascript
                const owner = location.hostname.split('.')[0];
                const parts = location.pathname.split('/').filter(Boolean);
                const repo = parts[0] || 'firstleaf';
                return `https://github.com/${owner}/${repo}`;
```

## Location
- **File**: `assets/app.js`
- **Line**: 13

## Why This Change?
- Improves code readability
- Follows consistent indentation style
- Makes the code easier to maintain

## Steps to Fix
1. Fork this repository
2. Create a new branch: `git checkout -b fix/indentation`
3. Edit `assets/app.js` 
4. Fix the indentation on line 13 (add 4 more spaces at the beginning)
5. Commit your changes: `git commit -m "Fix indentation in detectRepoUrl function"`
6. Push to your fork: `git push origin fix/indentation`
7. Open a Pull Request

## Additional Context
This is a simple fix that helps you practice code style consistency - an important skill in software development!

---
**Good first issue** - Great way to learn about code formatting! 📝
