# Next.js + TypeScript (scaffold)

This folder contains a minimal Next.js project scaffolded with TypeScript.

Getting started:

```bash
# from the project root
cd nextjs-app
npm install
npm run dev
```

Available scripts:

- `npm run dev` - run development server
- `npm run build` - build for production
- `npm run start` - run production server
- `npm run lint` - run Next.js lint

Notes:

- Install dependencies before running the dev server.
- Customize `package.json` versions as needed.

## Deploying to Vercel (live preview, no local Node required)

Vercel provides automatic preview deployments from your GitHub repository and does not require Node.js installed locally to view the app.

Quick steps:

1. Create a GitHub repository and push the `nextjs-app` folder (or this repository) to GitHub.

```bash
git init
git add .
git commit -m "Initial scaffold"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. Go to https://vercel.com/import and import your GitHub repository. Vercel detects Next.js automatically and will create preview deployments for each branch and pull request.

3. (Optional) Configure environment variables in the Vercel dashboard under your Project Settings > Environment Variables.

4. After import, open the provided preview URL to see the live app.

Notes:
- You do not need to run `npm install` or `npm run dev` locally to view the site; Vercel will install dependencies and build the project in their cloud.
- If you prefer the Vercel CLI, you can use `vercel` to deploy from a machine with Node installed, but it's not necessary for GitHub-based deployments.

If you want, I can also add a `vercel.json` file with explicit settings.
