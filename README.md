# Mandir Siddhashwari Peeth Dham — Website (Demo)

A modern, responsive, bilingual (हिन्दी / English) six-page website for a Hindu temple.
Built as plain HTML + CSS + JavaScript — **no build step, no server needed**.

> This is a **demo build for client review**. All text marked "(Sample)" / "(नमूना)"
> and every SVG image tagged **SAMPLE** is placeholder content. Social links, phone,
> email, UPI ID, bank details and the address are all dummy values.

---

## 1. Files at a glance

```
mandir/
├── index.html          Home            (opens from the logo)   -> /
├── history.html        History                                 -> /history
├── programs.html       Programs & Festivals                    -> /programs
├── timings.html        Aarti & Darshan Timings                -> /timings
├── donation.html       Donation                                -> /donation
├── contact.html        Contact Us                              -> /contact
├── css/
│   └── style.css       All styling — colours, fonts, layout, responsive rules
├── js/
│   ├── content.js      ★ THE ONLY FILE YOU EDIT — every word, number and image path
│   └── site.js         The engine: language toggle, menus, animations, forms
├── images/             All photos and graphics live here
├── _redirects          Clean-URL rules for Netlify / Cloudflare Pages
├── robots.txt
└── sitemap.xml
```

### Clean URLs (`/history` instead of `/history.html`)
Every page has its own route. When you host on **Netlify** or **Cloudflare Pages**, the
included `_redirects` file makes the pretty URLs (`/history`, `/programs`, `/timings`,
`/donation`, `/contact`) work automatically. On other hosts, either keep the `.html`
links or add the same rules to your server config. After deploying, replace
`https://example.com` in the HTML `<head>` and in `sitemap.xml` with your real domain.

---

## 2. How to change the text

Open **`js/content.js`**. Every line of text is stored as a pair:

```js
heading: { en: "About the Temple", hi: "मंदिर के बारे में" }
```

* `en` → shown when the visitor selects **EN**
* `hi` → shown when the visitor selects **हिन्दी** (this is the default)

Edit either value, save, and refresh the page. Keep the surrounding quotes and the
comma at the end. Do **not** change the key names (the word before the colon) — the
site looks them up by name.

There is no need to touch the HTML files to change wording.

---

## 3. How to change photos

1. Copy your new photo into the **`images/`** folder (e.g. `images/aarti-2026.jpg`).
2. In `js/content.js`, change the matching path:

```js
image: "images/photo-aarti.jpg"   →   image: "images/aarti-2026.jpg"
```

That is the whole job — one line per photo. Recommended size: **1600 × 1000 px**,
JPEG, under ~300 KB. Please keep descriptive `alt` text where indicated for SEO and
accessibility.

Current image slots:

| Path in `content.js`        | Where it appears                                    |
|-----------------------------|-----------------------------------------------------|
| `images/photo-aarti.jpg`    | Home hero background, galleries, festival cards     |
| `images/photo-festival.jpg` | Home gallery, Programs upcoming event & gallery     |
| `images/photo-heritage.jpg` | Home About, History galleries                       |
| `images/photo-eye-camp.jpg` | Programs gallery, Donation cause card               |
| `images/photo-physio.jpg`   | Programs gallery, Donation cause card               |
| `images/gallery-*.svg`      | Illustrated "SAMPLE" placeholders (temple, langar)  |
| `images/cause-*.svg`        | Donation cause cards (langar, gau seva, temple)     |
| `images/festival-*.svg`     | Programs festival cards                             |
| `images/maharaj.svg`        | History — portrait placeholder                      |
| `images/upi-qr.svg`         | **Donation page only** — UPI QR code                |
| `images/logo.svg`, `favicon.svg` | Header logo and browser tab icon              |

---

## 4. How to change the phone number, email & address

All in `js/content.js`, under `contact:`.

```js
phone:        "+919876543210",   // dialing format — no spaces, includes country code
phoneDisplay: "+91 98765 43210", // how it looks on screen
whatsapp:     "919876543210",    // floating WhatsApp button (no + sign)
email:        "info@siddhashwaridham.org",
address:      { en: "...", hi: "..." },
mapLink:      "https://www.google.com/maps/search/?api=1&query=...",  // opens in new tab
mapEmbed:     "https://maps.google.com/maps?q=...&output=embed"        // Contact page map
```

Social links are under `social:` (`instagram`, `facebook`).

**Behaviour (already built in):** on a phone the phone number opens the dialer and the
email opens the mail app; on a desktop they are copied to the clipboard with a
*"Copied!"* toast. The address always opens Google Maps in a new tab.

---

## 5. How to change Aarti & Darshan timings

Two places in `js/content.js`, both under `pages.timings`:

1. **`daily:`** — the visible schedule rows. Times use 24-hour `"HH:MM"`:

```js
{ name: { en: "Sandhya Aarti", hi: "संध्या आरती" }, time: "19:00", end: "19:30", note: {...} }
```

2. **`openWindows:`** — the two daily opening slots that drive the live
   **"Temple is OPEN / CLOSED now"** badge:

```js
openWindows: [ ["04:30", "12:30"], ["16:00", "21:15"] ],
```

`special:` holds the festival-day and Ashtami timings shown in the second table.
The **Live Darshan** button URL is `pages.timings.live.url`.

---

## 6. How to change donation details

Under `pages.donation` in `js/content.js`:

**UPI**

```js
upi: {
  id:   "siddhashwaridham@okhdfcbank",   // shown + copied by the "Copy UPI ID" button
  qr:   "images/upi-qr.svg",             // the scannable QR image
  link: "upi://pay?pa=...&pn=...&cu=INR" // "Pay with UPI app" deep link (mobile only)
}
```

> The QR image must encode the **same** UPI ID. Generate a new one at any free UPI-QR
> generator and save it as `images/upi-qr.svg` (or `.jpg`/`.png`, then update `qr:`).

**Bank transfer** — `bank.rows` is a simple list of label/value pairs; each row gets its
own copy button automatically. **Suggested amounts** — `amounts.options` (currently
101 / 501 / 1100 / 5100).

> 🔒 The QR code appears **only on the Donation page**. Header, footer, Home and all
> other pages show a "Donate" button that links to `/donation`.

Forms are demo-only: they show a thank-you message and send nothing. To make them real,
point them at your form service (Formspree, Google Forms, your CRM) — see comments in
`js/site.js` (`wire()` → `form[data-form]`).

---

## 7. Language toggle

* Switch in the header: **EN | हिन्दी**, on every page.
* Default language: **हिन्दी**. The visitor's choice is saved in `localStorage`
  (key `siddhashwari-lang`) and remembered on their next visit.
* To change the default, edit `var lang = localStorage.getItem(LANG_KEY) || "hi";`
  near the top of `js/site.js` (`"hi"` → `"en"`).
* Devanagari text renders with **Mukta / Noto Sans Devanagari**; headings use
  **Playfair Display / Cinzel**; body uses **Poppins**.

---

## 8. Theme, fonts & colours

Colour tokens are at the top of `css/style.css`:

```css
--saffron: #E8710A;   --maroon: #7A1F1F;   --gold: #D4A017;   --cream: #FFF8EE;
```

Change a value once and it updates across the whole site.

---

## 9. Features already built in

Home hero with tagline and two calls to action · alternating **right/left scroll-in
gallery** (Intersection Observer) · About teaser · "Today at the temple" highlight
strip · `Home + 5` pages with active-link highlighting · sticky header + hamburger
menu · **UPI QR with copy button (Donation only)** · animated impact counters ·
countdown timer to the next festival · live **open/closed** badge · yearly festival
calendar · vertical history timeline · Mahamandleshwar biography + quote · Google Map ·
"how to reach" cards · floating WhatsApp button · lazy-loaded images · SEO + Open Graph
tags · favicon · smooth scroll · mobile-first responsive layout · print stylesheet.

---

## 10. Publishing

Upload the whole `mandir/` folder to any static host — Netlify, Cloudflare Pages,
GitHub Pages, or your own server. Then:
1. Replace `https://example.com` in each HTML file's `<head>` and in `sitemap.xml`.
2. Replace the sample phone, email, address, UPI ID and bank details in `js/content.js`.
3. Swap the **SAMPLE** placeholder images for real photos.

*Jai Shri Ram.* 🙏
