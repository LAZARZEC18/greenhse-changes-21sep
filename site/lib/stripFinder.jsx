import * as api from './api';
import * as asset from './asset';
/* ---------------------------------------------------------------------------
   THE QUESTIONS
   Every answer maps to an exact product. Lazar, 15 Sep: "every single section
   of the finder needs to be updated to exact and specific products so that
   everything is actually correct and so that they know and actually get the
   correct product no matter what they select." So the places are the
   brochure's own application list, the colours offered on each path are only
   the colours that strip is made in, and the recommendation is a lookup
   table (see RESOLVE below), not a score. There is no "somewhere else" any
   more: every place leads somewhere specific.
   --------------------------------------------------------------------------- */
function isCove240(e) {
  return 'cove' === e.place && 'roomy' === e.space;
}
let r = [
  {
    key: 'place',
    q: 'Where is the strip light going?',
    hint: 'Pick the closest match — each one leads to the strip made for that job.',
    opts: [
      ['Recessed ceiling / cove — a hidden shelf or bulkhead in the ceiling', 'cove'],
      ['Under kitchen cabinets / benchtop', 'kitchen'],
      ['Bathroom niche, shower or other wet area', 'bathroom'],
      ['Inside cabinets, shelving, bookcases, TV units (dry)', 'joinery'],
      ['Outdoors — garden beds, pergolas, under decks, pools', 'outdoor'],
      ['Stairs or hallway', 'stairs'],
      ['One long continuous line over 10 metres (indoors)', 'longrun'],
      ['Signage, curves or letters — a shape a straight strip will not follow', 'neon'],
      ['Shop display or food cabinet', 'display'],
    ],
  },
  {
    key: 'space',
    q: 'How much flat space is inside your ceiling recess?',
    when: (e) => 'cove' === e.place,
    hint: '240V strip sits on a shelf inside the recess. Have a look inside yours — which one is it?',
    opts: [
      ["Yes — there's a flat shelf about 150mm across", 'roomy'],
      ["No — it's tighter than that, or I'm not sure", 'tight'],
    ],
  },
  {
    key: 'kind',
    q: "What's in the cabinet?",
    when: (e) => 'display' === e.place,
    hint: 'Retail displays want true colour (CRI 90+). Fresh food wants the red and white mix that keeps meat looking fresh — a different strip.',
    opts: [
      ['Retail — products, jewellery, clothing, bottles', 'retail'],
      ['Fresh meat, deli or seafood', 'meat'],
    ],
  },
  {
    key: 'colour',
    q: 'What colour light do you want?',
    /* Only the colours that strip is actually made in. Stairs is a kit and
       the meat strip is one colour, so neither asks. */
    when: (e) => 'stairs' !== e.place && !('display' === e.place && 'meat' === e.kind),
    hint: (e) =>
      isCove240(e)
        ? '240V recessed strip comes in fixed colours: 3000K warm, 4000K natural, 6000K cool — or full-colour RGB.'
        : 'cove' === e.place || 'longrun' === e.place
          ? 'The long run COB is a fixed white — 3000K warm or 4000K natural.'
          : 'kitchen' === e.place
            ? 'The under-cabinet strip is the 12W/m High Lumen SMD, IP65 sealed, in four fixed whites.'
            : 'bathroom' === e.place
              ? 'Bathroom niches get the 20W/m High Lumen SMD (IP65) — 4000K or 5700K. Want it warmer? The 12W/m does 3000K.'
              : 'joinery' === e.place
                ? 'Fixed whites are dot-free COB. CCT = adjust warm ↔ cool (2700–6000K) with the remote. RGB = millions of colours.'
                : 'outdoor' === e.place
                  ? 'Outdoors: the IP67 sealed long run COB in 3000K warm, the IP65 CCT COB if you want to adjust warm ↔ cool, or the IP65 RGB COB for full colour.'
                  : 'neon' === e.place
                    ? 'Neon flex bends on its side, so it follows a curve or a letter. Fixed 3000K warm white (12x12mm), adjustable white 2700–6000K (6x12mm), or full colour. All IP67.'
                    : 'display' === e.place
                      ? 'The 23W/m display strip is made in 4000K natural and 5000K crisp, CRI 90+. IP20 — dry indoor cases and shelving.'
                      : '',
    opts: (e) =>
      isCove240(e)
        ? [
            ['Warm white — 3000K', 'w3000'],
            ['Natural white — 4000K', 'w4000'],
            ['Cool white — 6000K', 'w6000'],
            ['Full colour (RGB)', 'rgb'],
          ]
        : 'cove' === e.place || 'longrun' === e.place
          ? [
              ['Warm white — 3000K', 'w3000'],
              ['Natural white — 4000K', 'w4000'],
            ]
          : 'kitchen' === e.place
            ? [
                ['Extra warm white — 2700K', 'w2700'],
                ['Warm white — 3000K', 'w3000'],
                ['Natural white — 4000K', 'w4000'],
                ['Crisp white — 5700K', 'w5700'],
              ]
            : 'bathroom' === e.place
              ? [
                  ['Natural white — 4000K', 'w4000'],
                  ['Crisp white — 5700K', 'w5700'],
                  ['Warm white — 3000K (the softer 12W/m strip)', 'w3000'],
                ]
              : 'joinery' === e.place
                ? [
                    ['Extra warm white — 2700K (dot-free COB)', 'w2700'],
                    ['Warm white — 3000K (dot-free COB)', 'w3000'],
                    ['Natural white — 4000K (dot-free COB)', 'w4000'],
                    ['Crisp white — 5700K (High Lumen SMD)', 'w5700'],
                    ['Adjustable white — warm ↔ cool with the remote (CCT)', 'cct'],
                    ['Full colour (RGB) — millions of colours', 'rgb'],
                  ]
                : 'outdoor' === e.place
                  ? [
                      ['Warm white — 3000K (sealed IP67 long run COB)', 'w3000'],
                      ['Adjustable white — warm ↔ cool, 2700–6000K (sealed IP65 CCT COB)', 'cct'],
                      ['Full colour (RGB) — sealed IP65 COB', 'rgb'],
                    ]
                  : 'neon' === e.place
                    ? [
                        ['Warm white — 3000K (fixed, 12x12mm side bend)', 'w3000'],
                        ['Adjustable white — 2700K to 6000K (CCT, 6x12mm)', 'cct'],
                        ['Full colour (RGB)', 'rgb'],
                      ]
                    : [
                        ['Natural white — 4000K', 'w4000'],
                        ['Crisp white — 5000K', 'w5000'],
                      ],
  },
  {
    key: 'control',
    q: 'How do you want to control it?',
    /* 240V is remote-only, neon is Bluetooth, stairs is a kit with its own
       controller — none of those get a choice. */
    when: (e) => !isCove240(e) && 'stairs' !== e.place && 'neon' !== e.place,
    hint: "Either way you get a controller in the kit — it's the box that lets you dim the light and turn it on and off. The only difference is how you talk to it: a handheld remote, or your phone.",
    opts: [
      ['Simple — with a remote', 'simple'],
      ['Smart — from the phone app', 'smart'],
    ],
  },
  {
    key: 'length',
    q: 'How many metres do you need?',
    input: !0,
    when: (e) => 'stairs' !== e.place,
    hint: (e) =>
      n(e)
        ? "Type your run length in metres. The long run COB is made for long runs — 5 metres and up, 20m from one end, 40m fed from both. Shorter than 5m and we'll point you at a better-suited strip."
        : isCove240(e)
          ? "Type your exact run length. 240V recessed strip: whites 10–50m, RGB 10–35m. Under 10 metres? We'll ask you to give us a quick call — (08) 9297 2969."
          : "Type your run length in metres. 24V strip feeds from one end up to 5m; 5–10m needs power from TWO points (e.g. two corners). Over 10 metres? We'll ask you to give us a quick call.",
  },
];
/* The long run COB paths: the long run place itself, a recess too tight for
   240V, and a white outdoor run (the IP67 sealed version of the same strip).
   These get the dedicated long run screen with the datasheet on it. */
function n(e) {
  return (
    'longrun' === e.place ||
    ('cove' === e.place && 'tight' === e.space) ||
    ('outdoor' === e.place && 'rgb' !== e.colour && 'cct' !== e.colour)
  );
}
let s = {
    /* Every card in the finder now shows the actual product rather than a
       styled room. Lazar's note: "the finder needs to just have product images
       so they can actually see what is good." These are the Greenhse product
       photographs off the live catalogue, one per path, so the picture on the
       card is the strip the answer leads to. */
    cove: {
      src: asset.asset('/images/finder/place-cove.webp'),
      alt: '240V LED strip light reels, warm white and cool white',
      caption: '240V strip on the reel — the one that sits in a ceiling recess',
    },
    kitchen: {
      src: asset.asset('/images/finder/place-kitchen.webp'),
      alt: '24V High Lumen SMD 12W/m strip light on the reel, lit warm white',
      caption: 'The 12W/m High Lumen SMD — the under-cabinet strip, IP65 sealed',
    },
    bathroom: {
      src: asset.asset('/images/finder/place-wet.webp'),
      alt: 'IP65 silicone sleeved 24V LED strip light on the reel',
      caption: 'The IP65 sleeved High Lumen SMD — sealed the whole way along',
    },
    joinery: {
      src: asset.asset('/images/finder/place-cabinet.webp'),
      alt: 'Dot-less COB LED strip light coiled and lit warm white',
      caption: 'Dot-less COB — one smooth line, no spots, for open joinery',
    },
    outdoor: {
      src: asset.asset('/images/finder/place-outdoor.webp'),
      alt: 'Sealed 24V RGB COB strip light on the reel',
      caption: 'The sealed outdoor strips — IP67 long run COB in white, IP65 COB in full colour',
    },
    stairs: {
      src: asset.asset('/images/finder/place-stairs.webp'),
      alt: 'Short cut length of COB LED strip light with its lead attached',
      caption: 'Cut to length with a lead on the end — one per step or one run',
    },
    longrun: {
      src: asset.asset('/images/finder/place-longrun.webp'),
      alt: 'Long run 24V COB LED strip light roll',
      caption: 'The long run roll — 20 m from one end, 40 m fed from both',
    },
    neon: {
      src: asset.asset('/images/finder/place-neon.webp'),
      alt: 'Neon flex strip light bent into a zig-zag across a building facade',
      caption: 'Neon flex, bent on its side — it follows a curve or a letter',
    },
    display: {
      src: asset.asset('/images/finder/place-display.webp'),
      alt: 'High lumen high colour SMD display strip light, 240 LEDs per metre',
      caption: 'Display grade — 240 LEDs a metre, CRI 90+ for true colour',
    },
  },
  /* The colour question has no thumbnails. Lazar: "these 2 images should not
     be in the finder" — the CCT and RGB shots were supplier bench photos, a
     loose reel on a worktop with the driver and flying leads in frame, which
     is the opposite of what the rest of the finder now shows. The fixed-white
     shot was a proper studio photo, but one picture above two blank rows reads
     as broken, so the whole set is off and the question stands on its words,
     which already say what each option does. Put three matching studio shots
     in /images/finder/ and fill this object back in to bring them back. */
  o = {},
  a = [
    {
      img: asset.asset('/images/finder/cabinet-cool-white.webp'),
      label: 'Cool white',
      note: 'Crisp and bright — kitchens, task areas, mornings.',
    },
    {
      img: asset.asset('/images/finder/cabinet-warm-white.webp'),
      label: 'Warm white',
      note: 'Soft and cosy — living areas, bedrooms, evenings.',
    },
  ],
  l = [
    {
      img: asset.asset('/images/finder/cabinet-rgb-green.webp'),
      label: 'Green',
      note: '',
    },
    {
      img: asset.asset('/images/finder/cabinet-rgb-blue.webp'),
      label: 'Blue',
      note: '',
    },
    {
      img: asset.asset('/images/finder/cabinet-rgb-red.webp'),
      label: 'Red',
      note: '',
    },
  ];
function d(e, t) {
  let i = e.find((e) => e.sku === t);
  return i?.productLinks?.length
    ? i.productLinks
        .filter((e) => 'associated' === e.link_type)
        .map((t) => e.find((e) => e.sku === t.linked_product_sku))
        .filter(Boolean)
    : [];
}
function c(e) {
  let t = (e.name || '').toLowerCase();
  return /remote/.test(t)
    ? 'remote'
    : /controller/.test(t)
      ? 'controller'
      : /transformer|driver/.test(t)
        ? 'transformer'
        : /channel|profile/.test(t)
          ? 'channel'
          : 'strip';
}
function u(e) {
  let t = `${(e.specs || []).map((e) => e.value).join(' ')} ${e.name}`.toLowerCase().match(/ip\s?(\d{2})/);
  return t ? parseInt(t[1], 10) : 20;
}
/* buildPackage shadows `u` with the run length, so the IP parser needs a
   second name to be reachable in there. */
const ipRating = u;
/* Watts per metre, read off the product name.
   The catalogue used to carry one strip per family, so each family could hard
   code its wattage. It now carries the same dotless COB at 7.5, 12 and 16 W/m
   and the same SMD at 12, 20 and 23, and the figure is in the name of every
   one of them. Reading it means the driver sizing, the run lengths and the
   wording all follow the product the customer actually picked rather than a
   number frozen when the range was smaller. Falls back to the family default
   when a name carries no figure. */
function wattsPerMetre(e, t) {
  let i = String((e && e.name) || '')
    .toLowerCase()
    .match(/(\d+(?:\.\d+)?)\s*w\s*\/?\s*m/);
  return i ? parseFloat(i[1]) : t;
}
/* How far a 24V run goes before it has to be fed from the other end too.
   Voltage drop decides this, so it tracks watts per metre: the 7.5 W/m COB is
   sold on 40 m rolls, the 16 W/m COB wants a feed every 5 m. These are the
   numbers off the product pages, not a formula. */
function runLimits(e) {
  /* Only the low wattage COB is the long run product — that is the one sold on
     20 and 40 metre rolls. Everything else in the COB range is 5 m from one end
     and 10 m fed from both, which is what the strip lighting brochure states for
     the whole family. The middle band used to hand the 12 W/m COB 10 m and 20 m,
     which was a straight over-statement: it is not the long run strip. */
  return e <= 8 ? { single: 20, dual: 40 } : { single: 5, dual: 10 };
}
function h(e) {
  let t = e.name.toLowerCase(),
    i = u(e);

  /* ---- Neon flex ----
     Side bend flex, so it takes a curve or a letter shape that no rigid strip
     will follow. Two of them: 6x12mm CCT at IP67, and 12x12mm RGB SPI at IP66.
     Both run on Bluetooth and both need their own matching channel, which is
     why they are their own family rather than another kind of strip. */
  if (t.includes('neon')) {
    let r = t.includes('rgb'),
      /* The 1212 side bend added 21 Sep: 12x12mm, fixed 3000K warm white,
         premium anti-yellowing silicone, IP67, 5 year warranty. It is a
         different product from the 6x12mm CCT flex, not a re-colour of it,
         so it gets its own branch rather than being folded into the CCT one. */
      warm = !r && /3000/.test(t),
      n = wattsPerMetre({ name: t }, 10),
      /* All three neon products state 5m on a single feed and 10m fed from
         both ends on their own product pages. Not derived - taken from there. */
      o = { single: 5, dual: 10 };
    return {
      fam: 'NEON',
      wpm: n,
      wpmTxt: r
        ? 'Neon Flex RGB SPI · 12x12mm'
        : warm
          ? 'Neon Side Bend Flex 3000K · 12x12mm'
          : 'Neon Side Bend Flex CCT · 6x12mm',
      single: o.single,
      dual: o.dual,
      channel: 'required',
      /* All three neon grades are IP67 on the brochure — the RGB one used to
         be carried here as IP66, off an older product page. */
      spec: r
        ? `24V Neon Flex RGB SPI · 12x12mm · IP67 · fully programmable · ${o.single}m one feed / ${o.dual}m both ends`
        : warm
          ? `24V Neon Side Bend Flex · 12x12mm · IP67 · 3000K warm white · premium anti-yellowing silicone · 5 year warranty · ${o.single}m one feed / ${o.dual}m both ends`
          : `24V Neon Side Bend Flex CCT · 6x12mm · IP67 · 2700–6000K · ${o.single}m one feed / ${o.dual}m both ends`,
      /* Every neon grade is IP67 on the brochure. None of the product names
         carry an IP figure, so the parser fell back to IP20 and the card said
         "splash resistant" right under a spec line reading IP67. */
      ipTxt: 'IP67 — fully sealed, fine outdoors',
      where: 'Signage, curves, letters and feature shapes — anywhere a rigid strip will not bend',
      teach: warm
        ? [
            'Side bend: it curves flat on its side, so it follows a shape or a letter',
            'Fixed 3000K warm white — a soft, even glow rather than a colour-changing effect',
            'Premium anti-yellowing silicone, IP67 — rated indoors and out, and it stays white',
            'Sits in a 12x12mm channel, or clips into a groove',
            'Five year warranty',
          ]
        : [
            'Side bend: it curves flat on its side, so it follows a shape or a letter',
            r ? 'Fully programmable colour, addressed section by section' : 'Adjustable warm to cool white, 2700K to 6000K',
            'Bluetooth control, so it needs no WiFi',
            r ? 'Sits in a 12x12mm support channel' : 'Sits in a 6x12mm support channel',
          ],
    };
  }

  /* ---- Addressable RGBW ----
     SPI means each section is addressed on its own, so it chases and fades
     rather than the whole run changing together. The RGBW version has a real
     4000K white in it as well as the colour. */
  if (t.includes('spi')) {
    let n = wattsPerMetre({ name: t }, 14),
      o = { single: 5, dual: 10 };   /* stated on the product page */
    return {
      fam: 'SPI',
      wpm: n,
      wpmTxt: 'RGBW SPI · addressable',
      single: o.single,
      dual: o.dual,
      channel: 'required',
      spec: `24V RGBW SPI · 4000K white plus full colour · IP${i} · fully programmable · ${o.single}m one feed / ${o.dual}m both ends`,
      ipTxt: `IP${i} — indoor and sheltered spots`,
      where: 'Feature walls, bars and anywhere you want the light to move rather than sit still',
      teach: [
        'Addressable: every section is controlled on its own, so it can chase, fade and run effects',
        'RGBW — a real 4000K white as well as the colour, so it works as a light and not only an effect',
        'Bluetooth control, no WiFi needed',
        'A data cable links one run to the next',
      ],
    };
  }

  /* ---- Fresh meat display ----
     A specialist strip: the red and white mix is tuned so meat reads fresh in
     a display cabinet. IP68, because it lives somewhere that gets hosed out. */
  if (t.includes('meat')) {
    let n = wattsPerMetre({ name: t }, 14),
      o = { single: 5, dual: 10 };   /* stated on the product page */
    return {
      fam: 'MEAT',
      wpm: n,
      wpmTxt: 'Fresh Meat display strip · red and white',
      single: o.single,
      dual: o.dual,
      channel: 'required',
      spec: `24V Fresh Meat strip · red and white · ${n}W/m · IP${i} · ${o.single}m one feed / ${o.dual}m both ends`,
      ipTxt: `IP${i} — fully sealed, washes down`,
      where: 'Butcher and deli display cabinets',
      teach: [
        'A red and white mix tuned so fresh meat reads the right colour under it',
        `IP${i} — sealed for a cabinet that gets cleaned down`,
        'Bluetooth control, no WiFi needed',
        'This is a specialist strip. Ring us and we will spec the cabinet with you',
      ],
    };
  }

  /* ---- Display grade SMD ----
     The 23 W/m high colour strip. Very bright and CRI 90+, which is what
     retail display needs, and what separates it from the 12 W/m wet-area SMD
     it shares most of its name with. */
  if (t.includes('display') || (t.includes('high colour') && t.includes('smd'))) {
    let n = wattsPerMetre({ name: t }, 23),
      o = { single: 5, dual: 10 };   /* stated on the product page */
    return {
      fam: 'DISPLAY',
      wpm: n,
      wpmTxt: `High Lumen High Colour SMD · ${n}W/m display grade`,
      single: o.single,
      dual: o.dual,
      channel: 'required',
      spec: `24V High Lumen High Colour SMD · ${n}W/m · up to 3800 lumens a metre · 240 LEDs a metre · CRI 90+ · IP20 · 4000K or 5000K · ${o.single}m one feed / ${o.dual}m both ends`,
      ipTxt: 'IP20 — dry indoor display cases, shelving and joinery',
      where: 'Retail display, shelving and joinery — anywhere the goods have to look their real colour',
      teach: [
        `Very bright: up to 3800 lumens a metre from ${n}W/m, 240 LEDs a metre`,
        'CRI 90+ — colours read true, which is the whole point in a display',
        'Warm, natural or bright white',
        'Dotless, so it reads as one line of light rather than a row of dots',
      ],
    };
  }

  if (t.includes('240v')) {
    let e = t.includes('rgb');
    return {
      fam: '240V',
      wpm: 10,
      wpmTxt: '240V driver included',
      min: 10,
      single: e ? 35 : 50,
      dual: e ? 35 : 50,
      channel: 'none',
      spec: e
        ? '240V RGB · IP65 · runs 10–35m · $60 driver included · remote only · no channels'
        : '240V · IP65 · 3000/4000/6000K or blue · runs 10–50m · $60 driver included · remote only · no channels',
      ipTxt: 'IP65 — fine with dust & splashes',
      where: 'Recessed ceilings — long runs of 10 metres or more',
      teach: [
        '$60 240V driver INCLUDED — powers it straight from mains',
        e ? 'Long runs only: 10–35 metres (RGB)' : 'Long runs only: 10–50 metres — under 10m? Call us',
        e ? 'Full colour from the remote' : 'Fixed colour white — pick warm, natural or cool',
        "Remote control only — can't be made smart",
      ],
    };
  }
  /* The long run strip is now sold as the 7.5 W/m dotless COB, in 3000K and
     4000K. It used to be listed as "Long Run COB" and the finder matched that
     phrase, so when Magento renamed it this whole branch stopped matching
     anything and the long run answer fell through to a 5 metre strip. Match it
     on what actually makes it the long run strip instead: a COB at 8 W/m or
     under. It is sold on 40, 30, 20, 15 and 10 metre rolls. */
  return t.includes('long run') ||
    t.includes('longrun') ||
    t.includes('long-run') ||
    (t.includes('cob') && wattsPerMetre({ name: t }, 16) <= 8)
    ? (() => {
        let e = wattsPerMetre({ name: t }, 7.5);
        return {
          fam: 'LONGRUN',
          wpm: e,
          wpmTxt: `24V Long Run COB · ${e}W/m`,
          min: 5,
          single: 20,
          dual: 40,
          channel: 'optional',
          connector: 4,
          spec: `24V Long Run dotless COB · ${e}W/m · IP20, IP67 option · 20m one feed / 40m both ends · rolls of 10, 15, 20, 30 and 40m`,
          ipTxt: i >= 65 ? `IP${i} — sealed for wet areas and outdoors` : 'IP20 indoors, IP67 silicon injected version for outdoors',
          where: 'Long continuous runs, 10 metres and up — indoors, or the IP67 version outdoors',
          teach: [
            `Built for distance: ${e}W/m keeps the voltage drop down over a long run`,
            'One driver feeds 20m from one end; power both ends for up to 40m',
            'Comes on 10, 15, 20, 30 and 40 metre rolls, so a long run has no joins in it',
            'Silicon injected IP67 version for outdoors',
            "Under 5m? This isn't the right strip for the job — call us and we'll match something better suited",
          ],
        };
      })()
    : t.includes('rgb') && t.includes('cob')
      ? {
          fam: 'RGBCOB',
          wpm: wattsPerMetre({ name: t }, 16),
          single: 5,
          dual: 10,
          channel: 'required',
          spec: `24V RGB COB · dot-less · ${wattsPerMetre({ name: t }, 16)}W/m · IP${i} · 5m one feed / 10m both ends`,
          ipTxt: i >= 65 ? 'IP65 — handles steam & splashes' : 'IP20 — dry indoor spots',
          where: 'Under kitchen cabinets, bars, bulkheads, shelving — anywhere you want colour',
          teach: [
            'Dot-less: one smooth line of colour, no visible LED dots',
            'Millions of colours + a good cool-white',
            'Feed one end up to 5m; power BOTH ends for up to 10m',
            '16W per metre — needs an aluminium channel to stay cool',
          ],
        }
      : t.includes('cob')
        ? (() => {
            /* The dotless COB is now stocked at 7.5, 12 and 16 W/m, and the
               12 W/m is a fixed 2700K rather than adjustable, so neither the
               wattage nor the colour line can be hard coded any more. */
            let e = wattsPerMetre({ name: t }, 16),
              r = runLimits(e),
              n = t.match(/(\d{4})\s*k/),
              s = n ? `${n[1]}K fixed` : '2700–6000K adjustable';
            return {
              /* A fixed-colour dotless COB (the 12 W/m 2700K) is not a CCT
                 strip: it must not get the warm↔cool preview or the CCT
                 controller. Only the adjustable one is CCTCOB. */
              fam: n ? 'COB' : 'CCTCOB',
              wpm: e,
              wpmTxt: `24V dotless COB · ${e}W/m`,
              single: r.single,
              dual: r.dual,
              channel: 'required',
              spec: `24V dotless COB · ${e}W/m · IP${i} · ${s} · ${r.single}m one feed / ${r.dual}m both ends`,
              ipTxt: i >= 65 ? `IP${i} — sealed: wet areas and outdoors` : 'IP20 indoors; the IP65 grade goes outside',
              where: n
                ? 'Cabinets, shelving, bulkheads — beautiful smooth white light'
                : 'Cabinets, shelving and bulkheads indoors (IP20), or outdoors in the sealed IP65 grade',
              teach: [
                'Dot-less: one clean line of light, no spotty dots',
                n ? `Fixed ${n[1]}K white` : 'Adjustable warm to cool white, 2700K to 6000K, from the remote',
                `Feed one end up to ${r.single}m; power BOTH ends for up to ${r.dual}m`,
                `${e}W per metre — needs an aluminium channel to stay cool`,
                'Connectors join short lengths with no waste, up to 2m',
              ],
            };
          })()
        : t.includes('high lumen')
          ? {
              fam: 'HILUMEN',
              connector: 3,
              wpm: wattsPerMetre({ name: t }, 12),
              wpmTxt: `High Lumen SMD · ${wattsPerMetre({ name: t }, 12)}W/m IP65 wet-area strip`,
              single: 5,
              dual: 10,
              channel: 'required',
              /* Only the 12 W/m is made in all four whites. The 20 W/m is
                 4000K and 5700K only — the finder's own colour question already
                 says so, and this line used to contradict it. */
              spec: `24V High Lumen SMD · CRI 90+ · ${wattsPerMetre({ name: t }, 12)}W/m IP65 · ${wattsPerMetre({ name: t }, 12) >= 18 ? 'fixed whites 4000 & 5700K' : 'fixed whites 2700/3000/4000/5700K'} · 5m one feed / 10m both ends`,
              ipTxt: 'IP65 — sealed against kitchen & bathroom steam',
              where: 'Wet areas indoors — kitchen benchtops, bathroom niches — plus bars, shelving & display',
              teach: [
                'The wet-area pick: IP65 — sealed against kitchen and bathroom steam and splashes',
                wattsPerMetre({ name: t }, 12) >= 18
                  ? 'Fixed single-colour whites — 4000K natural and 5700K crisp (no RGB in this range)'
                  : 'Fixed single-colour whites (2700/3000/4000/5700K) — no RGB in this range',
                'True-colour light (CRI 90+) — things look their real colour',
                'Feed one end up to 5m; power from 2 points for 5–10m',
              ],
            }
          : t.includes('rgb')
            ? {
                fam: 'RGB',
                wpm: 16,
                single: 5,
                dual: 10,
                channel: i >= 67 ? 'none' : 'required',
                spec: `24V RGB SMD \xb7 16W/m \xb7 IP${i} \xb7 5m one feed / 10m both ends`,
                ipTxt: i >= 67 ? 'IP67 — fully weatherproof for outdoors' : 'indoor colour strip',
                where:
                  i >= 67 ? 'Outdoor areas, exterior features, pool & waterfall surrounds' : 'Feature colour lighting',
                teach: [
                  'Full colour — millions of options from the remote or app',
                  i >= 67 ? 'IP67 weather-sealed — rain and splash proof' : 'For dry indoor areas',
                  'Feed one end up to 5m; power BOTH ends for up to 10m',
                ],
              }
            : {
                fam: 'STD',
                wpm: 10,
                single: 5,
                dual: 10,
                channel: 'required',
                spec: `24V strip \xb7 IP${i} \xb7 5m one feed / 10m both ends`,
                ipTxt: i >= 65 ? 'IP65 — splash resistant' : 'IP20 — dry indoor spots',
                where: 'General indoor strip lighting',
                teach: [
                  'Feed one end up to 5m; power BOTH ends for longer runs',
                  'Sits in an aluminium channel for a clean, cool, dot-free line',
                ],
              };
}
let m = {
    run: {
      wpm: 7.5,
      single: 20,
      dual: 40,
      ip: 'IP20 or IP67',
    },
    img: {
      reel: asset.asset('/images/longrun-cob/reel.webp'),
      macro: asset.asset('/images/longrun-cob/macro.webp'),
      lit: asset.asset('/images/longrun-cob/lit.webp'),
    },
    specs: [
      ['Model', 'SELS-COBX480-24-YCC'],
      ['LED density', '480 LEDs per metre — dot-free COB'],
      ['Power', '7.5W per metre'],
      ['Voltage', '24V DC'],
      /* Sold as two separate fixed-colour products — "7.5w/m 3000k" and
         "7.5w/m 4000k" — so this row states the choice, not a switchable
         tri-colour strip the kit cannot actually supply. The supplier
         datasheet for SELS-COBX480-24-YCC does describe a tri-colour
         version; whether Greenhse stocks that is a question for Keri. */
      /* Brochure: the IP67 is made in 3000K only; the IP20 comes in 3000K and
         4000K. So the choice of colour depends on which grade the job needs,
         which is why both are spelled out rather than offered as a free pick. */
      ['Colour', 'Fixed white — IP20 in 3000K or 4000K; IP67 in 3000K only'],
      ['Brightness', '675–712 lm per metre depending on the colour setting (±10%)'],
      ['Colour accuracy', 'CRI >90'],
      ['Beam angle', '180°'],
      ['Board', '8mm wide white PCB · 3oz double layer, constant current'],
      ['Max run', '20m fed from one end · 40m fed from both ends — no voltage drop'],
      ['Cutting', 'Every 50mm, between the soldering pads only'],
      ['Minimum bend', '50mm diameter — never tighter than 40mm'],
      ['Leads', '150mm of 20AWG red/black wire on both ends'],
      ['Sealing', 'IP20 bare, or IP67 silicone injected for outdoors and wet areas'],
      ['Working temperature', '-40°C to +45°C'],
      ['Life span', '50,000 hours'],
      ['Warranty', '3 years'],
      ['Supplied as', '20m roll (other lengths can be cut to order)'],
    ],
    /* Two grades, off the brochure: the bare IP20 for dry indoor work, and the
       silicone-injected IP67 for outside and wet areas. It used to be listed as
       a single IP68 "the only grade we sell it in", which was both the wrong
       rating and the wrong number of options. */
    ipGrades: [
      ['IP20', '10 × 4 mm', 'Bare strip for dry indoor runs — bulkheads, coves, joinery. Sits in a channel.'],
      [
        'IP67',
        '10 × 4 mm',
        'Silicone injected the whole way along. Rain, hose and splash proof — garden beds, pergolas, under decks and around pools.',
      ],
    ],
  },
  p = [
    {
      key: 'stair-controller',
      name: 'Smart Stair Light Controller',
      price: 120,
      sub: 'Includes the top & bottom sensors and the stair cable. Handles up to 20 steps.',
    },
    {
      key: 'stair-profile',
      name: '1m CCT DMX Stair Profile',
      price: 18,
      unit: 'each',
      sub: 'One profile per step — so a 14-step staircase needs 14.',
    },
  ],
  g = (e, t) => e.filter((e) => c(e) === t && 'number' == typeof e.price),
  f = (e, t, i) => {
    for (let i of t) {
      let t = e.find((e) => e.name.toLowerCase().includes(i.toLowerCase()));
      if (t) return t;
    }
    return i ?? e[0];
  };
function b(e) {
  return g(e, 'channel').filter((e) => '24vStrip-Channels-new' !== e.sku);
}
export const CABINET_CCT_STATES = a;
export const CABINET_RGB_STATES = l;
export const COLOUR_OPT_IMAGES = o;
export const LONGRUN_COB_MEDIA = m;
export const LONGRUN_SPEC_KEYS = ['Power', 'Colour', 'Voltage', 'Max run', 'Cutting', 'Warranty'];
export const PLACE_IMAGES = s;
export const STRIP_101 = [
  ['Brightness', 'is lumens — more watts per metre = brighter. Over 150 lumens per watt = very efficient.'],
  [
    'Colour temperature:',
    '2700K warm & cosy · 4000K natural · 6000K crisp. CCT strip lets you change it; RGB does millions of colours.',
  ],
  ['IP rating = water protection:', 'IP20 dry indoors · IP65 steamy bathrooms · IP67 outdoors.'],
  [
    '24V vs 240V:',
    '24V strips are slim and need a transformer (driver). 240V plugs into normal power, runs up to 50m, but is chunkier — recessed ceilings only.',
  ],
  [
    'Why the aluminium channel?',
    "It's a heat-sink (strip lasts longer), it looks professional, and the frosted cover hides the LED dots.",
  ],
  ['CRI 90+', 'means colours look true — great for kitchens and display shelves.'],
];
export const STRIP_Q = r;
export const buildPackage = function (e, i, r, n = {}) {
  let s,
    o,
    a = {
      ...i,
    },
    l = a.colour;
  l && ('w' === l[0] || 'blue' === l) && (a.colour = 'single');
  /* The low wattage long run COB is sold as two separate fixed colour products
     — 3000K and 4000K — at the same 7.5 W/m. The long run path skips the colour
     question entirely (isLongRun short-circuits it), so rather than silently
     picking one, the kit offers the choice on the strip line itself. Guarded on
     there being no colour answer, so every other path still shows exactly the
     strip the recommendation named and nothing else. */
  /* Read before the transformer block below, which redeclares `a`. */
  let wetSpot = 'outdoor' === a.place || 'bathroom' === a.place;
  let stripPool = !a.colour && I(e) ? (Array.isArray(r) ? r : []).filter(I) : [e];
  /* (kept for a plan saved before the colour question existed on this path) */
  (stripPool.length || (stripPool = [e]),
    (e = stripPool.find((t) => String(t.id) === String(n.strip)) || e));
  let c = {
      w2700: '2700K extra warm white',
      w3000: '3000K warm white',
      w4000: '4000K natural white',
      /* 5700K is the crisp white on the High Lumen SMD, 12 and 20 W/m alike.
         The 23 W/m High Colour display strip is the exception: its printed
         5700k is struck out on the marked-up brochure and 5000K written over
         it, and the quick reference chart prints 5000k too. 6000K survives on
         the 240V strip and as the top of the CCT range. */
      w5000: '5000K crisp white',
      w5700: '5700K crisp white',
      w6000: '6000K cool white',
      blue: 'Blue',
    },
    u = Math.max(1, parseInt(a.length) || 5),
    m = h(e),
    p = (s = e.name.toLowerCase()).includes('240v') ? '240V' : s.includes('12v') ? '12V' : '24V',
    w = 'rgb' === a.colour || /rgb/i.test(e.name),
    x = 'smart' === a.control && '240V' !== p,
    y = [],
    v = [],
    k = (e, t, i) => t.find((t) => String(t.id) === String(n[e])) || i || t[0];
  (y.push({
    key: 'strip',
    product: e,
    qty: u,
    sub: `${u} m run \xb7 ${c[l] ? c[l] + ' · ' : ''}${m.wpmTxt || m.wpm + 'W per metre'}`,
    candidates: stripPool,
  }),
    'HILUMEN' === m.fam &&
      a.brightness &&
      v.push(
        /* There IS a separate 20 W/m now, and the finder picks it when you ask
           for bright — so stop telling people it does not exist. */
        'bright' === a.brightness
          ? `You picked "make it a feature" — this is the ${m.wpm}W/m High Lumen SMD, the brightest strip in the sealed IP65 wet-area range. It comes in 4000K natural and 5700K crisp only.`
          : `Standard pick — this ${m.wpm}W/m IP65 strip is plenty bright for benchtops, niches and general wet-area use, and it comes in all four whites — 2700K, 3000K, 4000K and 5700K.`,
      ));
  'outdoor' === a.place &&
    v.push(
      'LONGRUN' === m.fam
        ? 'Going outside, so this is supplied as the IP67 silicone-injected version of the strip — sealed the whole way along. Rain and a hose are no problem.'
        : 'CCTCOB' === m.fam
          ? 'Going outside, so this is supplied in the sealed IP65 grade — rated for outdoor use. Keep it out of standing water and give it its channel.'
          : 'Going outside, so this is the IP65 sleeved version — sealed against rain and splashes.',
    );
  let j = 'one';
  if ('240V' === p) {
    let e = {
      id: 'driver-240v',
      name: '240V LED Driver',
      price: 60,
    };
    (y.push({
      key: 'driver',
      product: e,
      qty: 1,
      sub: `Included — powers the strip straight from mains, one per run up to ${m.single}m`,
      candidates: [e],
    }),
      v.push(
        `The $60 240V driver powers the strip straight from normal mains power. Long runs only: minimum 10m, up to ${m.single}m on one feed. Recessed ceilings only \xb7 remote-control only \xb7 straight runs, no bends \xb7 no channels.`,
      ),
      u < 10 &&
        v.push(
          `⚠ 240V comes in 10 metres or more — your ${u}m run is under that. Call us on (08) 9297 2969 and we'll sort the right option.`,
        ));
  } else {
    let e,
      t,
      i = (t = d(r, (e = '12V' === p ? 'TR12V-ALL' : 'TR24V-ALL'))).length ? t : r.filter((t) => t.sku === e),
      /* Size for the WHOLE run. The second transformer is optional now, so
         the one we quote has to carry the lot on its own; sizing it for half
         the run (which is what this did while it always quoted two) would
         undersize every dual-feed job. wattsHalf is only used to pick the
         best available driver when nothing on the shelf covers the whole run. */
      wattsWhole = Math.ceil(m.wpm * u * 1.2),
      wattsHalf = Math.ceil((m.wpm * u * 1.2) / 2),
      o = i
        .map((e) => {
          var t;
          let i;
          return {
            t: e,
            watts: ((t = e.name), ((i = /(\d+)\s*W\b/i.exec(t || '')) ? parseInt(i[1], 10) : null) ?? 1 / 0),
          };
        })
        .sort((e, t) => e.watts - t.watts),
      /* Outside, or in a bathroom, the driver has to be a sealed one: pick
         from the IP65/IP67 transformers when there is one big enough. */
      sealed = wetSpot ? o.filter((e) => ipRating(e.t) >= 65) : [],
      pool = sealed.length ? sealed : o,
      /* Can one driver carry the whole run? That is what decides whether the
         second one is optional or required. */
      whole = pool.find((e) => e.watts >= wattsWhole) || null,
      pick = whole || pool.find((e) => e.watts >= wattsHalf) || pool[pool.length - 1],
      a = k('transformer', i, pick?.t);
    (u <= m.single
      ? (y.push({
          key: 'transformer',
          product: a,
          qty: 1,
          sub: 'powers the run from one end',
          candidates: i,
        }),
        v.push(`Your ${u}m run feeds from ONE end — this strip is happy up to ${m.single}m on a single feed.`))
      : u <= m.dual
        ? ((j = 'both'),
          y.push({
            key: 'transformer',
            product: a,
            qty: whole ? 1 : 2,
            sub: whole
              ? 'run a feed to EACH end of the strip — second transformer optional'
              : 'one at EACH end — no single driver carries this run',
            candidates: i,
          }),
          v.push(
            `Your ${u}m run is past the ${m.single}m a single feed carries, so the strip has to be powered from BOTH ends. That is what stops the far end fading (voltage drop). This strip handles up to ${m.dual}m powered both ends.`,
          ),
          v.push(
            whole
              ? 'One transformer does that on its own: run a cable from it to each end of the strip rather than joining the two ends together. A second transformer is OPTIONAL — add one if you would rather each end had its own driver, or if you are close to the wattage limit and want the headroom.'
              : `No single driver carries a ${u}m run of this strip, so this one is quoted twice — one at each end. Here the second transformer is needed, not optional.`,
          ))
        : ((j = 'both'),
          y.push({
            key: 'transformer',
            product: a,
            qty: 2,
            sub: 'one at EACH end, per segment',
            candidates: i,
          }),
          v.push(
            `Over ${m.dual}m is beyond one continuous run for this strip — break it into segments of up to ${m.dual}m, each powered from both ends. Call us on (08) 9297 2969 and we'll map it out.`,
          )),
      v.push(
        'Biggest single driver is 240W. Past that, or where you want the headroom, two smaller drivers one at each end beat one big one.',
      ));
  }
  let C = (o = d(r, 'remote-control-grp')).length ? o : r.filter((e) => 'remote-control-grp' === e.sku);
  if ('240V' === p) {
    'smart' === a.control &&
      v.push(
        "Heads up: 240V strip is REMOTE-control only — it can't be made smart or run from the app. We've included the remote instead.",
      );
    let e = f(C, w ? ['4-zone', 'rgb'] : ['single colour', 'single', 'hand']),
      t = k('remote', C, e);
    (y.push({
      key: 'remote',
      product: t,
      qty: 1,
      sub: `the ONLY way to control 240V strip (${w ? 'colours & dimming' : 'dimming'}) — pick the remote you like`,
      candidates: C,
    }),
      v.push('No controller box needed (or possible) with 240V strip — the remote does everything.'));
  } else if ('NEON' === m.fam) {
    /* Neon flex runs on Bluetooth from the phone — the brochure: "Bluetooth
       Control (No WiFi required)". No controller box, no remote. */
    v.push(
      'Neon flex is controlled over Bluetooth straight from the phone — no WiFi, no controller box and no remote needed. The data cable joins several lengths together so one phone runs the lot.',
    );
  } else {
    let e = g(r, 'controller').filter((e) => /rgb/i.test(e.name) === w && !/garage|door/i.test(e.name));
    /* A plain RGB COB wants the plain RGB controller. The Magic / SPI one
       drives addressable strip and does nothing useful on a 4-wire RGB. */
    if (w && 'SPI' !== m.fam && !/neon/i.test(s)) {
      let plain = e.filter((e) => !/magic|spi|dmx|addressable/i.test(e.name));
      plain.length && (e = plain);
    }
    if (e.length) {
      /* The controller has to match the strip: an adjustable-white COB needs
         the dual-white controller or the remote's warm↔cool buttons do
         nothing; a fixed white gets the single-colour one. Smart or not
         follows the control answer. */
      let isSmart = (e) => /smart|wifi/i.test(e.name) && !/non-smart/i.test(e.name),
        wantCct = 'cct' === a.colour || 'CCTCOB' === m.fam,
        pool = e.filter((e) => isSmart(e) === x),
        t =
          (pool.length ? pool : e).find((e) => (wantCct ? /dual white|cct/i : /single colour/i).test(e.name) && (wantCct || !/dual/i.test(e.name))) ||
          (pool.length ? pool : e).find((e) => (wantCct ? /dual white|cct/i : /single colour/i).test(e.name)) ||
          pool[0] ||
          e[0],
        i = k('controller', e, t),
        r = x
          ? 'run everything from the phone app'
          : w
            ? 'changes the colours'
            : 'cct' === a.colour
              ? 'adjusts warm ↔ cool'
              : 'dims the strip 1–100%';
      y.push({
        key: 'controller',
        product: i,
        qty: 1,
        sub: `${(w ? '3 in 1' : '2 in 1') + (x ? ' · 2.4GHz SMART' : ' standard controller')} — ${r}`,
        candidates: e,
      });
    }
    if (!x) {
      let e = f(C, w ? ['4-zone', 'rgb'] : 'cct' === a.colour || 'CCTCOB' === m.fam ? ['cct adjustable', 'cct', 'hand'] : ['single colour', 'single', 'hand']),
        t = k('remote', C, e);
      y.push({
        key: 'remote',
        product: t,
        qty: 1,
        sub: w ? 'colour & dimming remote' : 'dims 1–100%',
        candidates: C,
      });
    }
    x
      ? v.push(
          "Smart kit: the WiFi + 2.4GHz controller does everything from the phone app — so you don't need a remote. Prefer buttons? Choose Simple and you'll get the standard controller + remote.",
        )
      : v.push(
          'Every 24V kit finishes with its controller — the little brain between the driver and the strip. White strips use the 2-in-1; RGB strips use the 3-in-1.',
        );
  }
  let _ = 0,
    L = b(r);
  if ('none' !== m.channel && L.length) {
    let e = k('channel', L, L[0]);
    _ = Math.max(1, Math.ceil(u / 3));
    let t = 'optional' === m.channel;
    y.push({
      key: 'channel',
      product: e,
      qty: _,
      sub: `${_} \xd7 3m fixed to cover your ${u}m run${t ? ' — optional, but gives a neater finish & longer life' : ''}`,
      candidates: L,
    });
  }
  ('240V' !== p &&
    (v.push(
      'Cut the strip ONLY at the marked cut-points (little scissor lines) — and only a limited number of times per run. Plan your cuts before you start.',
    ),
    v.push(
      'Joins and ends get soldered cabling on BOTH ends of each length; use strip-to-lead connectors at joins and corners.',
    )),
    _ > 0 &&
      v.push(
        `Channels come in fixed 3-metre lengths and can't be cut shorter — we've allowed ${_} \xd7 3m to cover your ${u}m run. The channel is the aluminium track: it cools the strip, makes it last longer, and the frosted cover hides the dots.`,
      ));
  let S = y.reduce((e, t) => e + t.product.price * t.qty, 0),
    B = [
      ['Exact spec', m.spec],
      ["Where it's going", m.where],
      ['Water rating', m.ipTxt],
      [
        "How it's powered",
        '240V' === p
          ? 'Includes its $60 240V driver — powers the strip straight from mains'
          : 'both' === j
            ? 'Fed from BOTH ends — one driver can do it, a second is optional'
            : 'One driver feeding one end',
      ],
      [
        'What holds it',
        'none' === m.channel
          ? 'No channels — 240V strip is thicker and sits straight in the ceiling recess'
          : 'Aluminium channel with frosted cover — keeps it cool, hides the dots',
      ],
      ['Max run', `Feed one end to ${m.single}m; ${m.dual}m powered both ends`],
    ],
    T =
      '240V' === p
        ? ['roomy' === i.space ? 'Roomy shelf' : 'Compact recess', 'Straight runs, no bends', `Min ${m.min}m`]
        : [
            'both' === j ? 'Powered both ends' : 'Single-feed run',
            'required' === m.channel ? 'Aluminium channel included' : 'none' === m.channel ? 'No channel needed' : null,
            /ip6[5-9]/i.test(m.ipTxt) ? 'Wet-area safe (IP65+)' : null,
          ].filter(Boolean);
  return {
    items: y,
    notes: v,
    len: u,
    feed: j,
    facts: m,
    spec: B,
    checklist: T,
    subtotal: S,
    totalIncGst: S * (1 + api.GST_RATE),
  };
};
export const buildStairKit = function () {
  let e = p.map((e) => ({
      key: e.key,
      product: {
        name: e.name,
        price: e.price,
      },
      qty: 1,
      unit: e.unit,
      sub: e.sub,
    })),
    i = e.reduce((e, t) => e + t.product.price * t.qty, 0);
  return {
    items: e,
    subtotal: i,
    totalIncGst: i * (1 + api.GST_RATE),
    video: 'Q3iYeqDkIeE',
  };
};
export const channelPool = b;
export const classify = c;
export const isLongRun = n;
/* The long run answer has to land on the LOW WATTAGE dotless COB and nothing
   else. This used to be matched by name ("Long Run COB") and by the old
   ST24V-15w-CCT-COB-ALL sku, and Magento has since dropped both: the catalogue
   now lists it as "24V Dotless 7.5w/m 3000k Cob Strip Light / Metre" and
   "...4000k...". With the old matches dead, the last fallback here was any
   dotless COB, and the FIRST one in the feed is the 12 W/m — so the panel
   promised 7.5 W/m and 20/40 m while the kit underneath was built from a 12 W/m
   strip that only does 5/10 m. Lazar hit exactly that: "LONG RUN WHEN YOU ADD
   WHOLE KIT IT COMES UP with 24v 12w/m".

   So match on the thing that actually defines this product — watts per metre —
   and never fall through to a strip that cannot do the run. If the catalogue
   has no low wattage COB at all we return no strip, and the screen falls back
   to "call us" rather than quoting a kit that will go dim at the far end. */
function I(e) {
  let t = String((e && e.name) || '');
  return (
    !/rgb/i.test(t) &&
    /cob/i.test(t) &&
    wattsPerMetre(e, 99) <= 8 &&
    !/240\s*v/i.test(t) &&
    'number' == typeof e.price
  );
}
export const longRunInfo = function (e, t) {
  let i = (Array.isArray(e) ? e : []).filter(I),
    /* The colour question is asked on every long run path now, so this lands
       on the exact SKU: 4000K → the 4000K roll, otherwise 3000K. Outdoors is
       3000K only (the IP67 sealed version is not made in 4000K). The by-role
       lookup goes first; the wattage filter is the fallback for a rename. */
    r =
      ('w4000' === t.colour && 'outdoor' !== t.place ? role(e, 'lr4000') : role(e, 'lr3000')) ||
      i.find((e) => ('w4000' === t.colour ? /4000/ : /3000/).test(e.name)) ||
      i[0] ||
      null,
    n = parseFloat(t.length) || 0;
  return {
    strip: r,
    stripOptions: i,
    len: n,
    tooShort: n > 0 && n < 5,
    fromCove: 'cove' === t.place,
    fromOutdoor: 'outdoor' === t.place,
  };
};
export const photoForQuestion = function (e, t, i = []) {
  if (!e) return null;
  if ('space' === e.key && t.place) return s[t.place] || null;
  if ('colour' !== e.key && t.colour) {
    let r = RESOLVE(t),
      p = r ? role(i, r[0]) : n(t) ? longRunInfo(i, t).strip : null;
    return p?.image ? { src: p.image, alt: p.name, caption: p.name } : null;
  }
  return null;
};
/* ---------------------------------------------------------------------------
   THE PRODUCT TABLE
   One entry per strip Greenhse sells, keyed by the job it does. The SKU is
   the primary match; the name pattern is the fallback for the day Magento
   renames a SKU again (which is what broke the long run answer in R53). A
   role that finds nothing in the feed resolves to null, and the screen says
   "call us" rather than quoting the wrong strip.
   --------------------------------------------------------------------------- */
let ROLES = {
  v240white: { sku: 'ST240V-PRO', rx: /240\s*v.*pro/i },
  v240rgb: { sku: 'ST240V-RGB', rx: /240\s*v.*rgb/i },
  lr3000: { sku: 'ST24V-7.5 3000k COB', rx: /7\.5\s*w.*3000.*cob/i },
  lr4000: { sku: 'ST24V-7.5 4000k COB-1', rx: /7\.5\s*w.*4000.*cob/i },
  cob2700: { sku: 'ST24V-12- 2700k COB', rx: /dotless.*12\s*w.*2700/i },
  cctcob: { sku: 'ST24V-16 CCT-1', rx: /16\s*w.*cct.*cob/i },
  rgbcob20: { sku: 'ST24V-16w-RGB-COB', rx: /rgb.*cob.*16\s*w/i },
  rgbcob65: { sku: 'ST24V-15w-RGB-COB-1', rx: /rgb.*cob.*15\s*w/i },
  smd12: { sku: 'st24v-12w-SMD', rx: /high lumen smd.*12\s*w/i },
  smd20: { sku: 'st24v-20w-SMD-1', rx: /high lumen smd.*20\s*w/i },
  display23: { sku: 'st24v-23w-SMD-1-1', rx: /display.*23\s*w/i },
  meat: { sku: 'MEAT-IP68-14W/m', rx: /fresh meat/i },
  /* The 1212 fixed warm white side bend, live in Magento as of 21 Sep.
     The name carries "SPI" (copied from the RGB flex it sits next to), so the
     pattern cannot exclude SPI the way the first draft did or it would never
     match its own product. RGB is what actually separates the two. */
  neon3000: { sku: 'NEON-3000-sideflex-IP67-1', rx: /neon(?!.*\brgb\b).*3000\s*k?/i },
  neoncct: { sku: 'NEON-CCT-6x12', rx: /neon.*cct/i },
  neonrgb: { sku: 'NEON-RGB-SPI-IP66', rx: /neon.*rgb/i },
  spi: { sku: 'RGBW-SPI-4000K-IP54', rx: /rgbw.*spi/i },
};
function role(products, key) {
  let d = ROLES[key];
  if (!d || !Array.isArray(products)) return null;
  let bySku = products.find((p) => p.sku === d.sku && 'number' == typeof p.price);
  if (bySku) return bySku;
  return products.find((p) => d.rx.test(p.name || '') && 'number' == typeof p.price) || null;
}
/* Which role each combination of answers leads to. Read it as a table:
   [primary role, alternative roles, note]. A null primary means the screen
   asks them to call. Everything here is straight off the brochure's
   application and colour rows, with Lazar's handwritten corrections. */
function RESOLVE(t) {
  let c = t.colour;
  switch (t.place) {
    case 'cove':
      if ('roomy' !== t.space) return null; /* tight recess = long run path */
      return 'rgb' === c
        ? ['v240rgb', [], 'Recessed ceilings = long-run 240V strip, kept simple: $60 driver included, one power feed, RGB up to 35m from a single feed.']
        : ['v240white', [], 'Recessed ceilings = long-run 240V strip, kept simple: $60 driver included, one power feed, fixed-colour white up to 50m from a single feed.'];
    case 'kitchen':
      return [
        'smd12',
        'w3000' === c ? ['lr3000'] : 'w4000' === c ? ['lr4000'] : 'w2700' === c ? ['cob2700'] : [],
        'Under kitchen cabinets the brochure pick is the 12W/m High Lumen SMD — IP65 sealed against benchtop steam and splashes, 2000+ lumens a metre. Want a dot-free line instead of a row of LEDs? The COB alternative below does that.',
      ];
    case 'bathroom':
      return 'w3000' === c
        ? ['smd12', ['smd20'], 'Warm white is only made in the 12W/m High Lumen SMD — still IP65 and sealed, just softer than the 20W/m.']
        : ['smd20', ['smd12'], 'Bathroom niches and short lengths get the 20W/m High Lumen SMD — IP65 sealed, the brightest strip in the wet-area range.'];
    case 'joinery':
      return 'cct' === c
        ? ['cctcob', [], 'Adjustable white in joinery is the 16W/m CCT COB — dot-free, 2700K to 6000K from the remote. Needs an aluminium channel.']
        : 'rgb' === c
          ? ['rgbcob20', ['spi'], 'Full colour in joinery is the 16W/m RGB COB — dot-free, IP20. Want chasing and animated effects? The addressable RGBW SPI is the alternative.']
          : 'w2700' === c
            ? ['cob2700', ['lr3000'], '2700K extra-warm is the 12W/m dot-free COB.']
            : 'w5700' === c
              ? ['smd12', [], '5700K crisp white is made in the High Lumen SMD only — in an aluminium channel with a diffuser it reads dot-free.']
              : 'w4000' === c
                ? ['lr4000', ['smd12'], '4000K in joinery is the 7.5W/m dot-free COB — one smooth line, low power, 20m from one feed.']
                : ['lr3000', ['smd12'], '3000K in joinery is the 7.5W/m dot-free COB — one smooth line, low power, 20m from one feed.'];
    case 'outdoor':
      return 'rgb' === c
        ? ['rgbcob65', ['neonrgb'], 'Outdoor full colour is the 15W/m RGB COB in its IP65 heat-shrink sleeve. Neon flex RGB (IP67) is the alternative where it needs to bend.']
        : 'cct' === c
          ? ['cctcob', ['lr3000'], 'Adjustable white outdoors is the 16W/m CCT COB in its sealed IP65 grade — 2700K to 6000K from the remote. Fixed 3000K instead? The IP67 long run COB is the alternative.']
          : null; /* fixed white outdoors = long run path (IP67 sealed) */
    case 'neon':
      return 'rgb' === c
        ? ['neonrgb', [], '12x12mm Neon Flex RGB, IP67 — side-bends to follow a letter or a curve, Bluetooth control.']
        : 'w3000' === c
          ? [
              'neon3000',
              ['neoncct'],
              '12x12mm Neon Side Bend Flex in fixed 3000K warm white, IP67 — premium anti-yellowing silicone, five year warranty, indoors or out. Side-bends to follow a letter or a curve.',
              /* Fallback while the 1212 is still being listed: the CCT flex
                 covers 2700–6000K, so it does 3000K on the remote. */
              {
                key: 'neoncct',
                note: 'The fixed 3000K 1212 flex is still being added to the online catalogue. In the meantime the 6x12mm CCT flex below does the same job — set it to 3000K on the remote — or call us on (08) 9297 2969 and we will quote the 1212 direct.',
              },
            ]
          : ['neoncct', [], '6x12mm Neon Side Bend Flex CCT, IP67 — adjustable 2700K to 6000K, Bluetooth control.'];
    case 'display':
      return 'meat' === t.kind
        ? ['meat', [], 'Fresh meat, deli and seafood cabinets get the Fresh Meat strip — a red and white mix that keeps produce looking fresh, IP68 so it can be hosed down.']
        : ['display23', ['smd20'], 'Retail displays get the 23W/m High Colour SMD — 240 LEDs a metre, CRI 90+, up to 3800 lumens a metre, in 4000K or 5000K.'];
    default:
      return null;
  }
}
/* How far each family goes before it needs a second feed, and past which
   length it is a phone call. 240V: 10 to 50m white, 10 to 35m RGB. Every 24V
   strip except the long run COB: 5m one feed, 10m both ends, past 10m call. */
function lengthGate(t, primary) {
  let d = parseFloat(t.length) || 0;
  if (!d) return null;
  if ('cove' === t.place && 'roomy' === t.space) {
    let max = 'rgb' === t.colour ? 35 : 50;
    if (d < 10)
      return "📞 Recessed-ceiling runs under 10 metres need a custom option — give us a quick call on (08) 9297 2969 and we'll spec it with you on the spot.";
    if (d > max)
      return `📞 A ${d}m recessed run is past what one 240V strip carries (${max}m for ${'rgb' === t.colour ? 'RGB' : 'fixed-colour white'}), so it has to be split into sections and fed separately. Give us a quick call on (08) 9297 2969 and we'll map it out.`;
    return null;
  }
  let f = primary ? h(primary) : null;
  if (f && d > (f.dual || 10))
    return "📞 Runs over 10 metres need power planned at several points — give us a quick call on (08) 9297 2969 and we'll design it with you.";
  return null;
}
export const pickRecommendation = function (e, t) {
  let r = RESOLVE(t);
  if (!r)
    return {
      primary: null,
      alts: [],
      note: "📞 Give us a quick call on (08) 9297 2969 and we'll match the right strip to this one.",
      callOnly: !0,
    };
  let [pk, ak, note, fb] = r,
    primary = role(e, pk),
    alts = ak.map((k) => role(e, k)).filter(Boolean);
  /* A RESOLVE row may name a fallback strip for a product that is real but
     not listed online yet. Using it beats sending someone to a dead end,
     provided the screen says plainly what happened — which the fallback
     note does. */
  if (!primary && fb) {
    let sub = role(e, fb.key);
    if (sub) {
      primary = sub;
      note = fb.note;
      alts = alts.filter((x) => x !== sub);
    }
  }
  if (!primary)
    return {
      primary: null,
      alts,
      note: "📞 That strip isn't showing in the catalogue right now — call us on (08) 9297 2969 and we'll sort it on the spot.",
      callOnly: !0,
    };
  let gate = lengthGate(t, primary);
  return gate ? { primary: null, alts: [primary].concat(alts).slice(0, 2), note: gate, callOnly: !0 } : { primary, alts, note, callOnly: !1 };
};
export const stripFacts = h;
export const summarise = function (e) {
  let t =
      {
        cove: 'in your ceiling recess',
        kitchen: 'under your kitchen cabinets',
        bathroom: 'in your bathroom / wet area',
        joinery: 'inside your joinery',
        outdoor: 'outdoors',
        stairs: 'on your stairs / hallway',
        longrun: 'along your long run',
        neon: 'for your signage or feature shape',
        display: 'display' === e.place && 'meat' === e.kind ? 'in your food cabinet' : 'in your display cabinet',
      }[e.place] || 'in your spot',
    i =
      {
        single: 'fixed white',
        cct: 'adjustable white',
        rgb: 'full-colour RGB',
        w2700: '2700K extra warm white',
        w3000: '3000K warm white',
        w4000: '4000K natural white',
        w5000: '5000K crisp white',
        w5700: '5700K crisp white',
        w6000: '6000K cool white',
        blue: 'blue',
      }[e.colour] || '',
    r =
      {
        smart: 'run from the phone app',
        simple: 'with a simple remote',
      }[e.control] || '';
  return `For ${i} light ${t} ${r}`.replace(/\s+/g, ' ').trim() + '.';
};
export const visibleQuestions = function (e) {
  return r.filter((t) => !t.when || t.when(e));
};
