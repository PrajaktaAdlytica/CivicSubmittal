# Host CivicSubmittal on regular Hostinger PHP/HTML hosting

This project builds to static HTML, CSS, JavaScript, SVG and WebP. React, Remotion, GSAP and Lenis run in the visitor's browser. PHP hosting can serve these files directly; no PHP conversion, Node.js process, database or web-app slot is required.

You still need an active web/cloud hosting plan with an available regular website slot, or an existing website you intend to replace. Buying the domain alone does not provide hosting capacity. The website is still a concept frontend: forms do not send leads, sign-in is a preview, and demo records are synthetic.

## Branches

- `main`: editable source, original assets, brand kit, architecture document, QA evidence and build workflow.
- `hostinger`: generated public website files with `index.html` and `.htaccess` at the repository root. **Connect this branch to Hostinger.**

Pushing changes to `main` runs the GitHub Actions workflow `Build Hostinger static site`. It installs dependencies, builds, tests and updates `hostinger`. Hostinger's generic Git integration does not run npm or build React; it serves the files from the connected branch directly. Do not manually edit the generated branch.

## Connect the domain and GitHub

1. In hPanel, open Websites and choose your regular hosting plan.
2. Choose Create website (or Add website in older screens), then **Custom PHP/HTML website** and start with an empty website. Do not choose Web App or Static frontend web app.
3. Select the domain you already own. If it is attached to another website, back up that website before replacing/reassigning it. Alternatively use a temporary domain first.
4. Open the new website's Dashboard → Advanced → Git.
5. Choose Connect with GitHub / Continue with GitHub. Authorize Hostinger for the CivicSubmittal repository.
6. Repository: `PrajaktaAdlytica/CivicSubmittal`. Branch: **hostinger**. Deploy/root directory: **public_html**.
7. Click Deploy and inspect its deployment status. The index must be directly at `public_html/index.html`, alongside `.htaccess`, `assets/`, `brand/` and the favicon files. No build or startup command is needed here.
8. Enable/confirm automatic deployment for that branch. New pushes to `main` produce a `hostinger` branch update; Hostinger then pulls the generated files.
9. Check the assigned domain in hPanel. If it already uses Hostinger nameservers, follow the automatic connection status. With external DNS, use the exact records/IP shown for this hosting website, and preserve existing email records. Do not use guessed nameservers or IPs.
10. Confirm the domain's SSL certificate is active, enable HTTPS in the website dashboard, then visit the HTTPS domain.

Current OAuth Git integration replaces files in its destination directory. Back up any existing website before using that directory. Legacy SSH-based Git screens may require an empty destination on first deployment; use an empty destination after backing up anything needed. For legacy setup, use the public repository HTTPS URL, branch `hostinger`, and leave the directory field blank if that screen says blank means `public_html`.

## If Git is unavailable: ZIP upload

A `CivicSubmittal-Hostinger.zip` build package is supplied locally. GitHub Actions also publishes a downloadable `CivicSubmittal-Hostinger` artifact on successful runs.

Open the website Dashboard → Files → File Manager → public_html. Upload and extract the ZIP directly into public_html. Keep `.htaccess` (enable hidden-file visibility if needed). Do not leave the files nested inside an extra directory. After extraction, remove only the uploaded ZIP and any confirmed unused default placeholder page. This manual method does not automatically follow GitHub changes.

## Verify after deployment

- Home intro plays; Skip and reduced motion work; navigation reveals at the hero.
- Open `/products/permit-review` directly, then refresh. The supplied `.htaccess` should return the React application, not a 404.
- Check `/request-demo`, `/sign-in`, `/demo/projects/ti-107` and `/brand.html`.
- Confirm images, SVG favicon and local fonts load on desktop/mobile.
- A nonexistent `/assets/missing.js` must remain a 404, not receive HTML.
- Check HTTPS and both the apex and www addresses intended for the site.

If routes 404, confirm `.htaccess` is present and rewrite rules are enabled. If the page is blank, confirm the `hostinger` branch was deployed, not the `main` source tree. If the previous site remains, confirm the domain's document root and remove only its obsolete placeholder after backup.

## Local rebuild

```sh
npm ci
npm run build:hostinger
npm run test:sites
```

Upload the contents of `dist/hostinger`. The workflow performs this build automatically for main-branch pushes. Source installs/development need Node.js; the Hostinger runtime does not.

## Official Hostinger references

- [Add a website and choose Custom PHP/HTML](https://www.hostinger.com/support/1583214-how-to-add-a-website-in-hostinger/)
- [Git deployment, branch, directory and automatic updates](https://docs.hostinger.com/websites/git)
- [Connect GitHub through hPanel](https://www.hostinger.com/support/1583302-how-to-deploy-a-git-repository-in-hostinger/)
- [Upload and extract a website into public_html](https://www.hostinger.com/tutorials/how-to-upload-your-website/)

Hosting instructions checked against official documentation on 27 October 2026. No Hostinger deployment or DNS changes were made by this task.
