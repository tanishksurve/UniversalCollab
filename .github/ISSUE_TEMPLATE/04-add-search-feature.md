---
name: ✨ Add search/filter feature for contributors
about: Add a search box to filter contributors by name or username
title: "Add search functionality to filter contributors"
labels: ["good first issue", "enhancement", "feature"]
assignees: ''
---

## Description
Add a search/filter feature that allows users to search through the contributors list by name or username. This will improve the user experience when there are many contributors.

## Proposed Feature
Add a search input box above the contributors grid that filters the displayed cards in real-time as users type.

## Implementation Details

### 1. HTML Changes (index.html)
Add a search box before the contributors grid (after line 30):
```html
<div class="search-container">
  <input 
    type="text" 
    id="searchInput" 
    placeholder="Search contributors by name or username..." 
    aria-label="Search contributors"
  />
</div>
```

### 2. CSS Changes (assets/styles.css)
Add styles for the search box:
```css
.search-container {
  margin: 1.5rem 0;
}

#searchInput {
  width: 100%;
  padding: 0.75rem 1rem;
  background: var(--panel);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: var(--text);
  font-size: 1rem;
  font-family: inherit;
}

#searchInput:focus {
  outline: none;
  border-color: var(--accent);
}
```

### 3. JavaScript Changes (assets/app.js)
Add search functionality after rendering contributors (around line 88):
```javascript
// Add search functionality
const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const cards = elList.querySelectorAll('a');
        
        cards.forEach(cardLink => {
            const card = cardLink.querySelector('.card');
            const name = card.querySelector('.name').textContent.toLowerCase();
            const username = card.querySelector('.username').textContent.toLowerCase();
            
            if (name.includes(searchTerm) || username.includes(searchTerm)) {
                cardLink.style.display = '';
            } else {
                cardLink.style.display = 'none';
            }
        });
    });
}
```

## Steps to Implement
1. Fork this repository
2. Create a new branch: `git checkout -b feature/search-contributors`
3. Make the changes described above to the three files
4. Test locally by:
   - Opening `index.html` in your browser
   - Typing in the search box
   - Verifying that contributors are filtered correctly
5. Commit your changes: `git commit -m "Add search functionality for contributors"`
6. Push to your fork: `git push origin feature/search-contributors`
7. Open a Pull Request

## Expected Behavior
- Search box appears above the contributors grid
- As users type, only matching contributors are shown
- Search is case-insensitive
- Search matches both name and username

## Testing Checklist
- [ ] Search box is visible and styled correctly
- [ ] Typing filters contributors in real-time
- [ ] Clearing the search box shows all contributors
- [ ] Search is case-insensitive
- [ ] Search works for both names and usernames

---
**Good first issue** - Great for learning DOM manipulation and event handling! 🔍
