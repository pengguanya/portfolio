# Guanya Peng Portfolio

My personal portfolio site built with React and Parcel. It showcases recent AI/ML projects, writing, and talks, and serves as a living CV. The repo also demonstrates how I automate static-site deployments to both GitHub Pages and Azure Static Web Apps from a single pipeline.

## Live Sites
- GitHub Pages: https://pengguanya.github.io/portfolio/
- Azure Static Web Apps: https://witty-rock-0eecdd81e.3.azurestaticapps.net

## Highlights
- **Modern single-page app** built with React functional components and hooks.
- **Content-driven sections** – data for cards, social links, etc., live in `src/Components` so they are easy to maintain.
- **Responsive design** powered by hand-written CSS.
- **One-click automation** – merges to `main` trigger GitHub Actions to build once and publish to both GitHub Pages and Azure.

## Tech Stack
- React 18, JSX, modern JavaScript
- Parcel 2 for bundling, asset optimization, and dev server
- CSS modules + global styles
- GitHub Actions for CI/CD
- Azure Static Web Apps + GitHub Pages for hosting

## Local Development
1. **Install dependencies** (Node 20+ recommended):
   ```bash
   npm ci
   ```
2. **Start the dev server** (hot reload on http://localhost:1234):
   ```bash
   npm run start
   ```
3. **Build for production** (outputs to `dist/`):
   ```bash
   npm run build
   ```

## Deployment Automation
- Workflow: `/.github/workflows/deploy.yml`
- Triggers: push to `main` and manual `workflow_dispatch`
- Jobs:
  1. **Resolve deployment targets** – reads `deployment-targets.json` to see whether GitHub Pages and/or Azure should run.
  2. **Build site** – runs `npm ci && npm run build`, then uploads the `dist/` folder as an artifact (`site-dist`).
  3. **Deploy to GitHub Pages** – downloads the artifact, uploads it via `actions/upload-pages-artifact`, and publishes with `actions/deploy-pages` (remember to set Pages → Source → GitHub Actions in repo settings).
  4. **Deploy to Azure Static Web Apps** – downloads the same artifact and uploads it with `azure/static-web-apps-deploy@v1`. Requires the secret `AZURE_STATIC_WEB_APPS_API_TOKEN` in Repo Settings → Secrets.

**Toggling targets:**
- Edit `deployment-targets.json` and set the booleans you want:
  ```json
  {
    "deployToGithubPages": true,
    "deployToAzureStaticWebApps": true
  }
  ```
- If both are `false`, the workflow exits before the build job.

**Manual run / testing:**
- From the GitHub UI: Actions → Deploy Portfolio → Run workflow → branch `main`.
- From CLI: `gh workflow run "Deploy Portfolio" --ref main` then watch with `gh run watch <run-id>`.
- Inspect logs via `gh run view <run-id> --log --exit-status`.

## Repository Structure
```
├── src/
│   ├── App.jsx
│   ├── Components/
│   ├── images/
│   ├── index.html
│   └── index.js
├── dist/ (build output)
├── context/ (notes, not tracked by git)
├── .github/workflows/deploy.yml
├── deployment-targets.json
├── package.json / package-lock.json
└── README.md
```

## Customizing Content
- **Hero + site-wide props:** `src/App.jsx`
- **Portfolio section:** `src/Components/Portfolio.jsx` (edit `projectList`, tags, links)
- **About, Experience, etc.:** other components inside `src/Components/`
- **Images:** drop files into `src/images` and update imports
- **Styles:** global rules in `src/styles.css` plus component-specific CSS next to each component

## Contributing / Issues
This is a personal site, but feel free to open issues if you spot bugs or want to discuss improvements. Pull requests are welcome for fixes or minor enhancements.

## License
ISC © Guanya Peng
