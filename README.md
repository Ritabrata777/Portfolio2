# Deploying to Vercel 🔧

This project is a simple static site. The repository includes a `vercel.json` that configures Vercel to serve `index.html` and route all paths to it (useful for single-page apps).

## Quick deploy (Windows PowerShell) ✅
1. Install the Vercel CLI (if needed):
   ```powershell
   npm i -g vercel
   ```
2. Log in:
   ```powershell
   vercel login
   ```
3. Link to an existing Vercel project or create a new one:
   ```powershell
   vercel link
   ```
   - If linking to the existing project, pick the project name `ritabrata` (or whichever matches your Vercel dashboard).
4. Deploy (preview):
   ```powershell
   vercel
   ```
5. Deploy to production:
   ```powershell
   vercel --prod --confirm
   ```

## Env vars and domains
- Add environment variables with the CLI:
  ```powershell
  vercel env add NAME production
  ```
- Or use the Vercel dashboard → Project → Settings → Environment Variables.
- Add or configure domains in the Dashboard → Domains.

## GitHub integration (recommended)
1. Push the repo to GitHub.





- If you want me to run a deployment for you, I need either your Vercel credentials (not recommended) or you can run the `vercel --prod --confirm` command locally after logging in. Alternatively, connect the repo to GitHub for automatic deployments.- `vercel.json` is configured for static hosting and SPA routing.## Notes2. In Vercel Dashboard → Git → Import Project, connect your GitHub repo: pushes to the configured branch will auto-deploy.