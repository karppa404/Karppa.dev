# karppa.dev

Abel Semahegn's portfolio, built with React, TypeScript, Vite, Tailwind CSS, and shadcn color tokens.

The site is intentionally low-maintenance:

- GitHub profile and projects load through Octokit.
- Substack posts load from `https://karppa404.substack.com/feed` through RSS2JSON, with a local fallback for reliability.
- The rolling one-year GitHub contribution calendar is rendered with D3.
- GitHub, LinkedIn, Substack, and TypeScript marks come from Simple Icons.

## Local development

```bash
pnpm install
pnpm dev
```

## Checks

```bash
pnpm lint
pnpm build
```
