import { registerRaw } from './rawIndex';
let t = '/mag',
  r = 'https://www.getestimate.greenhse.com/api/smtp-email-test.php',
  n = 'https://greenhse.com/media/catalog/product';
function i(e, t) {
  return e.custom_attributes?.find((e) => e.attribute_code === t)?.value;
}
function o(e) {
  return e
    ? e
        .replace(/<[^>]*>/g, ' ')
        .replace(/&nbsp;/gi, ' ')
        .replace(/&amp;/gi, '&')
        .replace(/&deg;/gi, '°')
        .replace(/\s+/g, ' ')
        .trim()
    : '';
}
function a(e) {
  let t = (e.media_gallery_entries || []).filter((e) => !e.disabled && e.file);
  if (!t.length) {
    let t = i(e, 'image');
    return t ? [`${n}${t}`] : [];
  }
  let r = t.find((e) => e.types?.includes('image')) || t[0],
    o = t.filter((e) => e !== r).sort((e, t) => (e.position ?? 0) - (t.position ?? 0));
  return [r, ...o].map((e) => `${n}${e.file}`);
}
function s(e) {
  return a(e)[0] || null;
}
function c(e) {
  return (e || '').replace(/<a\b[^>]*>[\s\S]*?<\/a>/gi, ' ');
}
function l(e) {
  let t = e.match(/\bIP\s?\d{2}\b/gi) || [],
    r = [];
  for (let e of t) {
    let t = e.replace(/\s+/g, '').toUpperCase();
    r.includes(t) || r.push(t);
  }
  return r.join('/') || null;
}
function d(e, t) {
  let r = (e) =>
    /RGB\+?CCT|RGBWW|RGBW/i.test(e) ? 'RGB/CCT' : /\bRGB\b/i.test(e) ? 'RGB' : /\bCCT\b/i.test(e) ? 'CCT' : null;
  let out = r(e || '') || r(t || '');
  /* A fixed colour temperature printed in the product's OWN NAME beats a CCT
     picked up from the description. The 1212 side bend neon is named
     "24V Neon Flex 3000k SPI - 12x12mm" and its description mentions CCT, so
     the card was calling a fixed 3000K strip adjustable. Only one Kelvin
     figure counts: a name carrying a range (2700K-6000K) really is adjustable
     and keeps its CCT chip. */
  if ('CCT' === out) {
    let k = String(e || '').match(/\b[2-6]\d{3}\s*k\b/gi);
    if (k && 1 === k.length) return k[0].replace(/\s+/g, '').toUpperCase();
  }
  return out;
}
function u(e, t = 'Strip Lights') {
  var r;
  let n,
    h,
    p,
    m,
    g,
    y,
    f,
    x,
    w,
    k,
    C,
    I,
    j,
    v = i(e, 'short_description'),
    L = i(e, 'description'),
    b = i(e, 'sortorder');
  return {
    id: e.id,
    sku: e.sku,
    name: e.name,
    slug: i(e, 'url_key') || e.sku,
    category: t,
    price: (function (e) {
      if ('number' == typeof e.price) return e.price;
      let t = i(e, 'price_ranges');
      return t ? Number(t) : null;
    })(e),
    priceIsFrom: 'grouped' === e.type_id,
    inStock: 'boolean' != typeof (n = e.extension_attributes?.stock_item?.is_in_stock) || n,
    visibility: e.visibility,
    callUs: '1' === i(e, 'call_us'),
    chips:
      ((h = []),
      (m = (p = `${e.name} ${o(c(i(e, 'short_description')))}`).match(/\b(12|24|240)\s*V\b/i)) && h.push(`${m[1]}V`),
      (g = l(p)) && h.push(g),
      (y = d(e.name, p)) && h.push(y),
      /dotless/i.test(p) && h.push('Dotless'),
      /smart|wifi|tuya/i.test(p) && h.push('Smart/WiFi'),
      h.slice(0, 3)),
    image: s(e),
    images: a(e),
    description: o(v),
    box: [],
    features: v ? [...v.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)].map((e) => o(e[1])).filter(Boolean) : [],
    specs: (function (e) {
      let t;
      if (!e) return [];
      let r = [],
        n = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
      for (; (t = n.exec(e));) {
        let e = [...t[1].matchAll(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi)].map((e) => o(e[1])),
          n = e[0],
          i = e.slice(1).join(' ').trim();
        n &&
          i &&
          r.push({
            label: n,
            value: i,
          });
      }
      return r;
    })(L),
    specFields:
      ((f = `${e.name} ${o(c(i(e, 'short_description')))} ${o(c(i(e, 'description')))}`),
      (x = 'grouped' === e.type_id),
      (w = f.match(/\b(12|24|240)\s*V\b/i)),
      [
        {
          label: 'Category',
          value: t,
        },
        {
          label: 'Colour',
          value:
            ((r = e.name),
            (k = f.match(/\(?~?\s?(\d{3,4})\s?K\)?/i)),
            (C = null),
            (C = /warm\s*white/i.test(f)
              ? 'Warm white'
              : /cool\s*white/i.test(f)
                ? 'Cool white'
                : /neutral\s*white/i.test(f)
                  ? 'Neutral white'
                  : /daylight/i.test(f)
                    ? 'Daylight white'
                    : d(r, f)) && k
              ? `${C} (~${k[1]}K)`
              : C || (k ? `~${k[1]}K` : null)),
        },
        {
          label: 'IP Rating',
          value: x ? 'See options' : l(f),
        },
        {
          label: 'Voltage',
          value: w ? `${w[1]}V` : null,
        },
        {
          label: 'Certification',
          value:
            ((I = /australian\s*certified/i.test(f)),
            (j = /\bRCM\b/.test(f)),
            I && j ? 'Australian certified / RCM' : I ? 'Australian certified' : j ? 'RCM' : null),
        },
        {
          label: 'Warranty',
          value: (function (e) {
            let t =
              e.match(/(\d+)\s?[- ]?\s?(?:yr|year)s?\b[^.]*?warranty/i) ||
              e.match(/warranty[^.]*?(\d+)\s?[- ]?\s?(?:yr|year)s?\b/i);
            if (!t) return null;
            let r = t[1];
            return `${r} year${'1' === r ? '' : 's'}`;
          })(f),
        },
      ].filter((e) => e.value)),
    customAttributes: e?.custom_attributes || [],
    extensionAttributes: e?.extension_attributes || '',
    sortorder: b || null,
    groupedSkus:
      'grouped' === e.type_id
        ? (e.product_links || [])
            .filter((e) => 'associated' === e.link_type)
            .sort((e, t) => e.position - t.position)
            .map((e) => e.linked_product_sku)
        : [],
    options: Array.isArray(e.options) ? e.options : [],
    productLinks: e.product_links || [],
  };
}
let h = new Map();
async function p(e) {
  let t = e?.id,
    r = e?.categoryLabel,
    n = e?.next,
    i = `${t}::${r}`,
    o = h.get(i);
  if (o && Date.now() - o.timestamp < 6e4) return o.promise;
  let a = (async () => {
    let e = await fetch(
      `https://www.getestimate.greenhse.com/api/product.php?id=${encodeURIComponent(t)}`,
      n
        ? {
            next: n,
          }
        : {
            cache: 'no-store',
          },
    );
    if (!e.ok) throw Error(`Failed to fetch products: ${e.status}`);
    let i = await e.json();
    registerRaw(i.items);
    return (Array.isArray(i.items) ? i.items : []).filter((e) => 1 === e.status).map((e) => u(e, r));
  })();
  return (
    h.set(i, {
      promise: a,
      timestamp: Date.now(),
    }),
    a.catch(() => {
      h.delete(i);
    }),
    a
  );
}
async function m(e, t) {
  return (await p(t)).find((t) => t.slug === e) || null;
}
let g = new Map();
async function y(e) {
  let t = g.get(e);
  if (t && Date.now() - t.timestamp < 3e5) return t.promise;
  let r = (async () => {
    let t = await fetch(`https://www.getestimate.greenhse.com/api/categories.php?id=${encodeURIComponent(e)}`, {
      cache: 'no-store',
    });
    if (!t.ok) throw Error(`Failed to fetch category ${e}: ${t.status}`);
    return t.json();
  })();
  return (
    g.set(e, {
      promise: r,
      timestamp: Date.now(),
    }),
    r.catch(() => {
      g.delete(e);
    }),
    r
  );
}
let f = [3, 18];
async function x({ cache: e = 'no-store' } = {}) {
  let t = [11, ...f],
    r = await Promise.all(
      t.map((t) =>
        fetch(`https://www.getestimate.greenhse.com/api/product.php?id=${t}`, {
          cache: e,
        })
          .then((e) =>
            e.ok
              ? e.json()
              : {
                  items: [],
                },
          )
          .catch(() => ({
            items: [],
          })),
      ),
    ),
    n = new Map();
  for (let e of r)
    for (let t of Array.isArray(e.items) ? e.items : []) { registerRaw([t]); 1 !== t.status || n.has(t.id) || n.set(t.id, u(t)); }
  return [...n.values()];
}
async function w({ name: e, email: t, phone: n, message: i, items: o, product: a }) {
  let s,
    c = (function ({ name: e, email: t, phone: r, message: n, items: i, product: o }) {
      let a = new FormData(),
        s = (function ({ items: e, product: t }) {
          return Array.isArray(e) && e.length
            ? e.map((e) => ({
                id: e.id,
                name: e.name,
                category: e.category ?? '',
                price: 'number' == typeof e.price ? e.price : 0,
                qty: e.qty ?? 1,
              }))
            : t
              ? [
                  {
                    id: t.id,
                    name: t.name,
                    category: t.category ?? '',
                    price: 'number' == typeof t.price ? t.price : 0,
                    qty: 1,
                  },
                ]
              : [];
        })({
          items: i,
          product: o,
        }),
        c = s.reduce((e, t) => e + t.price * t.qty, 0),
        l = 1.1 * c,
        d = s
          .map(
            (e) => `
        <tr>
          <td style="padding:4px 10px;border:1px solid #ddd;">${e.name}</td>
          <td style="padding:4px 10px;border:1px solid #ddd;text-align:center;">${e.qty}</td>
          <td style="padding:4px 10px;border:1px solid #ddd;text-align:right;">$${(e.price * e.qty).toFixed(2)}</td>
        </tr>`,
          )
          .join(''),
        u = s.length
          ? `
        <table style="border-collapse:collapse;margin-top:8px;">
          <thead>
            <tr>
              <th style="padding:4px 10px;border:1px solid #ddd;text-align:left;">Product</th>
              <th style="padding:4px 10px;border:1px solid #ddd;">Qty</th>
              <th style="padding:4px 10px;border:1px solid #ddd;text-align:right;">Line total</th>
            </tr>
          </thead>
          <tbody>${d}</tbody>
        </table>
        <p><strong>Subtotal (ex-GST):</strong> $${c.toFixed(2)}</p>
        <p><strong>Total (incl. GST):</strong> $${l.toFixed(2)}</p>`
          : '',
        h = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <p><strong>Name:</strong> ${e}</p>
        <p><strong>Email:</strong> ${t}</p>
        <p><strong>Phone:</strong> ${r ?? ''}</p>
        <p><strong>Message:</strong> ${n}</p>
        ${u}
      </div>
    `;
      return (
        a.append('submit', 'true'),
        a.append('admin', 'true'),
        a.append('name', e.trim()),
        a.append('email', t.trim()),
        a.append('phone', (r ?? '').trim()),
        a.append('subject', 'Greenhse Strip Light Quote Request'),
        a.append('message', h),
        a.append('products', JSON.stringify(s)),
        a.append('env', !0),
        a
      );
    })({
      name: e,
      email: t,
      phone: n,
      message: i,
      items: o,
      product: a,
    });
  try {
    s = await fetch(r, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: c,
    });
  } catch {
    throw Error("We couldn't reach our server. Check your connection and try again.");
  }
  if (!s.ok) throw Error(`We couldn't send your request (error ${s.status}). Please try again.`);
  try {
    return await s.json();
  } catch {
    return {};
  }
}
async function k({ name: e, email: r, phone: n, message: i }) {
  let o,
    a = new FormData();
  (a.append('email', r.trim()), a.append('form_key', 'k10r94sSBk9x59SO'));
  try {
    o = await fetch(`${t}/newsletter/subscriber/new/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: a,
    });
  } catch {
    throw Error("We couldn't reach our server. Check your connection and try again.");
  }
  if (!o.ok) throw Error(`We couldn't send your message (error ${o.status}). Please try again.`);
  try {
    return await o.json();
  } catch {
    return {};
  }
}
async function C({ name: e, email: r, phone: n, message: i }) {
  let o,
    a = new FormData();
  (a.append('name', e.trim()),
    a.append('email', r.trim()),
    a.append('form_key', 'k10r94sSBk9x59SO'),
    a.append('phone', (n ?? '').trim()),
    a.append('comment', i));
  try {
    o = await fetch(`${t}/contact/index/post/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: a,
    });
  } catch {
    throw Error("We couldn't reach our server. Check your connection and try again.");
  }
  if (!o.ok) throw Error(`We couldn't send your message (error ${o.status}). Please try again.`);
  try {
    return await o.json();
  } catch {
    return {};
  }
}
async function I({ name: e, email: t, phone: n, message: i }) {
  let o,
    a = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <p><strong>Name:</strong> ${e}</p>
        <p><strong>Email:</strong> ${t}</p>
        <p><strong>Phone:</strong> ${n ?? ''}</p>
        <p><strong>Message:</strong> ${i}</p>
      </div>
    `,
    s = new FormData();
  (s.append('submit', 'true'),
    s.append('admin', 'true'),
    s.append('name', e.trim()),
    s.append('email', t.trim()),
    s.append('phone', (n ?? '').trim()),
    s.append('subject', 'Greenhse Contact Form Enquiry'),
    s.append('message', a),
    s.append('env', !0));
  try {
    o = await fetch(r, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: s,
    });
  } catch {
    throw Error("We couldn't reach our server. Check your connection and try again.");
  }
  if (!o.ok) throw Error(`We couldn't send your message (error ${o.status}). Please try again.`);
  try {
    return await o.json();
  } catch {
    return {};
  }
}
export const GST_RATE = 0.1;
export const formatPrice = function (e) {
  return `$${e.toFixed(2)}`;
};
export const incGst = function (e) {
  return 1.1 * e;
};
export const AIR_FLOW_CATEGORY_ID = 52;
export const BATTEN_CATEGORY_ID = 23;
export const CEILING_CATEGORY_ID = 9;
export const COMMERCIAL_CATEGORY_ID = 12;
export const DOWNLIGHTS_CATEGORY_ID = 5;
export const EMERGENCY_CATEGORY_ID = 67;
export const FLOOD_CATEGORY_ID = 7;
export const GARDEN_CATEGORY_ID = 58;
export const HIGH_BAY_CATEGORY_ID = 14;
export const INDUSTRIAL_CATEGORY_ID = 34;
export const OUTDOOR_WALL_CATEGORY_ID = 21;
export const PRODUCT_RESOLUTION_FEEDS = [
  {
    id: 11,
    categoryLabel: 'Strip Lights',
  },
  {
    id: 5,
    categoryLabel: 'Downlights',
  },
  {
    id: 17,
    categoryLabel: '12V/24V Transformers / Controllers',
  },
  {
    id: 52,
    categoryLabel: 'Air Flow / Ceiling Fans',
  },
  {
    id: 19,
    categoryLabel: 'Smart Life',
  },
  {
    id: 23,
    categoryLabel: 'Batten Fittings / Batten Lights',
  },
  {
    id: 9,
    categoryLabel: 'Ceiling / Panel / Oyster Lights',
  },
  {
    id: 67,
    categoryLabel: 'Emergency Lights',
  },
  {
    id: 7,
    categoryLabel: 'Flood / Sports Lighting',
  },
  {
    id: 14,
    categoryLabel: 'High Bay Lights',
  },
  {
    id: 34,
    categoryLabel: 'Industrial Lighting',
  },
  {
    id: 58,
    categoryLabel: 'Landscape / Garden Lighting',
  },
  {
    id: 21,
    categoryLabel: 'Outdoor / Wall Lights',
  },
  {
    id: 12,
    categoryLabel: 'School & Commercial LED Lighting',
  },
  {
    id: 55,
    categoryLabel: 'Security / Sensors',
  },
  {
    id: 18,
    categoryLabel: 'Star Lights',
  },
  {
    id: 66,
    categoryLabel: 'LED Track / Linear Lights',
  },
  {
    id: 72,
    categoryLabel: 'Switches / Powerpoints',
  },
];
export const SECURITY_CATEGORY_ID = 55;
export const SMART_LIFE_CATEGORY_ID = 19;
export const STAR_LIGHTS_CATEGORY_ID = 18;
export const STRIP_LIGHTS_CATEGORY_ID = 11;
export const SWITCHES_CATEGORY_ID = 72;
export const TRACK_CATEGORY_ID = 66;
export const TRANSFORMERS_CATEGORY_ID = 17;
export const categoryChildren = function (e) {
  return Array.isArray(e?.items)
    ? e.items
        .filter((e) => e && null != e.id)
        .map((e) => ({
          id: e.id,
          name: e.name,
        }))
    : [];
};
export const fetchCategory = y;
export const fetchFinderProducts = x;
export const fetchStripLightProductBySlug = m;
export const fetchStripLightProducts = p;
export const getAttr = i;
export const getImage = s;
export const normalizeProduct = u;
export const stripHtml = o;
export const submitContactMessage = I;
export const submitEnquiry = C;
export const submitQuoteRequest = w;
export const submitSubscribe = k;
