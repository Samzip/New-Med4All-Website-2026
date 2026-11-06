# Updating the website on GitHub

## This update (V2.1)
Commit message: V2.1: comms review fixes and new FAQs page

Files changed: index.html, health-facilities.html, suppliers.html, about.html,
news.html, contact.html, privacy.html, terms.html, sitemap.xml, README.md
New files: faq.html, CHANGELOG.md, MARKETPLACE-FOOTER-FIX.md, GITHUB-UPDATE.md

## Option A: in the browser (no software needed)
1. Unzip the package on your computer.
2. Open the website repository on github.com.
3. Go to the folder where index.html sits (usually the top level).
4. Click "Add file" > "Upload files".
5. Open the unzipped folder, select everything INSIDE it (the files and the
   assets folder, not the outer folder itself) and drag it onto the page.
   Files with the same name are replaced; new files are added.
6. Under "Commit changes", type the commit message above.
7. Choose "Commit directly to the main branch" and click "Commit changes".
8. If the Render preview is connected to the repository, it rebuilds by itself
   in a few minutes. Check the preview link before going live.

## Option B: with Git on a computer
    git pull
    (copy the new files over your local copy of the site)
    git add -A
    git commit -m "V2.1: comms review fixes and new FAQs page"
    git push

## Going live after any update
1. On GitHub, click "Code" > "Download ZIP" (or use the zip you were sent).
2. Send it to IT to upload to the web host, replacing the old files.
3. Open www.med4all.org.gh and hard refresh (Ctrl+F5) to check the changes.

## Every future update
1. Make the change and test it on the preview link.
2. Upload to GitHub with a short commit message that says what changed.
3. Add a line to CHANGELOG.md.
4. Send the new zip to IT for the live site.
