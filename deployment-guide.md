# Life Tracker PWA Deployment Guide

## Table of Contents

- [Prepare Files](#1-prepare-files)
- [Test Locally](#2-test-locally)
- [Deploy Online](#3-deploy-online)
  - [For GitHub Pages](#for-github-pages)
  - [For Netlify/Vercel](#for-netlifyvercel)
- [PWA Checks](#4-pwa-checks)
- [Updates](#5-updates)
- [Tip](#tip)

## 1. Prepare Files

- Place the following files in your project root:
  - `index.html`
  - `style.css`
  - `app.js`
  - `manifest.json`
  - `service-worker.js`
  - `icon-192.png` (192x192 PNG icon)
  - `icon-512.png` (512x512 PNG icon)
- All file names are case-sensitive.

## 2. Test Locally

- Use a local server (PWA won't work with `file://` protocol).
- Example using Python 3:
  ```bash
  python3 -m http.server 8080
  ```
- Open [http://localhost:8080](http://localhost:8080) in your browser.
- Check:
  - The app loads and works offline (after first visit).
  - "Add to Homescreen" prompt appears on mobile.
  - All icons and manifest load (check browser devtools).

## 3. Deploy Online

- Upload all files to your web hosting or a static site provider:
    - GitHub Pages
    - Netlify
    - Vercel
    - Firebase Hosting
    - Your own web server

### For GitHub Pages

1. Commit and push all files to your repository.
2. In repo settings, enable GitHub Pages (root or `/docs` folder).
3. Visit the published URL.

### For Netlify/Vercel

1. Connect your repo or drag-and-drop the folder.
2. Deploy.
3. Visit the generated site.

## 4. PWA Checks

- On your phone/tablet, open the site in Chrome or Safari.
- Use "Add to Homescreen" in the browser menu.
- App should open fullscreen, offline, with icon.

## 5. Updates

- When you change files, increment the `CACHE_NAME` in `service-worker.js` to force update.
- Users will get the new version after reload.

---

**Tip:**  
Use Lighthouse (in Chrome DevTools) to check PWA status and get suggestions.