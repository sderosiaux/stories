# GitHub Pages Deployment Setup

This guide will help you deploy the Conduktor Story website to GitHub Pages.

## Prerequisites

1. Create a GitHub repository named `conduktor-story`
2. Push this code to the repository

## Setup Steps

### 1. Create GitHub Repository
```bash
# If you haven't already, initialize git and add remote
git remote add origin https://github.com/YOUR_USERNAME/stories.git
```

### 2. Configure GitHub Pages
1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**

### 3. Deploy
```bash
# Commit and push the changes
git add .
git commit -m "Add GitHub Pages deployment configuration

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>"
git push -u origin main
```

## What's Been Configured

### Next.js Configuration (`next.config.ts`)
- ✅ Static export enabled (`output: 'export'`)
- ✅ Base path configured for GitHub Pages (`/stories`)
- ✅ Image optimization disabled for static hosting
- ✅ Trailing slashes enabled

### GitHub Actions Workflow (`.github/workflows/deploy.yml`)
- ✅ Automatic deployment on push to main branch
- ✅ Node.js 18 build environment
- ✅ Next.js static site generation
- ✅ Automatic Pages deployment

### Package Scripts (`package.json`)
- ✅ `npm run export` - Build static site
- ✅ `npm run deploy` - Build and add .nojekyll file

## Access Your Site

After deployment, your site will be available at:
```
https://YOUR_USERNAME.github.io/stories/
```

## Manual Deployment (Optional)

If you prefer to deploy manually:

```bash
npm run deploy
# Then commit and push the 'out' folder or use gh-pages branch
```

## Troubleshooting

- **Build Fails**: Check the Actions tab in your GitHub repo for detailed logs
- **404 Errors**: Ensure the repository name matches the basePath in next.config.ts
- **Styling Issues**: Clear browser cache and check console for asset loading errors

## Notes

- The site is configured to work both locally (`npm run dev`) and on GitHub Pages
- All assets and routing are configured for the `/stories` base path in production
- The `.nojekyll` file prevents Jekyll processing on GitHub Pages