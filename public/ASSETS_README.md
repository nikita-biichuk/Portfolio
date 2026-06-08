# Public assets structure

- **`/robots.txt`** – SEO (root)

## assets/

### documents/

- **`documents/NikitaBiichukResume.pdf`** – CV / resume

### images/

- **`images/profile/`** – Profile photo (avatar.jpg)
- **`images/courses/`** – Course preview images (python-course-with-angela.png, etc.)
- **`images/projects/`** – Project screenshots (stack.png, carepulse.png, etc.)
- **`images/backgrounds/`** – Background images (bg.png)
- **`images/experience/`** – Work experience thumbnails (exp1.svg – exp4.svg)
- **`images/misc/`** – Grid, footer-grid, confetti, fm, gsap, three, tiktok, link, wha

### icons/

- **`icons/tech/`** – Tech stack icons (next, react, tailwind, ts, mongo, etc.)
- **`icons/social/`** – Social links (git, insta, twit)
- **`icons/companies/`** – Company logos (cloud, app, stream, docker, etc.)

All references in `data/index.ts` and components use these paths (e.g. `/assets/images/projects/...`, `/assets/icons/tech/...`).
