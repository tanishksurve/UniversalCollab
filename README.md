# FirstLeaf

A tiny, friendly GitHub Pages site for first-time contributors to make their very first pull request. Add your name and GitHub link to a simple data file, open a PR, and see yourself appear on the live website.

See yourself: https://rohit-554.github.io/FirstLeaf/

## What is this?

This repo powers a static site hosted on GitHub Pages. The page reads a newline-delimited JSON (NDJSON) file and renders a grid of contributors. Beginners only need to edit one line to add themselves.

- No frameworks required
- No build step
- Just HTML, CSS, and a little JS

## Contribute in 5 steps

1. Fork this repository to your own GitHub account.
2. Create a new branch for your change, e.g. `add/your-name`.
3. Edit `data/contributors.ndjson` and add a new line following the format below.
4. Commit your change with a helpful message and push the branch.
5. Open a Pull Request. Once merged, your profile will appear on the site.

### The format (NDJSON)

One JSON object per line. Do not remove other lines. Do not add trailing commas. Keep it simple.

Required fields:
- `name`: Your display name
- `username`: Your GitHub username (no `@`)

Optional fields:
- `github`: Full URL to your profile (defaults to `https://github.com/<username>` if omitted)
- `message`: A short message that appears on your card
- `addedAt`: ISO date string (we will add or adjust this during review if you omit it)
- `avatar`: A custom avatar URL (defaults to your GitHub avatar)

Example line to copy and edit (add it as a new line at the end of the file):

```json
{"name":"Ada Lovelace","username":"ada","github":"https://github.com/ada","message":"Hello, world!","addedAt":"2025-09-30T12:00:00.000Z"}
```

Tip: Use an online JSON formatter if you are unsure. Remember, each line must be a valid JSON object.

## Local preview (optional)

You can open `index.html` directly in your browser. Some browsers block `fetch` from `file://` URLs. If that happens, run a tiny web server and open `http://localhost:8080`.

On Windows (PowerShell):

```powershell
# Python 3
python -m http.server 8080
```

Then visit http://localhost:8080 in your browser and click `index.html`.

## GitHub Pages setup

1. Go to Settings → Pages in your fork or the main repo.
2. Set Source to `Deploy from a branch` and pick branch `main` (or `gh-pages` if you prefer).
3. Set folder to `/ (root)` and save.
4. Your site will be available at `https://<your-username>.github.io/sicksticks`.

## Project structure

```
.
├── index.html           # Main page
├── assets/
│   ├── styles.css       # Styling
│   └── app.js           # Fetch and render contributors
├── data/
│   └── contributors.ndjson  # One JSON object per line
└── README.md
```

## Code of Conduct

Be kind, be patient, and be respectful. This is a beginner-friendly space.

## Maintainers

- You! PRs welcome.

## License

MIT License. See `LICENSE`.
