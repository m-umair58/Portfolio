# ARCHITECT_OS Portfolio

Next.js portfolio for Muhammad Umair — GUI + CLI modes, stack ERD, and resume download.

```bash
npm install
npm run dev
```

## Phase 0 setup (required for trust features)

1. **Resume PDF** — copy your CV to:

   ```bash
   cp /path/to/your-cv.pdf public/resume.pdf
   ```

   Download works via GUI (`DOWNLOAD_RESUME`) and CLI (`curl -OJ /api/resume`).

2. **Social links** — in `src/data/profile.ts`, set:

   ```ts
   github: "https://github.com/your-username",
   linkedin: "https://www.linkedin.com/in/your-profile",
   ```

   Leave empty strings to hide those channels until ready.

Contact form on `/command` opens the visitor’s email client (`mailto:`) — no backend required.
