<p align="center"><img src="paper-pine-logo.png" alt="Paper & Pine" width="280"></p>

# Paper & Pine

Website for **Paper & Pine**, a creative ads agency powered by AI: video ads, photo ads and 3D visuals for e-commerce brands and real estate.

Live site: https://paperandpine.me

## Files

| File | What it does |
| --- | --- |
| `index.html` | Page structure and content (hero, ad sections, contact) |
| `styles.css` | All colours, fonts and layout |
| `script.js` | Builds the ad boxes and holds the `MEDIA` list where you add your work |
| `paper-pine-logo.png` | Main logo on a white background (used for link previews and branding) |
| `CNAME` | Connects the domain paperandpine.me. Keep it, do not delete |

## Sections

- **Video Ads:** UGC Ads (8), Product Showcase (8), Cinematic Brand Films (6), CGI / 3D Product Ads (8)
- **Photo Ads:** 15 boxes
- **3D Visuals for Real Estate:** apartments, hotels, hostels, realtors
- **Contact:** email, WhatsApp, Instagram

## Adding your ads

1. Upload your videos and images to the repository (for example into an `ads` folder).
2. Open `script.js` and add the paths to the `MEDIA` list at the top, in order:

```js
const MEDIA = {
  ugc: ["ads/ugc1.mp4", "ads/ugc2.mp4"],
  showcase: [],
  films: [],
  cgi: [],
  photo: ["ads/photo1.jpg"],
  re: []
};
```

Empty slots stay as placeholder boxes. Keep each video small (under about 25 MB) so the page loads fast.

## Changing colours

The palette is at the top of `styles.css`:

| Colour | Hex |
| --- | --- |
| Electric blue | `#1675F5` |
| Sky blue | `#42B8FF` |
| Indigo purple | `#4540F5` |
| Soft lavender | `#C77BF2` |
| Pastel pink | `#EBA0E9` |
| Peach | `#FFC9A8` |
| Text | `#171923` |
| Secondary text | `#687386` |
| Backgrounds | `#FFFFFF`, `#F7F8FC` |

## Updating the site

On GitHub, open a file, click the pencil icon, make the change, then **Commit changes**. The site updates in 1-2 minutes.

## Contact

- Email: hello@paperandpine.me
- WhatsApp: +91 93206 56886
- Instagram: [@paperandpine.me](https://instagram.com/paperandpine.me)
