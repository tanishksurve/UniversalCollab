---
name: 🌓 Add dark/light mode toggle
about: Add a theme toggle button to switch between dark and light modes
title: "Add dark/light mode toggle feature"
labels: ["good first issue", "enhancement", "feature", "ui/ux"]
assignees: ''
---

## Description
Add a dark/light mode toggle button that allows users to switch between a light and dark theme. The current theme is dark, so we need to add a light theme and a toggle button.

## Proposed Feature
Add a theme toggle button in the header that saves the user's preference to localStorage.

## Implementation Details

### 1. HTML Changes (index.html)
Add a toggle button in the header (around line 21, before the closing nav tag):
```html
<button id="themeToggle" class="btn theme-toggle" aria-label="Toggle theme">
  <span id="themeIcon">☀️</span>
</button>
```

### 2. CSS Changes (assets/styles.css)
Add light theme variables and toggle button styles:

**Add light theme colors (after line 12):**
```css
[data-theme="light"] {
  --bg: #f5f7fa;
  --panel: #ffffff;
  --text: #1a202c;
  --muted: #4a5568;
  --accent: #0088cc;
  --accent-2: #00b894;
  --danger: #e74c3c;
}
```

**Add toggle button styles (add near other button styles):**
```css
.theme-toggle {
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  font-size: 1.25rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

[data-theme="light"] .theme-toggle {
  border-color: rgba(0, 0, 0, 0.1);
}
```

**Update background for light mode (modify body background):**
```css
body {
  /* existing styles */
  background: radial-gradient(
      1200px 600px at 80% -10%,
      rgba(107, 226, 255, 0.09),
      transparent 60%
    ),
    radial-gradient(
      800px 400px at 10% -10%,
      rgba(125, 249, 212, 0.12),
      transparent 50%
    ),
    var(--bg);
  transition: background-color 0.3s ease, color 0.3s ease;
}

[data-theme="light"] body {
  background: linear-gradient(
      135deg,
      rgba(107, 226, 255, 0.15) 0%,
      rgba(125, 249, 212, 0.15) 100%
    ),
    var(--bg);
}
```

### 3. JavaScript Changes (assets/app.js)
Add theme toggle functionality at the end of the `boot()` function:

```javascript
function boot() {
    fetchContributors();
    initThemeToggle();
}

function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const html = document.documentElement;
    
    // Check for saved theme preference or default to 'dark'
    const currentTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);
    
    // Toggle theme on button click
    themeToggle?.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
    
    function updateThemeIcon(theme) {
        if (themeIcon) {
            themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
        }
    }
}
```

## Steps to Implement
1. Fork this repository
2. Create a new branch: `git checkout -b feature/theme-toggle`
3. Make the changes described above to the three files
4. Test locally by:
   - Opening `index.html` in your browser
   - Clicking the theme toggle button
   - Verifying the theme switches between light and dark
   - Refreshing the page and verifying the theme persists
5. Commit your changes: `git commit -m "Add dark/light mode toggle feature"`
6. Push to your fork: `git push origin feature/theme-toggle`
7. Open a Pull Request

## Expected Behavior
- Theme toggle button appears in the header
- Clicking toggles between light and dark themes
- Theme preference is saved in localStorage
- Theme persists across page refreshes
- Icon changes based on current theme (sun for dark mode, moon for light mode)

## Testing Checklist
- [ ] Toggle button is visible in the header
- [ ] Clicking toggles between themes smoothly
- [ ] Light theme has good contrast and readability
- [ ] Theme preference persists after page refresh
- [ ] Icon updates when theme changes
- [ ] All text remains readable in both themes

## Design Tips
- Keep light theme colors subtle and easy on the eyes
- Ensure good contrast ratios for accessibility
- Test with several contributors to ensure cards look good in both themes

---
**Good first issue** - Perfect for learning about CSS variables, localStorage, and theming! 🎨
