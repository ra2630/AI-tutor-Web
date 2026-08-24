# Mentor AI website

Production static website for [www.mentoraistudy.com](https://www.mentoraistudy.com/), hosted through GitHub Pages.

The site explains the actual product: classroom-style JEE learning, physical blackboard records and notebook verification, guided wrong-answer correction, interactive mathematics visuals, and a parent-visible learning record. JEE Mathematics is presented as the first focus; later curricula are explicitly marked as in development.

## Structure

```text
AI-tutor-Web/
├── index.html
├── support.html
├── privacy.html
├── assets/
│   └── mentor-ai-study-social.png
├── CNAME
└── README.md
```

There is no build step or fake waitlist. Early-access and support actions open addressed email drafts.

## Run locally

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish

GitHub Pages deploys the repository's `main` branch from the repository root. `CNAME` must remain `www.mentoraistudy.com`.
