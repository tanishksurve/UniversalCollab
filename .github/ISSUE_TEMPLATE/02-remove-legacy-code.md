---
name: 🔧 Remove legacy code reference
about: Remove SICKSTICKS reference from app.js
title: "Remove legacy SICKSTICKS reference from app.js"
labels: ["good first issue", "refactoring", "code-cleanup"]
assignees: ''
---

## Description
The `assets/app.js` file contains a legacy reference to `SICKSTICKS` which was likely from a previous version or template of this project. This should be cleaned up.

## Current Code (Line 17)
```javascript
return (window.SICKSTICKS && window.SICKSTICKS.repoUrl) || '';
```

## Expected Code
```javascript
return '';
```

## Location
- **File**: `assets/app.js`
- **Line**: 17

## Why This Change?
- Removes confusing legacy code
- Makes the codebase cleaner
- `SICKSTICKS` is not defined or used anywhere in the current project

## Steps to Fix
1. Fork this repository
2. Create a new branch: `git checkout -b fix/remove-legacy-code`
3. Edit `assets/app.js` 
4. Replace line 17 with: `return '';`
5. Test locally by opening `index.html` in your browser
6. Commit your changes: `git commit -m "Remove legacy SICKSTICKS reference"`
7. Push to your fork: `git push origin fix/remove-legacy-code`
8. Open a Pull Request

## Testing
After making the change, open `index.html` in your browser and verify:
- The page loads correctly
- Contributors are displayed
- The "View Repo" button works

---
**Good first issue** - Perfect for learning code cleanup! 🧹
