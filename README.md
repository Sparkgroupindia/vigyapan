# VIGYAPAN — Google Sheets + Apps Script + GitHub PWA

## Architecture
- Google Sheet = CMS database
- Google Drive = image storage
- Google Apps Script = backend + admin/public UI
- GitHub Pages = PWA shell/installable app
- No paid server/database required

## Apps Script setup
1. Go to https://script.google.com and create a new standalone project.
2. Create these files and paste:
   - Code.gs
   - Admin.html
   - Site.html
3. In Apps Script: Services (+) → add **Google Drive API**. This is required for true image replacement using the same Drive file ID.
4. Run `setupProject()` once. Allow permissions.
5. Deploy → New deployment → Web app.
   - Execute as: Me
   - Who has access: Anyone
6. Copy the Web app URL.

## GitHub setup
1. Create a public GitHub repository (GitHub Free supports Pages for public repositories).
2. Upload:
   - index.html
   - app.js
   - manifest.json
   - sw.js
   - icon-192.png
   - icon-512.png
3. Open `app.js` and replace:
   PASTE_APPS_SCRIPT_WEB_APP_URL_HERE
   with your Web App URL.
4. Repo Settings → Pages → Deploy from branch → main → /(root).
5. Open the GitHub Pages URL on mobile Chrome and use Add to Home Screen / Install.

## Admin
Open:
https://YOUR-GITHUB-PAGES-URL/?admin=1

Public site:
https://YOUR-GITHUB-PAGES-URL/

## Image workflow
- Choose image
- Crop square
- Browser compresses to about <=100KB
- Save uploads to Drive
- Replacing an existing image updates the same Drive file ID, so its stored image reference remains stable.

## Important
This is designed for small/medium business sites. Apps Script and Drive have quotas/limits; they are not an unlimited SaaS backend. Google can change quotas. See official Apps Script quota docs.
