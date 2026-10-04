# Paper & Pine — GitHub Pages site

Static single-page portfolio site for Paper & Pine.

## Publish on GitHub Pages
1. Create a GitHub repository.
2. Upload `index.html`, `styles.css`, `script.js`, and the `assets` folder.
3. In **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`.
4. Save. GitHub will provide the Pages URL.

## Add WhatsApp later
In `index.html`, find the element with class `whatsapp-placeholder` and replace its `href="#"` with:
`https://wa.me/YOURCOUNTRYCODEYOURNUMBER`
Then change the text `ADD NUMBER LATER` to the display text you want.

## Add portfolio projects later
Duplicate the `.case-template` article in `index.html` and replace its visual, title, description and tags with your real campaign.

## Notes
The 3D animation uses Three.js and the scroll animation uses GSAP from public CDNs. GitHub Pages can serve this directly; no backend is required.
