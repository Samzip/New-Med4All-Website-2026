# Marketplace footer fix (shop.med4all.org.gh)

The marketplace runs on Magento, separately from this website, so this change
is made in the Magento admin, not in these files.

Problem: footer links on the marketplace (account creation, log in and all
customer pages) still point to the old website.

Change the footer links to:

| Footer link | New address |
|---|---|
| About | https://www.med4all.org.gh/about.html |
| Features | https://www.med4all.org.gh/health-facilities.html |
| Goals | https://www.med4all.org.gh/about.html |
| Add if possible: FAQs | https://www.med4all.org.gh/faq.html |
| Add if possible: Contact | https://www.med4all.org.gh/contact.html |

Use the www.med4all.org.gh addresses, not the onrender.com preview address,
so the links keep working after go-live. Do this at the same time as the new
site goes live on www; until then, the www addresses still show the old site.

Where to look in Magento admin (depends on the theme):
1. Content > Blocks: search for "footer". Edit the block and update the links.
2. If not there: Content > Design > Configuration > (store view) > Footer.
3. If the links are hard-coded in the theme (footer.phtml), the developer
   edits the theme file and redeploys.
4. Then System > Cache Management > Flush Magento Cache.

Check afterwards: open the account creation page, the log in page and a
logged-in customer page, and click each footer link.
