# Mentor AI Study — Website

Static production landing website for **Mentor AI Study** ([www.mentoraistudy.com](https://www.mentoraistudy.com/)), hosted via GitHub Pages.

Mentor AI combines patient classroom-style lecture derivations, verified physical blackboard notes, camera notebook checkpoints, Socratic diagnostic tutoring, full-working CBSE step marking, and transparent parent progress records.

---

## Factual Curriculum Status

| Status | Subjects & Examinations | Scope |
| :--- | :--- | :--- |
| **Available Now** | **JEE Advanced Mathematics** | 27 comprehensive modular courses across Algebra, Differential Calculus, Integral Calculus, Coordinate Geometry, Vectors, 3D Geometry, and Trigonometry. |
| **Coming Next** | **JEE Physics & JEE Chemistry**<br>**CBSE Classes XI & XII (Physics, Chemistry, Math)** | In active development and blackboard transcription authoring. |
| **Planned Roadmap** | **NEET, SAT, GRE, GMAT & Additional Classes** | Scheduled on product expansion roadmap. |

---

## Pedagogical Pillars

1. **Patient Classroom Modules**: First-principles derivations paced like a master teacher rather than superficial speedruns.
2. **Exact Blackboard Records**: Physical notebook transcription of formulas, proof structures, edge-case traps, and worked examples.
3. **Camera-Verified Notebook Checks**: Photographic checkpoints verifying student physical working before module progression.
4. **Contextual Socratic Doubt Solving**: Stepwise error diagnosis and targeted counter-questions without solution dumping.
5. **Full-Working CBSE Step Marking**: Evaluation against standard board marking rubrics (+1M formula, +1.5M substitution, +0.5M units).
6. **Adaptive Weak-Area Practice**: Misconception-driven problem generation for systematic prerequisite remediation.
7. **Transparent Parent Visibility**: Real evidence log with timestamped notebook submissions, diagnostic transcripts, and concept mastery curves.

---

## Repository Structure

```text
AI-tutor-Web/
├── index.html                       # Main product landing page
├── support.html                     # Support center & problem report guidance
├── privacy.html                     # Learning data handling & student privacy
├── assets/
│   └── mentor-ai-study-social.png   # OpenGraph social preview asset
├── CNAME                            # Custom domain (www.mentoraistudy.com)
├── README.md                        # Documentation
└── cardbaazi/                       # Preserved unrelated static project
```

---

## Local Development & QA

Run a local HTTP server:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000` in your browser.

### Accessibility & Quality Checks
- Semantic HTML5 landmark structure (`<header>`, `<main>`, `<footer>`, `<article>`, `<section>`, `<nav>`)
- Accessible WCAG AA/AAA contrast ratios on all text and badge elements
- Keyboard navigation with explicit `:focus-visible` styling
- Reduced motion support via `@media (prefers-reduced-motion: reduce)`
- No hover-dependent essential information or actions
- Zero trackers, ads, fake testimonials, or unverifiable claims

---

## Publishing

GitHub Pages deploys directly from the repository's `main` branch root. The `CNAME` file preserves `www.mentoraistudy.com`.
