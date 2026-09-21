# Greenhse — changes from 21 September

Six files. **Every file sits at the path it belongs at in the project**, so you
can copy this folder over the top of the site and everything lands where it
should. Replace the existing files.

No new packages, no config change, no environment variable, no database.

```
data/site.json
site/lib/stripFinder.jsx
site/lib/api.jsx
site/pages/categories/StripLightsPage.jsx
public/blog/hero/best-lighting-products-in-perth.webp   (new file)
public/blog/img/group2.webp                             (new file)
```

Then build and deploy as normal. Nothing else to do.

---

## What changed

### 1. The 1212 side bend neon is in the strip light finder

`site/lib/stripFinder.jsx`

The new 12x12mm fixed 3000K side bend flex is now the first colour option on the
signage path, alongside the 6x12mm CCT and the RGB. It resolves to the real
product, `NEON-3000-sideflex-IP67-1`.

One thing to know if you touch this code: the product is listed in Magento as
**"24V Neon Flex 3000k SPI - 12x12mm"**. The "SPI" is a mistake in the product
name — SPI means addressable, and this one is a fixed 3000K white. The finder
matches it on RGB-vs-not rather than on SPI, so it works either way, but the
name is worth correcting in Magento.

### 2. All three neon products now report IP67

`site/lib/stripFinder.jsx`

No neon product name carries an IP figure, so the parser was falling back to
IP20 and the card said "splash resistant" directly under a spec line reading
IP67. All three neon grades are IP67 on the brochure.

### 3. The second transformer is now optional

`site/lib/stripFinder.jsx`, `site/pages/categories/StripLightsPage.jsx`

Where a run is past what a single feed carries, the kit used to quote two
transformers. It now quotes **one**, sized for the whole run, and says to run a
cable from it to each end of the strip — which is what actually stops the far
end fading. A second transformer is offered as optional.

Where no single driver carries the load (for example 10m of the 23W/m strip
needs 332W, past the 240W maximum), it still quotes two and says plainly that
the second one is needed rather than optional.

The sizing changed with it: the driver used to be sized for **half** the run,
because two were always quoted. It is now sized for the whole run. Leaving that
alone would have undersized every dual-feed job by a factor of two.

The feed diagram on the strip lights page labelled a driver at each end; the
right-hand label is now "feed".

### 4. Product cards: a fixed colour temperature no longer reads "CCT"

`site/lib/api.jsx`

The chip reader takes the first colour word it finds in the product name **or**
its description. The new 3000K neon has CCT in its description, so the card was
calling a fixed 3000K strip adjustable.

A single Kelvin figure in the product's own name now wins. A name carrying a
range (2700K-6000K) still reads CCT, so every genuinely adjustable product is
unaffected. Checked against all 250 products in the feed — no other name
carries both.

### 5. Blog photographs were being stretched

`data/site.json`

Every in-body product photograph is 529-1200 px wide and the prose column
renders at 696 px, so a 700 px photo was being blown up to fill it — a 2x
upscale on any retina screen, which is what showed as pixelation.

Every `<img>` in every post now carries `width` and `height` at half its own
pixel width (floored at 320, capped at 696), so it draws crisply. 122 images
across all 46 posts. `max-width:100%` is untouched, so on a phone the attribute
is ignored and the image still fits.

### 6. Two changes to one post

`data/site.json`, plus the two new images

`best-lighting-products-in-perth`:

- **New header photograph.** The old one was built from a low-resolution source
  and could not be sharpened.
- **Item 1 swapped.** It was the 8W downlight; item 2 is already a downlight, so
  the list opened with two of the same thing. It is now the 30mm 3W star light
  at $12 — which the lede had always promised and the post never showed. Specs
  are off the live DL03-ALL product page. Items 2 to 8 are untouched.

---

## One thing that may not show on your build

The blog changes above live in `data/site.json`. Your `/blog/` route fetches
posts from Magento at request time instead:

```
greenhse.com/rest/V1/integration/admin/token
greenhse.com/rest/V1/mpblog/post
```

Both of those are returning **401** at the moment, which is why the blog reads
"Couldn't load posts right now". Until the blog reads from `data/site.json`,
none of the blog changes — the header photographs, the image sizing, the post
edits — will appear, and the blog will stay empty.

Moving it to the static file also means a Magento password change can't take
the blog down again.

Any questions, let me know.
