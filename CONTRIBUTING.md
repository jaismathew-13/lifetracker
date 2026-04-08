# Contributing to LifeTracker

Thank you for your interest in contributing! 🎉

## How to Contribute

### Reporting Bugs
1. Check if the issue already exists in [Issues](../../issues)
2. Open a new issue with:
   - Clear title describing the bug
   - Steps to reproduce
   - Expected vs actual behavior
   - Browser and OS info

### Suggesting Features
1. Open an issue with the `enhancement` label
2. Describe the feature and why it would be useful

### Submitting Pull Requests
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Make your changes in `index.html`
4. Test in Chrome, Firefox, and Safari
5. Commit with a clear message: `git commit -m "feat: add X feature"`
6. Push and open a Pull Request

## Code Style Guidelines
- Keep everything in a single `index.html` file (the project goal is zero dependencies)
- Use CSS variables defined in `:root` / `[data-theme="dark"]` for theming
- Keep JS clean and readable with clear section comments
- All data should go through `state.data` and be saved via `save()`

## Commit Convention
```
feat: add new feature
fix: fix a bug
style: CSS/UI changes
refactor: code cleanup
docs: update docs
```

Thank you! 💚
