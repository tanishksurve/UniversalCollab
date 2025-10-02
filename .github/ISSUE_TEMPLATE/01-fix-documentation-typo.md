---
name: 🐛 Fix documentation typo in GitHub Pages URL
about: Update incorrect repository name in README
title: "Fix GitHub Pages URL in README"
labels: ["good first issue", "documentation", "bug"]
assignees: ''
---

## Description
The README.md file contains an incorrect repository name in the GitHub Pages setup section. On line 66, it references `sicksticks` instead of `FirstLeaf`.

## Current Behavior
```markdown
4. Your site will be available at `https://<your-username>.github.io/sicksticks`.
```

## Expected Behavior
```markdown
4. Your site will be available at `https://<your-username>.github.io/FirstLeaf`.
```

## Location
- **File**: `README.md`
- **Line**: 66

## Steps to Fix
1. Fork this repository
2. Create a new branch: `git checkout -b fix/readme-typo`
3. Edit `README.md` and change `sicksticks` to `FirstLeaf` on line 66
4. Commit your changes: `git commit -m "Fix GitHub Pages URL in README"`
5. Push to your fork: `git push origin fix/readme-typo`
6. Open a Pull Request

## Additional Context
This is a perfect first issue for beginners! It only requires changing one word in the documentation.

---
**Good first issue** - Great for newcomers to open source! 🎉
