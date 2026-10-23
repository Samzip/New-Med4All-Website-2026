# Med4All website V2: launch package

A ready-to-upload static website. No database or server software is needed.

## What's inside
- index.html (home), health-facilities.html, suppliers.html, about.html, news.html, contact.html, privacy.html, terms.html
- assets/: logos, photos, team photos, the homepage video loop (hero-loop.mp4, 2 MB) and its still image, favicon, link-preview image, and site.js (forms and video)
- robots.txt and sitemap.xml

## Go live
1. Back up the current site at www.med4all.org.gh.
2. Upload everything in this folder, keeping the structure, to the web host.
3. Point www.med4all.org.gh and med4all.org.gh to the new site with HTTPS on. Redirect one to the other so there is a single main address.
4. Leave shop.med4all.org.gh unchanged. All "Log in" and "Join now" buttons link there.
5. Submit https://www.med4all.org.gh/sitemap.xml in Google Search Console.

## Connect the forms (about 10 minutes)
The site has three forms: Contact, Supplier enquiry and Request a demo. To make them send straight to the team inbox:
1. Create a free account at formspree.io (or a similar form service) using customersuccessteam@med4all.org.gh.
2. Create a new form. Copy its endpoint, which looks like https://formspree.io/f/abcdwxyz.
3. Open assets/site.js and paste it between the quotes on this line:
   var FORM_ENDPOINT = "";
4. Upload site.js again and send a test message from each form.

Until this is done, the forms still work by opening the visitor's email app with the message filled in.

## Homepage video
The video plays muted on screens 960px and wider, and stays paused for visitors who have reduced motion turned on. A Pause/Play button sits in the corner. It does not load on phones.

## On the Marketplace (Magento)
- Link the Med4All logo on the login page back to www.med4all.org.gh.
- Set internal marketplace pages to noindex, so Google shows this website first.

## Editing content
Text lives directly in the HTML files, so any web developer can update news, numbers and team members.
