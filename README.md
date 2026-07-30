# Mentora AI Landing Page

A polished, responsive static website for an AI tutor product. It is ready for GitHub Pages and requires no build step.

## Project structure

```text
AI-tutor-Web/
├── index.html
├── assets/
│   ├── styles.css
│   └── script.js
├── .nojekyll
├── LICENSE
└── README.md
```

## Publish with GitHub Pages

1. Upload all files and folders to the root of your repository.
2. Open the repository on GitHub.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select:
   - Branch: `main`
   - Folder: `/ (root)`
6. Click **Save**.

For the repository `ra2630/AI-tutor-Web`, the expected URL is:

```text
https://ra2630.github.io/AI-tutor-Web/
```

## Run locally

Open `index.html` directly in a browser, or run:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Customize

Search and replace `Mentora AI` in `index.html` to change the product name.

You may also update:

- Page title and description inside `<head>`
- Hero text
- Subjects and features
- FAQ answers
- Footer content
- Contact or waitlist behavior

## Waitlist form

The current form is a front-end demo only. It does not save email addresses permanently.

To make it functional later, connect it to:

- Formspree
- Supabase
- Firebase
- Your own API

## License

MIT
