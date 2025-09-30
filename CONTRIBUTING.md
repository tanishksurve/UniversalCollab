# Contributing to FirstLeaf

Welcome! This project is designed to help you make your first pull request.

## Quick start

1. Fork the repository.
2. Create a branch named like `add/your-name`.
3. Edit `data/contributors.ndjson` and add a new line with your details.
4. Commit your change and open a Pull Request (PR).

## Editing the data file

- Open `data/contributors.ndjson`.
- Add ONE new line using valid JSON format. Example:

```json
{"name":"Your Name","username":"your-github-username","github":"https://github.com/your-github-username","message":"Excited to contribute!"}
```

Notes:
- `name` and `username` are required.
- Keep everything on a single line (that’s how NDJSON works).
- Don’t add commas at the end; each line is an independent JSON object.
- We’ll add the `addedAt` timestamp during review if missing.

## Pull Request tips

- Title suggestion: `Add <your-name> to contributors`
- Keep the PR to just one new line in the file.
- The GitHub checks (if any) should pass automatically. If not, the maintainer will help.

## Code of Conduct

Be kind and respectful. This is a learning space.
