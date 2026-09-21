'use client';
import JSXStyle from 'styled-jsx/style';
import * as React from 'react';
import ProductCard from '../../components/product/ProductCard';
import * as ProductCard2 from '../../components/product/ProductCard';
import CatSections from '../../components/catalog/CatSections';
import { useDispatch, useSelector } from 'react-redux';
import ProductVisual from '../../components/product/ProductVisual';
import * as Icons from '../../components/ui/Icons';
import * as api from '../../lib/api';
import * as cartSlice from '../../store/cartSlice';
import * as uiSlice from '../../store/uiSlice';
import * as asset from '../../lib/asset';
import * as finderProductsSlice from '../../store/finderProductsSlice';
import * as stripFinder from '../../lib/stripFinder';
import VideosSection from '../../components/catalog/VideosSection';
import * as api2 from '../../lib/api';
function MC() {
  return (
    <details className="jsx-58b468c369aa4c2d learn">
      <summary className="jsx-58b468c369aa4c2d">💡 Strip lighting 101 — 30-second crash course</summary>
      <ul className="jsx-58b468c369aa4c2d">
        {stripFinder.STRIP_101.map(([e, s]) => (
          <li key={e} className="jsx-58b468c369aa4c2d">
            <b className="jsx-58b468c369aa4c2d">{e}</b> {s}
          </li>
        ))}
      </ul>
      <JSXStyle id="58b468c369aa4c2d">
        {
          '.learn.jsx-58b468c369aa4c2d{margin-top:16px}.learn.jsx-58b468c369aa4c2d summary.jsx-58b468c369aa4c2d{color:var(--ink);cursor:pointer;border-radius:var(--radius-sm);background:#ece9db;border:1px solid #ddd8c6;padding:12px 14px;font-size:13px;font-weight:600;list-style:none}.learn.jsx-58b468c369aa4c2d summary.jsx-58b468c369aa4c2d::-webkit-details-marker{display:none}.learn[open].jsx-58b468c369aa4c2d summary.jsx-58b468c369aa4c2d{border-bottom-right-radius:0;border-bottom-left-radius:0}.learn.jsx-58b468c369aa4c2d ul.jsx-58b468c369aa4c2d{border-radius:0 0 var(--radius-sm) var(--radius-sm);background:#f6f4ea;border:1px solid #ddd8c6;border-top:0;flex-direction:column;gap:9px;margin:0;padding:14px;list-style:none;display:flex}.learn.jsx-58b468c369aa4c2d li.jsx-58b468c369aa4c2d{color:var(--ink-soft);font-size:12.5px;line-height:1.5}'
        }
      </JSXStyle>
    </details>
  );
}
let j = /\(08\)\s?9297\s?2969/;
function GC({ label: e }) {
  return (
    <svg viewBox="0 0 300 110" className="q-photo__placeholder-svg" aria-hidden="true">
      <rect x="80" y="30" width="140" height="22" fill="none" stroke="var(--green)" strokeWidth="2" />
      <rect x="88" y="38" width="124" height="6" rx="2" fill="var(--green)" opacity="0.85" />
      <text x="150" y="80" fontSize="11" fill="#5d6151" textAnchor="middle">
        {e || 'Photo coming soon'}
      </text>
    </svg>
  );
}
function UC({ image: e }) {
  let [t, r] = React.useState(!1);
  return !e || t ? null : (
    <>
      <img
        src={e.src}
        alt={e.alt || ''}
        loading="lazy"
        onError={() => r(!0)}
        className="jsx-5541374e8d10d895 mood-banner"
      />
      <JSXStyle id="5541374e8d10d895">
        {
          '.mood-banner.jsx-5541374e8d10d895{object-fit:cover;border-radius:var(--radius-sm);width:100%;height:150px;margin-bottom:14px;display:block}'
        }
      </JSXStyle>
    </>
  );
}
function YC({ image: e, size: t = 'full' }) {
  let [r, n] = React.useState(!1);
  if (!e) return null;
  let c = 'full' === t && !!e.caption;
  return (
    <figure className={`jsx-1045332501a332b4 q-photo q-photo--${t}`}>
      {r ? (
        <GC label={c ? void 0 : e.caption} />
      ) : (
        <img src={e.src} alt={e.alt || ''} loading="lazy" onError={() => n(!0)} className="jsx-1045332501a332b4" />
      )}
      {'full' === t && e.caption && <figcaption className="jsx-1045332501a332b4">{e.caption}</figcaption>}
      <JSXStyle id="1045332501a332b4">
        {
          '.q-photo.jsx-1045332501a332b4{border:1px solid var(--line);border-radius:var(--radius-sm);background:#fff;margin:0 0 14px;overflow:hidden}.q-photo.jsx-1045332501a332b4 img,.q-photo.jsx-1045332501a332b4 .q-photo__placeholder-svg{background:#f7f6f1;width:100%;height:auto;display:block}.q-photo--full.jsx-1045332501a332b4 img{object-fit:cover;max-height:220px}.q-photo--full.jsx-1045332501a332b4 .q-photo__placeholder-svg{max-height:150px}.q-photo.jsx-1045332501a332b4 figcaption.jsx-1045332501a332b4{color:var(--ink-muted);border-top:1px solid var(--line);padding:8px 12px;font-size:12.5px}.q-photo--thumb.jsx-1045332501a332b4{border-radius:4px;flex:none;width:88px;height:64px;margin:0}.q-photo--thumb.jsx-1045332501a332b4 img,.q-photo--thumb.jsx-1045332501a332b4 .q-photo__placeholder-svg{object-fit:cover;width:88px;height:64px}'
        }
      </JSXStyle>
    </figure>
  );
}
function _() {
  return (
    <figure className="jsx-87de788c2710a46a shelfdiag">
      <svg viewBox="0 0 320 70" aria-hidden="true" className="jsx-87de788c2710a46a shelfdiag__svg">
        <rect x="10" y="12" width="300" height="8" fill="var(--ink)" className="jsx-87de788c2710a46a" />
        <path
          d="M10 20 v44 h104 v-20 h20"
          stroke="#3e5c46"
          strokeWidth="2"
          fill="none"
          className="jsx-87de788c2710a46a"
        />
        <rect
          x="26"
          y="42"
          width="72"
          height="7"
          rx="2"
          fill="#46b06e"
          opacity="0.9"
          className="jsx-87de788c2710a46a"
        />
        <ellipse cx="62" cy="30" rx="78" ry="15" fill="#46b06e" opacity="0.2" className="jsx-87de788c2710a46a" />
        <path
          d="M104 66 v-14"
          stroke="#8a8b7e"
          strokeWidth="1"
          strokeDasharray="3 3"
          className="jsx-87de788c2710a46a"
        />
      </svg>
      <p className="jsx-87de788c2710a46a shelfdiag__labels">
        <span className="jsx-87de788c2710a46a">Strip lies FLAT on a roomy shelf</span>
        <span className="jsx-87de788c2710a46a">Open gap — light washes the ceiling</span>
      </p>
      <p className="jsx-87de788c2710a46a shelfdiag__check">✓ Roomy shelf · ✓ Straight runs, no bends · ✓ Min 10m</p>
      <p className="jsx-87de788c2710a46a shelfdiag__note">
        $60 240V driver included — needs a flat shelf of 50mm (5cm) or more.
      </p>
      <p className="jsx-87de788c2710a46a shelfdiag__note">
        Recess tight or run under 10m? Call (08) 9297 2969 — we'll spec 24V instead.
      </p>
      <JSXStyle id="87de788c2710a46a">
        {
          '.shelfdiag.jsx-87de788c2710a46a{border:1px solid var(--line);border-radius:var(--radius-sm);background:#fff;margin:0 0 14px;padding:10px 12px 12px}.shelfdiag.jsx-87de788c2710a46a .shelfdiag__svg{background:#f7f6f1;width:100%;height:auto;display:block}.shelfdiag__labels.jsx-87de788c2710a46a{color:#5d6151;flex-wrap:wrap;justify-content:space-between;gap:4px 12px;margin:8px 0 0;font-size:11px;line-height:1.4;display:flex}.shelfdiag__check.jsx-87de788c2710a46a{color:#3c4034;margin:8px 0 0;font-size:12px;font-weight:600}.shelfdiag__note.jsx-87de788c2710a46a{color:#5d6151;margin:6px 0 0;font-size:11.5px;line-height:1.4}'
        }
      </JSXStyle>
    </figure>
  );
}
function KC({ both: e }) {
  return (
    <div className="jsx-87e22da7161bfd88 feeddiag">
      {e ? (
        <svg
          viewBox="0 0 300 70"
          role="img"
          aria-label="Power fed to both ends — even light, no fading"
          className="jsx-87e22da7161bfd88"
        >
          <rect x="14" y="22" width="26" height="20" fill="var(--ink)" className="jsx-87e22da7161bfd88" />
          <rect x="260" y="22" width="26" height="20" fill="var(--ink)" className="jsx-87e22da7161bfd88" />
          <text x="27" y="56" fontSize="10" fill="#5d6151" textAnchor="middle" className="jsx-87e22da7161bfd88">
            driver
          </text>
          <text x="273" y="56" fontSize="10" fill="#5d6151" textAnchor="middle" className="jsx-87e22da7161bfd88">
            feed
          </text>
          <rect x="48" y="28" width="204" height="7" rx="2" fill="#46B06E" className="jsx-87e22da7161bfd88" />
          <path d="M40 32 h8 M252 32 h8" stroke="#3E5C46" strokeWidth="2" className="jsx-87e22da7161bfd88" />
          <text x="150" y="18" fontSize="11" fill="#5d6151" textAnchor="middle" className="jsx-87e22da7161bfd88">
            Power fed to BOTH ends — even light, no fading
          </text>
        </svg>
      ) : (
        <svg
          viewBox="0 0 300 70"
          role="img"
          aria-label="Power feeds one end — fine for short runs"
          className="jsx-87e22da7161bfd88"
        >
          <rect x="20" y="22" width="26" height="20" fill="var(--ink)" className="jsx-87e22da7161bfd88" />
          <text x="33" y="56" fontSize="10" fill="#5d6151" textAnchor="middle" className="jsx-87e22da7161bfd88">
            driver
          </text>
          <rect x="54" y="28" width="220" height="7" rx="2" fill="#46B06E" className="jsx-87e22da7161bfd88" />
          <path d="M46 32 h8" stroke="#3E5C46" strokeWidth="2" className="jsx-87e22da7161bfd88" />
          <text x="160" y="18" fontSize="11" fill="#5d6151" textAnchor="middle" className="jsx-87e22da7161bfd88">
            Power feeds ONE end — fine for short runs
          </text>
        </svg>
      )}
      <JSXStyle id="87e22da7161bfd88">
        {
          '.feeddiag.jsx-87e22da7161bfd88{border:1px solid var(--line);border-radius:var(--radius-sm);background:#fff;margin:0 0 14px;padding:8px}.feeddiag.jsx-87e22da7161bfd88 svg{width:100%;height:auto;display:block}'
        }
      </JSXStyle>
    </div>
  );
}
function VC({ len: e, carries: kc = 2 }) {
  return (
    <div className="jsx-8adf51769f9020ba cn-panel">
      <h4 className="jsx-8adf51769f9020ba cn-h">
        {'Your '}
        {e}m comes as one continuous strip
      </h4>
      <div className="jsx-8adf51769f9020ba cn-dia">
        <svg
          viewBox="0 0 340 118"
          role="img"
          aria-label={`The strip comes in one continuous length; if you cut it, a clip connector rejoins the pieces and carries up to ${kc} metres`}
          className="jsx-8adf51769f9020ba"
        >
          <text x="14" y="11" fontSize="8" fill="#8a8d7f" className="jsx-8adf51769f9020ba">
            WHAT YOU GET
          </text>
          <rect
            x="14"
            y="20"
            width={312}
            height="13"
            rx="2"
            fill="#46B06E"
            stroke="var(--ink)"
            strokeWidth="1"
            className="jsx-8adf51769f9020ba"
          />
          <text x={170} y="48" fontSize="8.5" fill="#5d6151" textAnchor="middle" className="jsx-8adf51769f9020ba">
            {e}m in one continuous length — no joins needed
          </text>
          <text x="14" y="72" fontSize="8" fill="#8a8d7f" className="jsx-8adf51769f9020ba">
            ONLY IF YOU CUT IT
          </text>
          <rect
            x="14"
            y="81"
            width={150}
            height="13"
            rx="2"
            fill="#46B06E"
            stroke="var(--ink)"
            strokeWidth="1"
            className="jsx-8adf51769f9020ba"
          />
          <rect
            x={171}
            y="77"
            width="12"
            height="21"
            rx="2"
            fill="#fff"
            stroke="var(--ink)"
            strokeWidth="1.4"
            className="jsx-8adf51769f9020ba"
          />
          <path
            d={`M${174.5} 82 v11 M${179.5} 82 v11`}
            stroke="var(--ink)"
            strokeWidth="1"
            className="jsx-8adf51769f9020ba"
          />
          <rect
            x={190}
            y="81"
            width={149}
            height="13"
            rx="2"
            fill="#46B06E"
            stroke="var(--ink)"
            strokeWidth="1"
            className="jsx-8adf51769f9020ba"
          />
          <path d="M167 74 v-7" stroke="#b0553f" strokeWidth="1.2" className="jsx-8adf51769f9020ba" />
          <text x="14" y="110" fontSize="8.5" fill="#5d6151" className="jsx-8adf51769f9020ba">
            cut at a marked line
          </text>
          <text x={326} y="110" fontSize="8.5" fill="#5d6151" textAnchor="end" className="jsx-8adf51769f9020ba">
            {`connector carries up to ${kc}m`}
          </text>
        </svg>
      </div>
      <p className="jsx-8adf51769f9020ba cn-note">
        A straight run needs no connectors at all. If you do cut it — to turn a corner, get past an obstacle or split
        the run — rejoin the pieces with a solderless clip connector: the strip end pushes into the clear housing and
        the lid clips shut, no soldering.{' '}
        <b className="jsx-8adf51769f9020ba">{`One connector carries up to ${kc}m of strip.`}</b>
        {" Connectors aren't part of this kit — tell us if you know you'll be cutting and we'll add them."}
      </p>
      <JSXStyle id="8adf51769f9020ba">
        {
          '.cn-panel.jsx-8adf51769f9020ba{border:1px solid var(--line);border-radius:var(--radius-sm);background:#fff;margin:0 0 14px;padding:10px 12px 12px}.cn-h.jsx-8adf51769f9020ba{margin:0 0 8px;font-size:13px}.cn-dia.jsx-8adf51769f9020ba svg{width:100%;height:auto;display:block}.cn-note.jsx-8adf51769f9020ba{color:#5d6151;margin:8px 0 0;font-size:12.5px;line-height:1.55}'
        }
      </JSXStyle>
    </div>
  );
}
function WC() {
  return (
    <details className="jsx-f34b39098470e5f4 ib-sub">
      <summary className="jsx-f34b39098470e5f4">{'Supplier datasheets & install photos'}</summary>
      <div className="jsx-f34b39098470e5f4 ib-guides">
        {[
          [
            '/images/guides/ip-grades.webp',
            'IP protection grades',
            'IP grades — IP20 dry · IP65 splashes · IP67 outdoors · IP68 submersible.',
          ],
          [
            '/images/guides/install-steps.webp',
            '6-step install guide',
            '6-step install — clean, press, cut on the marks, mount on aluminium. Licensed electrician only.',
          ],
          [
            '/images/guides/handling-caution.webp',
            'Handling cautions',
            'Never bend under a 50mm radius, never fold or twist, always use the proper driver.',
          ],
        ].map(([e, s, i]) => (
          <figure key={e} className="jsx-f34b39098470e5f4">
            <img src={asset.asset(e)} alt={s} loading="lazy" className="jsx-f34b39098470e5f4" />
            <figcaption className="jsx-f34b39098470e5f4">{i}</figcaption>
          </figure>
        ))}
      </div>
      <JSXStyle id="f34b39098470e5f4">
        {
          '.ib-sub.jsx-f34b39098470e5f4{background:#ece9db;border:1px solid #dad6c7;margin-top:14px}.ib-sub.jsx-f34b39098470e5f4 summary.jsx-f34b39098470e5f4{cursor:pointer;padding:10px 13px;font-size:13px;font-weight:600;list-style:none}.ib-sub.jsx-f34b39098470e5f4 summary.jsx-f34b39098470e5f4::-webkit-details-marker{display:none}.ib-guides.jsx-f34b39098470e5f4{padding:4px 13px 12px}.ib-guides.jsx-f34b39098470e5f4 figure.jsx-f34b39098470e5f4{margin:10px 0 0}.ib-guides.jsx-f34b39098470e5f4 img{background:#fff;border:1px solid #dad6c7;width:100%;height:auto;display:block}.ib-guides.jsx-f34b39098470e5f4 figcaption.jsx-f34b39098470e5f4{color:#5d6151;margin-top:5px;font-size:12px;line-height:1.4}'
        }
      </JSXStyle>
    </details>
  );
}
function N() {
  return (
    <details className="jsx-abd7c265a5aec103 ib-sub">
      <summary className="jsx-abd7c265a5aec103">Strip lighting 101 — 30-second crash course</summary>
      <ul className="jsx-abd7c265a5aec103 ib-101">
        {[
          ['Brightness', 'is watts per metre — more W/m = brighter.'],
          ['Colour:', '2700–3000K warm · 4000K natural · 6000K crisp. CCT adjusts it; RGB does colours.'],
          ['IP rating', '= water protection: IP20 dry · IP65 steamy · IP67 outdoors.'],
          [
            '24V vs 240V:',
            '24V is slim + needs a driver; 240V plugs into mains, runs to ~50m, but is chunkier (recessed ceilings only).',
          ],
          ['The aluminium channel', 'is a heat-sink, looks professional, and hides the dots.'],
          ['CRI 90+', 'means colours look true.'],
        ].map(([e, s]) => (
          <li key={e} className="jsx-abd7c265a5aec103">
            <b className="jsx-abd7c265a5aec103">{e}</b> {s}
          </li>
        ))}
      </ul>
      <JSXStyle id="abd7c265a5aec103">
        {
          '.ib-sub.jsx-abd7c265a5aec103{background:#ece9db;border:1px solid #dad6c7;margin-top:14px}.ib-sub.jsx-abd7c265a5aec103 summary.jsx-abd7c265a5aec103{cursor:pointer;padding:10px 13px;font-size:13px;font-weight:600;list-style:none}.ib-sub.jsx-abd7c265a5aec103 summary.jsx-abd7c265a5aec103::-webkit-details-marker{display:none}.ib-101.jsx-abd7c265a5aec103{margin:0;padding:0 16px 12px 30px}.ib-101.jsx-abd7c265a5aec103 li.jsx-abd7c265a5aec103{color:#3c4034;margin-bottom:6px;font-size:12.5px;line-height:1.5}'
        }
      </JSXStyle>
    </details>
  );
}
let z = '#15170F',
  S = '#F2C230',
  C = '#E07B39',
  E = '#8a8d7f',
  I = '#C4453B';
function P({ x1: e, x2: s, y: i }) {
  let t = [];
  for (let r = e + 7; r < s; r += 15)
    t.push(<line key={r} x1={r} y1={i} x2={r - 9} y2={i - 10} stroke={z} strokeWidth="1.8" />);
  return (
    <>
      <line x1={e} y1={i} x2={s} y2={i} stroke={z} strokeWidth="3" />
      {t}
    </>
  );
}
function T({ kind: e }) {
  return (
    <svg
      viewBox="0 0 260 150"
      role="img"
      aria-label={
        'correct' === e
          ? 'Enough room: strip on the back edge washes light across the ceiling'
          : 'Too tight: the front lip blocks the light before it reaches the ceiling'
      }
    >
      <P x1={20} x2={246} y={40} />
      {'correct' === e ? (
        <>
          <path d="M46 40 V104 H182 V70" fill="none" stroke={z} strokeWidth="3.4" />
          <path d="M62 86 L74 46 H240 V54 H76 Z" fill={S} opacity="0.9" />
          <rect x="48" y="86" width="13" height="18" fill={C} />
          <path d="M196 50 h44 m0 0 l-7 -4 m7 4 l-7 4" stroke="#2C6B45" strokeWidth="1.8" fill="none" />
          <line x1="46" y1="118" x2="182" y2="118" stroke={E} strokeWidth="1.2" />
          <line x1="46" y1="113" x2="46" y2="123" stroke={E} strokeWidth="1.2" />
          <line x1="182" y1="113" x2="182" y2="123" stroke={E} strokeWidth="1.2" />
          <text x="114" y="136" fontSize="14" fill={E} textAnchor="middle">
            150 mm
          </text>
          <line x1="192" y1="70" x2="192" y2="104" stroke={E} strokeWidth="1.2" />
          <line x1="187" y1="70" x2="197" y2="70" stroke={E} strokeWidth="1.2" />
          <line x1="187" y1="104" x2="197" y2="104" stroke={E} strokeWidth="1.2" />
          <text x="202" y="92" fontSize="14" fill={E}>
            50 mm
          </text>
        </>
      ) : (
        <>
          <path d="M46 40 V114 H140 V52" fill="none" stroke={z} strokeWidth="3.4" />
          <path d="M62 96 L74 58 H138 V66 H76 Z" fill={S} opacity="0.55" />
          <rect x="48" y="96" width="13" height="18" fill={C} />
          <line x1="140" y1="52" x2="140" y2="116" stroke={I} strokeWidth="3.4" />
          <path d="M152 66 l20 20 m0 -20 l-20 20" stroke={I} strokeWidth="3" />
          <line x1="46" y1="128" x2="140" y2="128" stroke={E} strokeWidth="1.2" />
          <line x1="46" y1="123" x2="46" y2="133" stroke={E} strokeWidth="1.2" />
          <line x1="140" y1="123" x2="140" y2="133" stroke={E} strokeWidth="1.2" />
          <text x="93" y="146" fontSize="14" fill={E} textAnchor="middle">
            under 150 mm
          </text>
        </>
      )}
    </svg>
  );
}
function B() {
  return (
    <div className="jsx-5c94aebf9ebe898f cove-wrap">
      <div className="jsx-5c94aebf9ebe898f cove-dia">
        <figure className="jsx-5c94aebf9ebe898f">
          <span className="jsx-5c94aebf9ebe898f cd-tag cd-ok">✓ Enough room</span>
          <T kind="correct" />
        </figure>
        <figure className="jsx-5c94aebf9ebe898f">
          <span className="jsx-5c94aebf9ebe898f cd-tag cd-bad">✕ Too tight</span>
          <T kind="tight" />
        </figure>
      </div>
      <p className="jsx-5c94aebf9ebe898f cove-cap">
        {'The strip sits on the back edge and throws light '}
        <b className="jsx-5c94aebf9ebe898f">{'across '}</b>the ceiling. With a shelf around 150 mm wide and a lip under
        ~50 mm you get an even wash; in a narrower, deeper recess the lip blocks it and you just see a bright stripe.
      </p>
      <JSXStyle id="5c94aebf9ebe898f">
        {
          '.cove-wrap.jsx-5c94aebf9ebe898f{margin:4px 0 16px}.cove-dia.jsx-5c94aebf9ebe898f{grid-template-columns:1fr 1fr;gap:10px;display:grid}.cove-cap.jsx-5c94aebf9ebe898f{color:#5d6151;margin:9px 0 0;font-size:12.5px;line-height:1.55}.cove-cap.jsx-5c94aebf9ebe898f b{color:var(--ink);font-weight:600}.cove-dia.jsx-5c94aebf9ebe898f figure{border:1px solid var(--line);background:#fff;margin:0;padding:9px 8px 8px}.cove-dia.jsx-5c94aebf9ebe898f svg{width:100%;height:auto;display:block}.cd-tag.jsx-5c94aebf9ebe898f{letter-spacing:.06em;text-transform:uppercase;margin-bottom:6px;padding:3px 7px;font-size:9px;display:inline-block}.cd-ok.jsx-5c94aebf9ebe898f{color:#2c6b45;background:#e3f1e8}.cd-bad.jsx-5c94aebf9ebe898f{color:#a5382f;background:#f7e4e2}'
        }
      </JSXStyle>
    </div>
  );
}
function L({ media: e }) {
  let i = [
    [e.img.reel, 'Supplied on a reel, cut to the length you order.'],
    [e.img.macro, 'Dot-free: one continuous line of light, not a row of LEDs. The gold pads are the cut points.'],
    [e.img.lit, 'Lit — the warm 3000K setting.'],
  ];
  return (
    <>
      <div className="jsx-607e75253ba7e1bc cob-gallery">
        {i.map(([e, s]) => (
          <figure key={e} className="jsx-607e75253ba7e1bc cob-shot">
            <img src={e} alt="24V Long Run COB strip light" loading="lazy" className="jsx-607e75253ba7e1bc" />
            <figcaption className="jsx-607e75253ba7e1bc">{s}</figcaption>
          </figure>
        ))}
      </div>
      <p className="jsx-607e75253ba7e1bc cob-shotnote">
        Supplier photos show the bare strip — that is the IP20. The IP67 is the same strip with clear silicone injected
        the whole way along.
      </p>
      <JSXStyle id="607e75253ba7e1bc">
        {
          '.cob-gallery.jsx-607e75253ba7e1bc{grid-template-columns:1fr 1fr;gap:10px;margin:0 0 8px;display:grid}.cob-gallery.jsx-607e75253ba7e1bc figure:first-child{grid-column:1/-1}.cob-shot.jsx-607e75253ba7e1bc{border:1px solid var(--line);background:#fff;margin:0}.cob-shot.jsx-607e75253ba7e1bc img{width:100%;height:auto;display:block}.cob-shot.jsx-607e75253ba7e1bc figcaption.jsx-607e75253ba7e1bc{color:#5d6151;border-top:1px solid var(--line);padding:7px 9px 8px;font-size:11px;line-height:1.4}.cob-shotnote.jsx-607e75253ba7e1bc{letter-spacing:.02em;color:#8a8d7f;margin:0 0 14px;font-size:9.5px;line-height:1.5}'
        }
      </JSXStyle>
    </>
  );
}
function O({ states: e }) {
  let [t, r] = React.useState(0),
    n = e[t];
  return (
    <div className="jsx-1242bf670dca8937 cct-gallery">
      <figure className="jsx-1242bf670dca8937 cct-gallery__main">
        <img src={n.img} alt={n.label} loading="lazy" className="jsx-1242bf670dca8937" />
      </figure>
      {n.note && <p className="jsx-1242bf670dca8937 cct-gallery__note">{n.note}</p>}
      <div className="jsx-1242bf670dca8937 cct-gallery__swatches">
        {e.map((e, s) => (
          <button
            key={e.label}
            type="button"
            onClick={() => r(s)}
            className={`jsx-1242bf670dca8937 cct-gallery__swatch${s === t ? ' is-active' : ''}`}
          >
            <img src={e.img} alt="" loading="lazy" decoding="async" className="jsx-1242bf670dca8937" />
            <span className="jsx-1242bf670dca8937">{e.label}</span>
          </button>
        ))}
      </div>
      <JSXStyle id="1242bf670dca8937">
        {
          '.cct-gallery.jsx-1242bf670dca8937{margin:0 0 14px}.cct-gallery__main.jsx-1242bf670dca8937{border:1px solid var(--line);background:#fff;margin:0;overflow:hidden}.cct-gallery__main.jsx-1242bf670dca8937 img{width:100%;height:auto;display:block}.cct-gallery__note.jsx-1242bf670dca8937{color:#5d6151;margin:8px 0 0;font-size:12px;line-height:1.4}.cct-gallery__swatches.jsx-1242bf670dca8937{gap:8px;margin-top:10px;display:flex}.cct-gallery__swatch.jsx-1242bf670dca8937{border:1px solid var(--line);border-radius:var(--radius-sm);cursor:pointer;background:#f7f6f1;flex-direction:column;flex:1;align-items:center;gap:5px;padding:6px;display:flex}.cct-gallery__swatch.is-active.jsx-1242bf670dca8937{border-color:var(--green);box-shadow:0 0 0 1px var(--green)}.cct-gallery__swatch.jsx-1242bf670dca8937 img{object-fit:cover;border-radius:3px;width:100%;height:52px}.cct-gallery__swatch.jsx-1242bf670dca8937 span.jsx-1242bf670dca8937{font-family:var(--font-mono);letter-spacing:.05em;text-transform:uppercase;color:var(--ink-soft);font-size:10px;font-weight:600}.cct-gallery__swatch.is-active.jsx-1242bf670dca8937 span.jsx-1242bf670dca8937{color:var(--green)}'
        }
      </JSXStyle>
    </div>
  );
}
function A({ media: e }) {
  let i = e.specs.filter(([e]) => stripFinder.LONGRUN_SPEC_KEYS.includes(e));
  return (
    <div className="jsx-4284e19b7fd0ec0b sw-specs">
      {i.map(([e, s]) => (
        <div key={e} className="jsx-4284e19b7fd0ec0b sw-spec-row">
          <span className="jsx-4284e19b7fd0ec0b">{e}</span>
          <b className="jsx-4284e19b7fd0ec0b">{s}</b>
        </div>
      ))}
      <JSXStyle id="4284e19b7fd0ec0b">
        {
          '.sw-specs.jsx-4284e19b7fd0ec0b{border:1px solid var(--line);background:#fff;margin:14px 0 4px}.sw-spec-row.jsx-4284e19b7fd0ec0b{border-bottom:1px solid var(--line);gap:14px;padding:9px 13px;font-size:13px;display:flex}.sw-spec-row.jsx-4284e19b7fd0ec0b:last-child{border-bottom:0}.sw-spec-row.jsx-4284e19b7fd0ec0b span.jsx-4284e19b7fd0ec0b{letter-spacing:.05em;text-transform:uppercase;color:#8a8d7f;flex:0 0 34%;padding-top:2px;font-size:10px}.sw-spec-row.jsx-4284e19b7fd0ec0b b.jsx-4284e19b7fd0ec0b{color:var(--ink);font-weight:500}'
        }
      </JSXStyle>
    </div>
  );
}
function M({ media: e }) {
  let i = e.ipGrades || [];
  if (!i.length) return null;
  return (
    <>
      <h4 className="jsx-8f185c330e4cb3bf cob-h4">Two grades — pick by where it goes</h4>
      <p className="jsx-8f185c330e4cb3bf cob-outdoor">
        The bare IP20 is the one for dry indoor work — coves, bulkheads, joinery — and it sits in an aluminium channel.
        The IP67 is the same strip with silicone injected the whole way along, so it goes where other strip can't:
        garden beds and planters, pergolas, under decks, around pools and water features, and floating steps. Rain and a
        hose are no problem. Tell us which one the job needs and we'll send that.
      </p>
      <div className="jsx-8f185c330e4cb3bf cob-ips">
        {i.map(([t, r, n]) => (
          <div key={t} className="jsx-8f185c330e4cb3bf cob-ip cob-ip-on">
            <b className="jsx-8f185c330e4cb3bf">{t}</b>
            <span className="jsx-8f185c330e4cb3bf cob-ip-dim">{r}</span>
            <span className="jsx-8f185c330e4cb3bf cob-ip-use">{n}</span>
          </div>
        ))}
      </div>
      <JSXStyle id="8f185c330e4cb3bf">
        {
          '.cob-h4.jsx-8f185c330e4cb3bf{margin:18px 0 8px;font-size:1rem}.cob-outdoor.jsx-8f185c330e4cb3bf{color:#5d6151;margin:0 0 10px;font-size:12.8px;line-height:1.55}.cob-ips.jsx-8f185c330e4cb3bf{gap:8px;margin-bottom:6px;display:grid}.cob-ip.jsx-8f185c330e4cb3bf{border:1px solid var(--line);background:#fbfaf6;grid-template-columns:auto auto 1fr;align-items:baseline;gap:4px 10px;padding:9px 11px;display:grid}.cob-ip-on.jsx-8f185c330e4cb3bf{border-color:var(--ink);background:#fff}.cob-ip.jsx-8f185c330e4cb3bf b{letter-spacing:.05em;font-size:12px}.cob-ip-dim.jsx-8f185c330e4cb3bf{color:#8a8d7f;font-size:10.5px}.cob-ip-use.jsx-8f185c330e4cb3bf{color:#5d6151;grid-column:1/-1;font-size:12px;line-height:1.45}.cob-ip.jsx-8f185c330e4cb3bf em{letter-spacing:.05em;text-transform:uppercase;color:#8a8d7f;grid-column:1/-1;font-size:9.5px;font-style:normal}.cob-ip-on.jsx-8f185c330e4cb3bf em{color:var(--green)}'
        }
      </JSXStyle>
    </>
  );
}
function R({ product: e, onPick: i }) {
  let t = stripFinder.stripFacts(e);
  return (
    <button type="button" onClick={() => i(e)} className="jsx-41fd6a4019c4f17a rec">
      <div className="jsx-41fd6a4019c4f17a rec__top">
        <span className="jsx-41fd6a4019c4f17a rec__media">
          <ProductVisual product={e} fit="cross" />
        </span>
        <div className="jsx-41fd6a4019c4f17a rec__id">
          <span className="jsx-41fd6a4019c4f17a rec__name">{e.name}</span>
          <span className="jsx-41fd6a4019c4f17a rec__price">
            {e.priceIsFrom ? 'from ' : ''}
            <strong className="jsx-41fd6a4019c4f17a">{api.formatPrice(e.price)}</strong>{' '}
            <small className="jsx-41fd6a4019c4f17a">ex-GST /m</small>
          </span>
          <span className="jsx-41fd6a4019c4f17a rec__where">{t.where}</span>
          {t.spec && <span className="jsx-41fd6a4019c4f17a rec__spec">{t.spec}</span>}
        </div>
      </div>
      <ul className="jsx-41fd6a4019c4f17a rec__why">
        {t.teach.slice(0, 3).map((e) => (
          <li key={e} className="jsx-41fd6a4019c4f17a">
            {e}
          </li>
        ))}
      </ul>
      <span className="jsx-41fd6a4019c4f17a rec__cta">See the complete kit for this strip →</span>
      <JSXStyle id="41fd6a4019c4f17a">
        {
          '.rec.jsx-41fd6a4019c4f17a{text-align:left;border:1px solid var(--line);border-radius:var(--radius-sm);cursor:pointer;background:#f7f6f1;width:100%;margin-top:10px;padding:14px;transition:border-color .15s,box-shadow .15s;display:block}.rec.jsx-41fd6a4019c4f17a:hover{border-color:var(--green);box-shadow:0 0 0 1px var(--green)}.rec__top.jsx-41fd6a4019c4f17a{gap:14px;display:flex}.rec__media.jsx-41fd6a4019c4f17a{border:1px solid var(--line);background:#fff;border-radius:3px;flex:none;width:76px;height:58px;overflow:hidden}.rec__id.jsx-41fd6a4019c4f17a{flex-direction:column;gap:3px;min-width:0;display:flex}.rec__name.jsx-41fd6a4019c4f17a{font-size:15px;font-weight:600;line-height:1.3}.rec__price.jsx-41fd6a4019c4f17a{font-size:15px}.rec__price.jsx-41fd6a4019c4f17a small.jsx-41fd6a4019c4f17a{font-family:var(--font-mono);color:var(--ink-muted);font-size:10px}.rec__where.jsx-41fd6a4019c4f17a{color:var(--ink-soft);margin-top:2px;font-size:12.5px}.rec__spec.jsx-41fd6a4019c4f17a{font-family:var(--font-mono);letter-spacing:.02em;text-transform:uppercase;color:var(--ink-muted);font-size:10.5px;line-height:1.5}.rec__why.jsx-41fd6a4019c4f17a{flex-direction:column;gap:6px;margin:12px 0 0;padding:0;list-style:none;display:flex}.rec__why.jsx-41fd6a4019c4f17a li.jsx-41fd6a4019c4f17a{color:var(--ink-soft);padding-left:20px;font-size:13px;line-height:1.45;position:relative}.rec__why.jsx-41fd6a4019c4f17a li.jsx-41fd6a4019c4f17a:before{content:"✓";color:var(--green);font-weight:700;position:absolute;left:0}.rec__cta.jsx-41fd6a4019c4f17a{font-family:var(--font-mono);letter-spacing:.08em;text-transform:uppercase;color:var(--green);margin-top:14px;font-size:11px;font-weight:500;display:inline-block}'
        }
      </JSXStyle>
    </button>
  );
}
function W({ open: e, onClose: t }) {
  var r;
  let n,
    f = useDispatch(),
    g = useSelector(finderProductsSlice.selectFinderProducts),
    z = 'loading' === useSelector(finderProductsSlice.selectFinderProductsStatus) && 0 === g.length,
    [S, C] = React.useState({}),
    [E, I] = React.useState(0),
    [P, T] = React.useState(''),
    [F, G] = React.useState(null),
    [q, V] = React.useState({});
  (React.useEffect(() => {
    e && (I(0), C({}), T(''), G(null), V({}));
  }, [e]),
    React.useEffect(() => {
      if (e) return (document.addEventListener('keydown', a), () => document.removeEventListener('keydown', a));
      function a(e) {
        'Escape' === e.key && t();
      }
    }, [e, t]));
  let D = stripFinder.visibleQuestions(S),
    U = E >= D.length,
    $ = 'stairs' === S.place,
    K = React.useMemo(() => ($ ? stripFinder.buildStairKit() : null), [$]),
    H = stripFinder.isLongRun(S) && !!S.length,
    Y = React.useMemo(() => (H ? stripFinder.longRunInfo(g, S) : null), [H, g, S]),
    Q = React.useMemo(() => (!U || F || $ || H ? null : stripFinder.pickRecommendation(g, S)), [U, F, $, H, g, S]),
    Z = React.useMemo(() => (F ? stripFinder.buildPackage(F, S, g, q) : null), [F, S, g, q]);
  if (!e) return null;
  let J = D[E];
  function X() {
    let e = parseFloat(P);
    e &&
      !(e < 1) &&
      (C((a) => ({
        ...a,
        length: String(e),
      })),
      I((e) => e + 1));
  }
  function ee() {
    F ? G(null) : I((e) => Math.max(0, e - 1));
  }
  function ea() {
    let e = {
      ...S,
    };
    (delete e.length, T(''), C(e), I(Math.max(0, stripFinder.visibleQuestions(e).length - 1)));
  }
  function es() {
    (C({}), I(0), T(''), G(null), V({}));
  }
  function ei(e) {
    (V({}), G(e));
  }
  let et = (e) => ('function' == typeof e.hint ? e.hint(S) : e.hint);
  return (
    <div role="dialog" aria-modal="true" aria-label="Strip light finder" className="jsx-a408cbbe3f04beea overlay">
      <div onClick={(e) => e.stopPropagation()} className="jsx-a408cbbe3f04beea sheet">
        <header className="jsx-a408cbbe3f04beea sheet__bar">
          <span className="jsx-a408cbbe3f04beea sheet__label">◈ Strip light finder</span>
          <button type="button" onClick={t} aria-label="Close" className="jsx-a408cbbe3f04beea sheet__close">
            <Icons.IconClose />
          </button>
        </header>
        <div className="jsx-a408cbbe3f04beea sheet__body">
          {$ ? (
            <>
              <button
                type="button"
                onClick={function () {
                  (C({}), I(0));
                }}
                className="jsx-a408cbbe3f04beea link-back"
              >
                ← Back
              </button>
              <span className="jsx-a408cbbe3f04beea prog">✓ Stair lighting</span>
              <h2 className="jsx-a408cbbe3f04beea">Stair lighting is a kit — no questions needed</h2>
              <p className="jsx-a408cbbe3f04beea result__summary">
                Stairs run on their own controller with a sensor top and bottom, so it lights the steps as you walk.
                Watch the setup video, then here’s what goes in it.
              </p>
              <figure className="jsx-a408cbbe3f04beea stairvideo">
                <a
                  href={`https://www.youtube.com/watch?v=${K.video}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="jsx-a408cbbe3f04beea"
                >
                  <img
                    src={`https://i.ytimg.com/vi/${K.video}/hqdefault.jpg`}
                    alt="Smart Stair Lights connection and setup video"
                    loading="lazy"
                    className="jsx-a408cbbe3f04beea"
                  />
                </a>
                <figcaption className="jsx-a408cbbe3f04beea">Smart Stair Lights — connection and setup ↗</figcaption>
              </figure>
              {K.items.length > 0 && (
                <ul className="jsx-a408cbbe3f04beea kit">
                  {K.items.map((e) => (
                    <li key={e.key} className="jsx-a408cbbe3f04beea kitline">
                      <span aria-hidden="true" className="jsx-a408cbbe3f04beea kitline__media kitline__media--nophoto">
                        Photo
                        <br className="jsx-a408cbbe3f04beea" />
                        coming
                      </span>
                      <div className="jsx-a408cbbe3f04beea kitline__body">
                        <div className="jsx-a408cbbe3f04beea kitline__top">
                          <span className="jsx-a408cbbe3f04beea kitline__name">{e.product.name}</span>
                          <span className="jsx-a408cbbe3f04beea kitline__meta">
                            <span className="jsx-a408cbbe3f04beea kitline__price">
                              {api.formatPrice(e.product.price)}
                              {e.unit && <em className="jsx-a408cbbe3f04beea"> {e.unit}</em>}
                            </span>
                          </span>
                        </div>
                        {e.sub && <p className="jsx-a408cbbe3f04beea kitline__sub">{e.sub}</p>}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
              {K.items.length > 0 && (
                <p className="jsx-a408cbbe3f04beea sw-note">
                  We're still waiting on supplier photos for these two, so they're listed by name rather than shown as
                  something else. Give us a call on{' '}
                  <a href="tel:+61892972969" className="jsx-a408cbbe3f04beea">
                    (08) 9297 2969
                  </a>
                  {" and we'll size it to your staircase."}
                </p>
              )}
              <div className="jsx-a408cbbe3f04beea sw-cta">
                <a href="tel:+61892972969" className="jsx-a408cbbe3f04beea btn-call">
                  Call (08) 9297 2969
                </a>
                <button type="button" onClick={es} className="jsx-a408cbbe3f04beea pk-restart">
                  Start again
                </button>
              </div>
            </>
          ) : F && Z ? (
            <>
              <button type="button" onClick={ee} className="jsx-a408cbbe3f04beea link-back">
                ← Back to suggestions
              </button>
              <span className="jsx-a408cbbe3f04beea prog">✓ Your complete kit</span>
              <h2 className="jsx-a408cbbe3f04beea">{F.name}</h2>
              {/* The picture on the kit screen used to follow the PLACE answer,
                  which is wrong the moment the kit is not the strip that place
                  usually gets: pick a recessed ceiling, end up on a 24V COB,
                  and the header showed the 240V reel captioned "240V strip on
                  the reel — the one that sits in a ceiling recess" above a kit
                  with no 240V in it. The picture now comes off the strip that
                  is actually in the kit, so it can never disagree with it. */}
              {'240V' === Z.facts.fam ? (
                <_ />
              ) : (
                <figure className="jsx-a408cbbe3f04beea q-photo q-photo--full kitshot">
                  <div className="jsx-a408cbbe3f04beea kitshot__img">
                    <ProductVisual product={F} fit="panel" />
                  </div>
                  <figcaption className="jsx-a408cbbe3f04beea">{F.name}</figcaption>
                </figure>
              )}
              {'240V' !== Z.facts.fam && <KC both={'both' === Z.feed} />}
              <p className="jsx-a408cbbe3f04beea result__summary">
                {'Everything you need for your '}
                {Z.len}m run — nothing missing, nothing extra:
              </p>
              <ul className="jsx-a408cbbe3f04beea kit">
                {Z.items.map((e) => (
                  <li key={e.key} className="jsx-a408cbbe3f04beea kitline">
                    <span
                      onClick={() => f(uiSlice.openQuickView(e.product))}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(a) => 'Enter' === a.key && f(uiSlice.openQuickView(e.product))}
                      title={`View ${e.product.name} — full specs and all options`}
                      className="jsx-a408cbbe3f04beea kitline__media"
                    >
                      <ProductVisual product={e.product} fit="cross" />
                    </span>
                    <div className="jsx-a408cbbe3f04beea kitline__body">
                      <div className="jsx-a408cbbe3f04beea kitline__top">
                        <span
                          onClick={() => f(uiSlice.openQuickView(e.product))}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(a) => 'Enter' === a.key && f(uiSlice.openQuickView(e.product))}
                          className="jsx-a408cbbe3f04beea kitline__name"
                        >
                          {e.product.name}
                          <span aria-hidden="true" className="jsx-a408cbbe3f04beea kitline__go">
                            ↗
                          </span>
                        </span>
                        <span className="jsx-a408cbbe3f04beea kitline__meta">
                          <span className="jsx-a408cbbe3f04beea kitline__qty">×{e.qty}</span>
                          <span className="jsx-a408cbbe3f04beea kitline__price">
                            {api.formatPrice(e.product.price * e.qty)}
                          </span>
                        </span>
                      </div>
                      {e.sub && <p className="jsx-a408cbbe3f04beea kitline__sub">{e.sub}</p>}
                      {e.candidates && e.candidates.length > 1 && (
                        <label className="jsx-a408cbbe3f04beea kitline__opt">
                          <span className="jsx-a408cbbe3f04beea kitline__optlabel">
                            {'Choose option — '}
                            {e.candidates.length}
                            {' available'}
                          </span>
                          <select
                            value={String(e.product.id)}
                            onChange={(a) =>
                              V((s) => ({
                                ...s,
                                [e.key]: a.target.value,
                              }))
                            }
                            className="jsx-a408cbbe3f04beea"
                          >
                            {e.candidates.map((e) => (
                              <option key={e.id} value={String(e.id)} className="jsx-a408cbbe3f04beea">
                                {e.name}
                                {' — '}
                                {api.formatPrice(e.price)}
                              </option>
                            ))}
                          </select>
                        </label>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <p className="jsx-a408cbbe3f04beea pk-tap-hint">
                Tap any photo or product name above for the full product page — specs, every option and the install
                guide.
              </p>
              {'240V' !== Z.facts.fam && <VC len={Z.len} carries={Z.facts.connector || 2} />}
              <div className="jsx-a408cbbe3f04beea total">
                <span className="jsx-a408cbbe3f04beea">Kit total</span>
                <span className="jsx-a408cbbe3f04beea total__val">
                  {api.formatPrice(Z.subtotal)}
                  <small className="jsx-a408cbbe3f04beea">
                    {' ex-GST · '}
                    {api.formatPrice(Z.totalIncGst)}
                    {' inc'}
                  </small>
                </span>
              </div>
              <button
                type="button"
                onClick={function () {
                  Z &&
                    (Z.items.forEach((e) =>
                      f(
                        cartSlice.addItem({
                          ...e.product,
                          quantity: e.qty,
                        }),
                      ),
                    ),
                    t(),
                    f(cartSlice.openCart()));
                }}
                className="jsx-a408cbbe3f04beea cta"
              >
                Add whole kit to cart
              </button>
              <details open={!0} className="jsx-a408cbbe3f04beea infobox">
                <summary className="jsx-a408cbbe3f04beea">
                  <span aria-hidden="true" className="jsx-a408cbbe3f04beea ib-ico">
                    i
                  </span>
                  Full details of this strip light
                  <span aria-hidden="true" className="jsx-a408cbbe3f04beea ib-chev">
                    ▾
                  </span>
                </summary>
                <div className="jsx-a408cbbe3f04beea ib-body">
                  {'joinery' === S.place && 'CCTCOB' === Z.facts.fam && <O states={stripFinder.CABINET_CCT_STATES} />}
                  {'joinery' === S.place && 'RGBCOB' === Z.facts.fam && <O states={stripFinder.CABINET_RGB_STATES} />}
                  <div className="jsx-a408cbbe3f04beea ib-specs">
                    {Z.spec.map(([e, s]) => (
                      <div key={e} className="jsx-a408cbbe3f04beea ib-row">
                        <span className="jsx-a408cbbe3f04beea">{e}</span>
                        <b className="jsx-a408cbbe3f04beea">{s}</b>
                      </div>
                    ))}
                  </div>
                  {Z.facts.teach?.length > 0 && (
                    <div className="jsx-a408cbbe3f04beea ib-teach">
                      <h5 className="jsx-a408cbbe3f04beea">Good to know</h5>
                      <ul className="jsx-a408cbbe3f04beea">
                        {Z.facts.teach.map((e) => (
                          <li key={e} className="jsx-a408cbbe3f04beea">
                            {e}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <N />
                  <WC />
                </div>
              </details>
              {Z.notes.length > 0 && (
                <details className="jsx-a408cbbe3f04beea pk-notes-drop">
                  <summary className="jsx-a408cbbe3f04beea">
                    <span aria-hidden="true" className="jsx-a408cbbe3f04beea">
                      ⓘ
                    </span>
                    {' Good to know for your run'}
                    <span className="jsx-a408cbbe3f04beea pkn-count">{Z.notes.length}</span>
                  </summary>
                  <div className="jsx-a408cbbe3f04beea pk-notes-body">
                    {Z.notes.map((e, s) => (
                      <p key={s} className="jsx-a408cbbe3f04beea pk-note">
                        {e}
                      </p>
                    ))}
                  </div>
                </details>
              )}
            </>
          ) : H ? (
            <>
              <button type="button" onClick={ea} className="jsx-a408cbbe3f04beea link-back">
                ← Back
              </button>
              {Y.tooShort ? (
                <>
                  <span className="jsx-a408cbbe3f04beea prog">Let's get you the right strip</span>
                  <h2 className="jsx-a408cbbe3f04beea">{Y.len}m is too short for this one</h2>
                  <p className="jsx-a408cbbe3f04beea result__summary">
                    The 24V Long Run COB earns its keep over distance — it's built so one driver can push{' '}
                    {stripFinder.LONGRUN_COB_MEDIA.run.single}
                    {'m. At '}
                    {Y.len}m you'd be paying for range you'll never use, and there's a brighter, better-value strip for
                    a run that size.
                  </p>
                  <div className="jsx-a408cbbe3f04beea callus">
                    {'📞 Give us a quick call on '}
                    <a href="tel:+61892972969" className="jsx-a408cbbe3f04beea">
                      (08) 9297 2969
                    </a>
                    {" and we'll match the right strip to your "}
                    {Y.len}m run — takes two minutes.
                  </div>
                  <div className="jsx-a408cbbe3f04beea sw-cta">
                    <a href="tel:+61892972969" className="jsx-a408cbbe3f04beea btn-call">
                      Call (08) 9297 2969
                    </a>
                    <button type="button" onClick={ea} className="jsx-a408cbbe3f04beea pk-restart">
                      Change my length
                    </button>
                    <button type="button" onClick={es} className="jsx-a408cbbe3f04beea pk-restart">
                      Start again
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <span className="jsx-a408cbbe3f04beea prog">
                    {'✓ '}
                    {Y.fromCove ? 'The strip that fits' : Y.fromOutdoor ? 'The outdoor strip' : 'Long run strip light'}
                  </span>
                  <h2 className="jsx-a408cbbe3f04beea">
                    {Y.fromCove
                      ? 'Your recess is tight — use the Long Run COB strip'
                      : Y.fromOutdoor
                        ? 'Outdoors — the sealed IP67 Long Run COB'
                        : 'For a long run, this is the strip'}
                  </h2>
                  <p className="jsx-a408cbbe3f04beea result__summary">
                    {Y.fromOutdoor ? (
                      <>
                        {'Outside it is the same 7.5W a metre '}
                        <b className="jsx-a408cbbe3f04beea">24V Long Run COB</b>
                        {
                          ', supplied as the IP67 version — silicone injected the whole way along, so rain, a hose and damp soil are no problem. Garden beds, pergolas, under decks, around pools. It is made in 3000K warm white, and one feed still carries '
                        }
                        {stripFinder.LONGRUN_COB_MEDIA.run.single}
                        {' metres.'}
                      </>
                    ) : Y.fromCove ? (
                      <>
                        The 240V strip is chunky and needs that flat shelf, so it is out. The{' '}
                        <b className="jsx-a408cbbe3f04beea">24V Long Run COB</b>
                        {
                          ' is thin, flexible and sips power, which is exactly what a shallow recess wants — and one feed still carries'
                        }{' '}
                        {stripFinder.LONGRUN_COB_MEDIA.run.single}
                        {' metres.'}
                      </>
                    ) : (
                      <>
                        {'The '}
                        <b className="jsx-a408cbbe3f04beea">24V Long Run COB</b>
                        {' only draws '}
                        {stripFinder.LONGRUN_COB_MEDIA.run.wpm}W a metre, which is the whole trick — low current means
                        one driver at one end pushes light {stripFinder.LONGRUN_COB_MEDIA.run.single}
                        {' metres without the far end going dim. Feed it from both ends and you get '}
                        {stripFinder.LONGRUN_COB_MEDIA.run.dual}. It comes bare as{' '}
                        {stripFinder.LONGRUN_COB_MEDIA.run.ip}, so it's equally at home down a garden bed or along an
                        indoor bulkhead — the sealed one outside, the bare one in.
                      </>
                    )}
                  </p>
                  <L media={stripFinder.LONGRUN_COB_MEDIA} />
                  <A media={stripFinder.LONGRUN_COB_MEDIA} />
                  <M media={stripFinder.LONGRUN_COB_MEDIA} />
                  <p className="jsx-a408cbbe3f04beea sw-note">
                    {
                      "Specs above are the supplier's own datasheet for this strip. Not sure it suits your job? Call us on "
                    }
                    <a href="tel:+61892972969" className="jsx-a408cbbe3f04beea">
                      (08) 9297 2969
                    </a>
                    .
                  </p>
                  <div className="jsx-a408cbbe3f04beea sw-cta">
                    {Y.strip ? (
                      <button type="button" onClick={() => ei(Y.strip)} className="jsx-a408cbbe3f04beea btn-call">
                        Build my kit →
                      </button>
                    ) : (
                      <a href="tel:+61892972969" className="jsx-a408cbbe3f04beea btn-call">
                        Call (08) 9297 2969
                      </a>
                    )}
                    {Y.strip && (
                      <a href="tel:+61892972969" className="jsx-a408cbbe3f04beea pk-restart">
                        Call (08) 9297 2969
                      </a>
                    )}
                    <button type="button" onClick={es} className="jsx-a408cbbe3f04beea pk-restart">
                      Start again
                    </button>
                  </div>
                </>
              )}
            </>
          ) : U ? (
            <>
              <button type="button" onClick={ee} className="jsx-a408cbbe3f04beea link-back">
                ← Back
              </button>
              <span className="jsx-a408cbbe3f04beea prog">✓ Your exact match</span>
              <UC image={stripFinder.PLACE_IMAGES[S.place]} />
              <h2 className="jsx-a408cbbe3f04beea">Based on your answers, this is the one:</h2>
              <p className="jsx-a408cbbe3f04beea result__summary">{stripFinder.summarise(S)}</p>
              {Q?.note &&
                (Q.note.startsWith('📞') ? (
                  <div className="jsx-a408cbbe3f04beea callus">
                    {(n = 'string' == typeof (r = Q.note) ? r.match(j) : null) ? (
                      <>
                        {r.slice(0, n.index)}
                        <a href="tel:+61892972969">{n[0]}</a>
                        {r.slice(n.index + n[0].length)}
                      </>
                    ) : (
                      r
                    )}
                  </div>
                ) : (
                  <p className="jsx-a408cbbe3f04beea sw-hint">{Q.note}</p>
                ))}
              {z && <p className="jsx-a408cbbe3f04beea result__hint">Finding your match…</p>}
              {!z && !Q?.callOnly && (
                <p className="jsx-a408cbbe3f04beea result__hint">Tap it to see the complete kit →</p>
              )}
              {!z && Q?.primary && <R product={Q.primary} onPick={ei} />}
              {!z && Q?.alts?.length > 0 && (
                <details className="jsx-a408cbbe3f04beea alts">
                  <summary className="jsx-a408cbbe3f04beea">
                    {Q.callOnly
                      ? `Or preview ${Q.alts.length} close option${Q.alts.length > 1 ? 's' : ''} — we'll confirm the details by phone`
                      : `Not quite right? See ${Q.alts.length} alternative${Q.alts.length > 1 ? 's' : ''}`}
                  </summary>
                  {Q.alts.map((e) => (
                    <R key={e.id} product={e} onPick={ei} />
                  ))}
                </details>
              )}
              <MC />
            </>
          ) : (
            <>
              {E > 0 && (
                <button type="button" onClick={ee} className="jsx-a408cbbe3f04beea link-back">
                  ← Back
                </button>
              )}
              <span className="jsx-a408cbbe3f04beea prog">
                {'Question '}
                {E + 1}
                {' of '}
                {D.length}
              </span>
              <h2 className="jsx-a408cbbe3f04beea">{J.q}</h2>
              {et(J) && <p className="jsx-a408cbbe3f04beea sw-hint">{et(J)}</p>}
              {'space' === J.key && <B />}
              {J.input ? (
                <div className="jsx-a408cbbe3f04beea len">
                  <input
                    type="number"
                    min="1"
                    max="99"
                    step="0.5"
                    inputMode="decimal"
                    placeholder={S?.place == 'cove' ? 'e.g. 12' : 'e.g. 4'}
                    autoFocus={!0}
                    value={P}
                    onChange={(e) => T(e.target.value)}
                    onKeyDown={(e) => 'Enter' === e.key && X()}
                    className="jsx-a408cbbe3f04beea"
                  />
                  <span className="jsx-a408cbbe3f04beea len__unit">metres</span>
                  <button type="button" onClick={X} className="jsx-a408cbbe3f04beea len__go">
                    Continue →
                  </button>
                </div>
              ) : (
                <div className="jsx-a408cbbe3f04beea options">
                  {('function' == typeof J.opts ? J.opts(S) : J.opts).map(([e, s]) => {
                    let i =
                      'place' === J.key
                        ? stripFinder.PLACE_IMAGES[s]
                        : 'colour' === J.key && 'cove' !== S.place && 'bathroom' !== S.place
                          ? stripFinder.COLOUR_OPT_IMAGES[s]
                          : null;
                    return (
                      <button
                        key={s}
                        type="button"
                        onClick={() => {
                          let e, a;
                          return (
                            (e = stripFinder.STRIP_Q.findIndex((e) => e.key === J.key)),
                            void ((a = stripFinder.STRIP_Q.slice(e + 1).map((e) => e.key)).includes('length') && T(''),
                            C((e) => {
                              let i = {
                                ...e,
                                [J.key]: s,
                              };
                              return (a.forEach((e) => delete i[e]), i);
                            }),
                            I((e) => e + 1))
                          );
                        }}
                        className={`jsx-a408cbbe3f04beea option${i ? ' option--thumb' : ''}`}
                      >
                        {i && <YC image={i} size="thumb" />}
                        <span className="jsx-a408cbbe3f04beea option__label">{e}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </>
          )}
        </div>
        <footer className="jsx-a408cbbe3f04beea sheet__foot">
          <button type="button" onClick={t} className="jsx-a408cbbe3f04beea browse">
            I know what I want — let me browse
          </button>
        </footer>
      </div>
      <JSXStyle id="a408cbbe3f04beea">
        {
          '.sheet .q-photo.kitshot{background:#fff}.sheet .q-photo.kitshot .kitshot__img{height:200px;background:#fff}.sheet .q-photo.kitshot .kitshot__img .visual{width:100%;height:100%}.sheet .q-photo.kitshot .kitshot__img img{width:100%;height:100%;object-fit:contain}.overlay.jsx-a408cbbe3f04beea{z-index:110;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);background:#14150f73;place-items:center;padding:24px;display:grid;position:fixed;inset:0}.sheet.jsx-a408cbbe3f04beea{background:#fff;flex-direction:column;width:100%;max-width:480px;max-height:calc(100vh - 48px);display:flex;position:relative;overflow:hidden;box-shadow:0 40px 90px -40px #14150f99}.sheet__bar.jsx-a408cbbe3f04beea{background:var(--bg-tile);color:#fff;flex:none;justify-content:space-between;align-items:center;gap:12px;padding:14px 12px 14px 20px;display:flex}.sheet__label.jsx-a408cbbe3f04beea{font-family:var(--font-mono);letter-spacing:.14em;text-transform:uppercase;color:#9b9b93;font-size:11px}.sheet__close.jsx-a408cbbe3f04beea{color:#fff;cursor:pointer;background:0 0;border:0;border-radius:50%;place-items:center;width:32px;height:32px;display:grid}.sheet__close.jsx-a408cbbe3f04beea:hover{background:#ffffff1f}.sheet__body.jsx-a408cbbe3f04beea{background-color:#f7f6f1;min-height:0;padding:22px 20px 24px;overflow-y:auto}.prog.jsx-a408cbbe3f04beea{font-family:var(--font-mono);letter-spacing:.12em;text-transform:uppercase;color:var(--green);font-size:11px;display:block}h2.jsx-a408cbbe3f04beea{letter-spacing:-.02em;margin:8px 0 14px;font-size:20px;font-weight:600}.link-back.jsx-a408cbbe3f04beea{letter-spacing:0;text-transform:none;color:var(--ink-muted);cursor:pointer;background:0 0;border:0;margin-bottom:14px;padding:0;font-family:inherit;font-size:13px;display:block}.link-back.jsx-a408cbbe3f04beea:hover{color:var(--ink)}.sw-hint.jsx-a408cbbe3f04beea{color:#4d5741;border-left:3px solid var(--green);border-radius:0 var(--radius-sm) var(--radius-sm) 0;background:#e9ebda;margin:0 0 16px;padding:12px 14px;font-size:13px;line-height:1.55}.callus.jsx-a408cbbe3f04beea{color:#f6f4ec;background:var(--ink);border-radius:var(--radius-sm);margin:0 0 16px;padding:16px 18px;font-size:14px;line-height:1.6}.callus.jsx-a408cbbe3f04beea a{color:#46b06e;font-weight:700}.sw-note.jsx-a408cbbe3f04beea{color:#6b5626;background:#fcf3e2;border-left:2px solid #c9932f;margin:14px 0 0;padding:10px 12px;font-size:12.5px;line-height:1.55}.options.jsx-a408cbbe3f04beea{flex-direction:column;gap:9px;display:flex}.option.jsx-a408cbbe3f04beea{text-align:left;border:1px solid var(--line);border-radius:var(--radius-sm);color:var(--ink);cursor:pointer;background:#f7f6f1;align-items:center;gap:12px;padding:10px 16px;font-size:14.5px;line-height:1.4;transition:border-color .15s,background .15s,color .15s;display:flex}.option.jsx-a408cbbe3f04beea:hover{border-color:var(--ink);background:var(--ink);color:#fff}.option--thumb.jsx-a408cbbe3f04beea{min-height:84px}.option__label.jsx-a408cbbe3f04beea{flex:1}.len.jsx-a408cbbe3f04beea{align-items:center;gap:10px;display:flex}.len.jsx-a408cbbe3f04beea input.jsx-a408cbbe3f04beea{width:96px;color:var(--ink);border:1px solid var(--line-strong);border-radius:var(--radius-sm);background:#fff;padding:10px 12px;font-family:inherit;font-size:20px;font-weight:600}.len.jsx-a408cbbe3f04beea input.jsx-a408cbbe3f04beea:focus{border-color:var(--green);outline:none;box-shadow:0 0 0 3px #00c4002e}.len__unit.jsx-a408cbbe3f04beea{font-family:var(--font-mono);letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);font-size:11px}.len__go.jsx-a408cbbe3f04beea{border:1px solid var(--line-strong);border-radius:var(--radius-sm);color:var(--ink);cursor:pointer;background:#f7f6f1;padding:12px 18px;font-size:14px;font-weight:500;transition:border-color .15s,background .15s}.len__go.jsx-a408cbbe3f04beea:hover{border-color:var(--ink);background:#fff}.result__summary.jsx-a408cbbe3f04beea{color:var(--ink-soft);margin:0 0 14px;font-size:15px;line-height:1.6}.result__hint.jsx-a408cbbe3f04beea{font-family:var(--font-mono);letter-spacing:.04em;color:var(--green);margin:0 0 12px;font-size:11.5px}.alts.jsx-a408cbbe3f04beea{margin-top:16px}.alts.jsx-a408cbbe3f04beea summary.jsx-a408cbbe3f04beea{color:var(--ink-soft);cursor:pointer;padding:8px 0;font-size:13px;font-weight:500}.alts.jsx-a408cbbe3f04beea summary.jsx-a408cbbe3f04beea:hover{color:var(--ink)}.spec.jsx-a408cbbe3f04beea{border:1px solid var(--line);border-radius:var(--radius-sm);background:#f7f6f1;margin-bottom:16px;overflow:hidden}.spec__row.jsx-a408cbbe3f04beea{border-bottom:1px solid var(--line);grid-template-columns:128px 1fr;display:grid}.spec__row.jsx-a408cbbe3f04beea:last-child{border-bottom:0}.spec__k.jsx-a408cbbe3f04beea{border-right:1px solid var(--line);font-family:var(--font-mono);letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);background:#f1eee4;padding:11px 12px;font-size:9.5px;line-height:1.4}.spec__v.jsx-a408cbbe3f04beea{color:var(--ink-soft);padding:11px 13px;font-size:12.5px;line-height:1.45}.kit.jsx-a408cbbe3f04beea{flex-direction:column;gap:10px;margin:4px 0 16px;padding:0;list-style:none;display:flex}.kitline.jsx-a408cbbe3f04beea{border:1px solid var(--line);border-radius:var(--radius-sm);background:#f7f6f1;gap:14px;padding:12px;display:flex}.kitline__media.jsx-a408cbbe3f04beea{border:1px solid var(--line);cursor:pointer;background:#fff;border-radius:3px;flex:none;width:54px;height:54px;display:block;overflow:hidden}.kitline__media--nophoto.jsx-a408cbbe3f04beea{text-align:center;letter-spacing:.04em;text-transform:uppercase;color:#8a6d2f;cursor:default;background:#fcf3e2;border:1px dashed #c9932f;place-items:center;font-size:8.5px;line-height:1.25;display:grid}.kitline__body.jsx-a408cbbe3f04beea{flex:1;min-width:0}.kitline__top.jsx-a408cbbe3f04beea{justify-content:space-between;align-items:flex-start;gap:12px;display:flex}.kitline__name.jsx-a408cbbe3f04beea{color:inherit;cursor:pointer;align-items:baseline;gap:5px;font-size:14px;font-weight:500;line-height:1.35;text-decoration:none;display:inline-flex}.kitline__name.jsx-a408cbbe3f04beea:hover{text-decoration:underline}.kitline__go.jsx-a408cbbe3f04beea{color:var(--ink-muted);font-size:11px}.kitline__meta.jsx-a408cbbe3f04beea{white-space:nowrap;flex:none;align-items:baseline;gap:8px;display:flex}.kitline__qty.jsx-a408cbbe3f04beea{font-family:var(--font-mono);color:var(--ink-muted);font-size:11px}.kitline__price.jsx-a408cbbe3f04beea{font-size:14px;font-weight:600}.kitline__price.jsx-a408cbbe3f04beea em{color:var(--ink-muted);margin-left:2px;font-size:11px;font-style:italic;font-weight:400}.kitline__sub.jsx-a408cbbe3f04beea{color:var(--ink-muted);margin:4px 0 0;font-size:12px;line-height:1.45}.kitline__opt.jsx-a408cbbe3f04beea{margin-top:10px;display:block}.kitline__optlabel.jsx-a408cbbe3f04beea{font-family:var(--font-mono);letter-spacing:.1em;text-transform:uppercase;color:var(--green);margin-bottom:5px;font-size:10px;display:block}.kitline__opt.jsx-a408cbbe3f04beea select{width:100%;color:var(--ink);border:1px solid var(--line-strong);border-radius:var(--radius-sm);cursor:pointer;background:#fff;padding:9px 10px;font-family:inherit;font-size:13px}.kitline__opt.jsx-a408cbbe3f04beea select:focus{border-color:var(--ink);outline:none}.checklist.jsx-a408cbbe3f04beea{flex-wrap:wrap;gap:6px 14px;margin:0 0 16px;padding:0;list-style:none;display:flex}.checklist.jsx-a408cbbe3f04beea li.jsx-a408cbbe3f04beea{color:var(--ink-soft);padding-left:16px;font-size:12.5px;font-weight:500;position:relative}.checklist.jsx-a408cbbe3f04beea li.jsx-a408cbbe3f04beea:before{content:"✓";color:var(--green);font-weight:700;position:absolute;left:0}.infobox.jsx-a408cbbe3f04beea{border:1px solid var(--ink);background:#fff;margin-top:16px}.infobox.jsx-a408cbbe3f04beea summary.jsx-a408cbbe3f04beea{cursor:pointer;background:var(--ink);color:#f6f4ec;align-items:center;gap:10px;padding:13px 16px;font-size:15px;font-weight:600;list-style:none;display:flex}.infobox.jsx-a408cbbe3f04beea summary.jsx-a408cbbe3f04beea::-webkit-details-marker{display:none}.ib-ico.jsx-a408cbbe3f04beea{border:1.5px solid #f6f4ec;border-radius:50%;place-items:center;width:20px;height:20px;font-family:Georgia,serif;font-size:12px;font-style:italic;display:inline-grid}.ib-chev.jsx-a408cbbe3f04beea{margin-left:auto;transition:transform .2s}.infobox[open].jsx-a408cbbe3f04beea summary.jsx-a408cbbe3f04beea .ib-chev.jsx-a408cbbe3f04beea{transform:rotate(180deg)}.ib-body.jsx-a408cbbe3f04beea{flex-direction:column;gap:14px;padding:16px;display:flex}.ib-body.jsx-a408cbbe3f04beea .learn{margin-top:0}.ib-specs.jsx-a408cbbe3f04beea{border:1px solid var(--line)}.ib-row.jsx-a408cbbe3f04beea{border-bottom:1px solid #ece9db;justify-content:space-between;gap:16px;padding:10px 13px;font-size:13.6px;display:flex}.ib-row.jsx-a408cbbe3f04beea:last-child{border-bottom:0}.ib-row.jsx-a408cbbe3f04beea span.jsx-a408cbbe3f04beea{color:#6b6e5f;white-space:nowrap}.ib-row.jsx-a408cbbe3f04beea b.jsx-a408cbbe3f04beea{text-align:right;font-weight:600}.ib-teach.jsx-a408cbbe3f04beea{margin-top:0}.ib-teach.jsx-a408cbbe3f04beea h5.jsx-a408cbbe3f04beea{letter-spacing:.14em;text-transform:uppercase;color:#3e5c46;margin:0 0 8px;font-size:10.5px}.ib-teach.jsx-a408cbbe3f04beea ul.jsx-a408cbbe3f04beea{margin:0 0 0 18px;padding:0}.ib-teach.jsx-a408cbbe3f04beea li.jsx-a408cbbe3f04beea{color:#3c4034;margin-bottom:6px;font-size:13px;line-height:1.5}.pk-tap-hint.jsx-a408cbbe3f04beea{color:var(--ink-muted);margin:-8px 0 14px;font-size:11.5px}.pk-notes-drop.jsx-a408cbbe3f04beea{margin-top:16px}.pk-notes-drop.jsx-a408cbbe3f04beea summary.jsx-a408cbbe3f04beea{color:var(--ink);cursor:pointer;border-radius:var(--radius-sm);background:#ece9db;border:1px solid #ddd8c6;align-items:center;gap:8px;padding:12px 14px;font-size:13px;font-weight:600;list-style:none;display:flex}.pk-notes-drop.jsx-a408cbbe3f04beea summary.jsx-a408cbbe3f04beea::-webkit-details-marker{display:none}.pk-notes-drop[open].jsx-a408cbbe3f04beea summary.jsx-a408cbbe3f04beea{border-bottom-right-radius:0;border-bottom-left-radius:0}.pkn-count.jsx-a408cbbe3f04beea{background:var(--line);min-width:18px;height:18px;color:var(--ink);border-radius:999px;justify-content:center;align-items:center;padding:0 5px;font-size:10.5px;font-weight:600;display:inline-flex}.pk-notes-body.jsx-a408cbbe3f04beea{border-radius:0 0 var(--radius-sm) var(--radius-sm);background:#f6f4ea;border:1px solid #ddd8c6;border-top:0;flex-direction:column;gap:10px;padding:14px;display:flex}.pk-note.jsx-a408cbbe3f04beea{color:var(--ink-soft);margin:0;font-size:12.5px;line-height:1.5}.goodtoknow.jsx-a408cbbe3f04beea{border-radius:0 0 var(--radius-sm) var(--radius-sm);background:#f6f4ea;border:1px solid #ddd8c6;border-top:0;padding:14px}.goodtoknow.jsx-a408cbbe3f04beea ul.jsx-a408cbbe3f04beea{flex-direction:column;gap:8px;margin:0;padding:0;list-style:none;display:flex}.goodtoknow.jsx-a408cbbe3f04beea li.jsx-a408cbbe3f04beea{color:var(--ink-soft);padding-left:16px;font-size:12.5px;line-height:1.5;position:relative}.goodtoknow.jsx-a408cbbe3f04beea li.jsx-a408cbbe3f04beea:before{content:"•";color:var(--green);position:absolute;left:0}.runnotes.jsx-a408cbbe3f04beea{border-radius:var(--radius-sm);background:#f6f4ea;border:1px solid #ddd8c6;flex-direction:column;gap:9px;margin:0 0 16px;padding:14px;list-style:none;display:flex}.runnotes.jsx-a408cbbe3f04beea li.jsx-a408cbbe3f04beea{color:var(--ink-soft);font-size:12.5px;line-height:1.5}.stairvideo.jsx-a408cbbe3f04beea{border:1px solid var(--line);border-radius:var(--radius-sm);background:#fff;margin:0 0 16px;overflow:hidden}.stairvideo.jsx-a408cbbe3f04beea a.jsx-a408cbbe3f04beea{display:block;position:relative}.stairvideo.jsx-a408cbbe3f04beea img.jsx-a408cbbe3f04beea{width:100%;height:auto;display:block}.stairvideo.jsx-a408cbbe3f04beea figcaption.jsx-a408cbbe3f04beea{color:var(--ink-muted);border-top:1px solid var(--line);padding:8px 12px;font-size:12.5px}.sw-cta.jsx-a408cbbe3f04beea{flex-wrap:wrap;gap:10px;margin-top:6px;display:flex}.sw-cta.jsx-a408cbbe3f04beea .btn-call.jsx-a408cbbe3f04beea,.sw-cta.jsx-a408cbbe3f04beea .pk-restart.jsx-a408cbbe3f04beea{border-radius:var(--radius-sm);cursor:pointer;justify-content:center;align-items:center;padding:12px 18px;font-size:13.5px;font-weight:500;text-decoration:none;display:inline-flex}.sw-cta.jsx-a408cbbe3f04beea .btn-call.jsx-a408cbbe3f04beea{background:var(--ink);color:#fff;border:0}.sw-cta.jsx-a408cbbe3f04beea .pk-restart.jsx-a408cbbe3f04beea{color:var(--ink);border:1px solid var(--line-strong);background:#f7f6f1}.sw-cta.jsx-a408cbbe3f04beea .pk-restart.jsx-a408cbbe3f04beea:hover{border-color:var(--ink);background:#fff}.total.jsx-a408cbbe3f04beea{border-top:1px solid var(--line);justify-content:space-between;align-items:baseline;gap:12px;margin-top:6px;padding:14px 0 16px;display:flex}.total.jsx-a408cbbe3f04beea>span.jsx-a408cbbe3f04beea:first-child{font-size:17px;font-weight:600}.total__val.jsx-a408cbbe3f04beea{font-size:20px;font-weight:600}.total__val.jsx-a408cbbe3f04beea small.jsx-a408cbbe3f04beea{font-family:var(--font-mono);color:var(--ink-muted);font-size:10.5px;font-weight:400}.cta.jsx-a408cbbe3f04beea{border-radius:var(--radius-sm);background:var(--ink);color:#fff;cursor:pointer;border:0;width:100%;height:52px;margin-bottom:10px;font-size:15px;font-weight:500;transition:background .16s}.cta.jsx-a408cbbe3f04beea:hover{background:#2c2e26}.sheet__foot.jsx-a408cbbe3f04beea{border-top:1px solid var(--line);background-color:#f7f6f1;flex:none;padding:14px 20px 18px}.browse.jsx-a408cbbe3f04beea{width:100%;font-family:var(--font-mono);letter-spacing:.12em;text-transform:uppercase;border:1px solid var(--line-strong);border-radius:var(--radius-sm);color:var(--ink);cursor:pointer;background:#f7f6f1;padding:14px 16px;font-size:11.5px}.browse.jsx-a408cbbe3f04beea:hover{border-color:var(--ink);background:#fff}'
        }
      </JSXStyle>
    </div>
  );
}
function QC() {
  return (
    <section
      className={JSXStyle.dynamic([['fe28e5dc96bb2b66', [asset.asset('/images/hero/strip-hero.webp')]]]) + ' hero'}
    >
      <div
        aria-hidden="true"
        className={
          JSXStyle.dynamic([['fe28e5dc96bb2b66', [asset.asset('/images/hero/strip-hero.webp')]]]) + ' hero__scrim'
        }
      />
      <div
        className={
          JSXStyle.dynamic([['fe28e5dc96bb2b66', [asset.asset('/images/hero/strip-hero.webp')]]]) +
          ' container hero__inner'
        }
      >
        <span
          className={
            JSXStyle.dynamic([['fe28e5dc96bb2b66', [asset.asset('/images/hero/strip-hero.webp')]]]) + ' hero__eyebrow'
          }
        >
          LED Strip Lighting · Smart Control · Energy Smart · Perth, WA
        </span>
        <h1
          className={
            JSXStyle.dynamic([['fe28e5dc96bb2b66', [asset.asset('/images/hero/strip-hero.webp')]]]) + ' hero__title'
          }
        >
          Strip lighting.
          <br className={JSXStyle.dynamic([['fe28e5dc96bb2b66', [asset.asset('/images/hero/strip-hero.webp')]]])} />
          <span
            className={
              JSXStyle.dynamic([['fe28e5dc96bb2b66', [asset.asset('/images/hero/strip-hero.webp')]]]) + ' hero__accent'
            }
          >
            Perfect
          </span>
          {' anywhere.'}
        </h1>
        <p
          className={
            JSXStyle.dynamic([['fe28e5dc96bb2b66', [asset.asset('/images/hero/strip-hero.webp')]]]) + ' hero__lead'
          }
        >
          Transform your space with premium LED Strip lighting. Seamless, stylish and smart — for every room, every mood
          and every moment.
        </p>
        <div
          className={
            JSXStyle.dynamic([['fe28e5dc96bb2b66', [asset.asset('/images/hero/strip-hero.webp')]]]) + ' hero__actions'
          }
        >
          <a
            href="https://greenhse.com/"
            target="_blank"
            rel="noreferrer noopener"
            className={
              JSXStyle.dynamic([['fe28e5dc96bb2b66', [asset.asset('/images/hero/strip-hero.webp')]]]) +
              ' hero__btn hero__btn--primary'
            }
          >
            {'Strip Light Finder '}
            <span
              aria-hidden="true"
              className={JSXStyle.dynamic([['fe28e5dc96bb2b66', [asset.asset('/images/hero/strip-hero.webp')]]])}
            >
              →
            </span>
          </a>
          <a
            href="/layout-app/"
            className={
              JSXStyle.dynamic([['fe28e5dc96bb2b66', [asset.asset('/images/hero/strip-hero.webp')]]]) +
              ' hero__btn hero__btn--ghost'
            }
          >
            {'Lighting Layout App '}
            <span
              aria-hidden="true"
              className={JSXStyle.dynamic([['fe28e5dc96bb2b66', [asset.asset('/images/hero/strip-hero.webp')]]])}
            >
              →
            </span>
          </a>
        </div>
      </div>
      <JSXStyle
        id="fe28e5dc96bb2b66"
        dynamic={[asset.asset('/images/hero/strip-hero.webp')]}
      >{`.hero.__jsx-style-dynamic-selector{background-image:url(${asset.asset('/images/hero/strip-hero.webp')});background-position:100%;background-repeat:no-repeat;background-size:cover;position:relative;overflow:hidden}.hero__media.__jsx-style-dynamic-selector{width:64%;position:absolute;top:0;bottom:0;right:0}.hero__img.__jsx-style-dynamic-selector{object-fit:contain;object-position:center;width:100%;height:100%;display:block}.hero__scrim.__jsx-style-dynamic-selector{pointer-events:none;background:linear-gradient(90deg,#0a0a09 0% 28%,#0a0a09db 40%,#0a0a0966 56%,#0a0a0900 72%);position:absolute;inset:0}.hero__inner.__jsx-style-dynamic-selector{padding:100px 34px;position:relative}.hero__eyebrow.__jsx-style-dynamic-selector{font-family:var(--font-mono);letter-spacing:.22em;text-transform:uppercase;color:var(--green-bright);font-size:12px;display:inline-block}.hero__title.__jsx-style-dynamic-selector{font-family:var(--font-display);letter-spacing:-.03em;color:#fff;margin:20px 0 0;font-size:max(40px,min(5.4vw,68px));font-weight:600;line-height:1.06}.hero__accent.__jsx-style-dynamic-selector{color:var(--green-bright)}.hero__lead.__jsx-style-dynamic-selector{color:#ffffffc7;max-width:46ch;margin:22px 0 0;font-size:16px;line-height:1.62}.hero__actions.__jsx-style-dynamic-selector{flex-wrap:wrap;gap:14px;margin-top:34px;display:flex}.hero__btn.__jsx-style-dynamic-selector{border-radius:var(--radius-sm);border:1px solid #0000;align-items:center;gap:9px;padding:14px 24px;font-size:14.5px;font-weight:500;transition:background .16s,border-color .16s,color .16s;display:inline-flex}.hero__btn--primary.__jsx-style-dynamic-selector{background:var(--green-bright);color:#04120b}.hero__btn--primary.__jsx-style-dynamic-selector:hover{background:var(--green-hover)}.hero__btn--ghost.__jsx-style-dynamic-selector{color:#fff;background:0 0;border-color:#ffffff80}.hero__btn--ghost.__jsx-style-dynamic-selector:hover{background:#ffffff14;border-color:#fff}@media (width<=900px){.hero.__jsx-style-dynamic-selector{min-height:650px}.hero__media.__jsx-style-dynamic-selector{width:100%!important}.hero__scrim.__jsx-style-dynamic-selector{background:linear-gradient(#0a0a0959 0%,#0a0a09b8 42%,#0a0a09 78%)}.hero__inner.__jsx-style-dynamic-selector{padding:200px 18px 56px}.hero__lead.__jsx-style-dynamic-selector{font-size:15.5px}.hero__btn.__jsx-style-dynamic-selector{flex:auto;justify-content:center}}`}</JSXStyle>
    </section>
  );
}
let V = {
  strip: 0,
  controller: 1,
  remote: 2,
  transformer: 3,
  channel: 4,
};
function D(e, a) {
  return (V[stripFinder.classify(e)] ?? 99) - (V[stripFinder.classify(a)] ?? 99);
}
export default function Default() {
  let [e, c] = React.useState(!0),
    [o, l] = React.useState([]),
    [d, b] = React.useState(!0),
    [x, p] = React.useState(null),
    [h, m] = React.useState([]),
    [j, g] = React.useState(!0);
  (React.useEffect(() => {
    let e = !1;
    return (
      api2
        .fetchStripLightProducts({
          id: api2.STRIP_LIGHTS_CATEGORY_ID,
        })
        .then((a) => {
          e || l(a.filter((e) => 4 === e.visibility).reverse());
        })
        .catch((a) => {
          e || p(a.message);
        })
        .finally(() => {
          e || b(!1);
        }),
      () => {
        e = !0;
      }
    );
  }, []),
    React.useEffect(() => {
      let e = !1;
      return (
        (async () => {
          try {
            let a = await api2.fetchCategory(api2.STRIP_LIGHTS_CATEGORY_ID),
              s = api2.categoryChildren(a),
              i = await Promise.all(
                s.map(async (e) => {
                  let a = await api2.fetchStripLightProducts({
                    id: e.id,
                    categoryLabel: 'Strip Lights',
                  });
                  return {
                    id: `cat-${e.id}`,
                    label: e.name || `Category ${e.id}`,
                    products: a.filter((e) => 4 === e.visibility),
                  };
                }),
              );
            e || m(i);
          } catch {
          } finally {
            e || g(!1);
          }
        })(),
        () => {
          e = !0;
        }
      );
    }, []));
  let u = React.useMemo(() => [...o].sort(D), [o]),
    y = React.useMemo(() => {
      let e = new Set();
      h.forEach((a) => a.products.forEach((a) => e.add(a.id)));
      let a = u.filter((a) => !e.has(a.id));
      return [
        ...h,
        ...(a.length
          ? [
              {
                id: 'more',
                label: 'More strip lights & accessories',
                products: a,
              },
            ]
          : []),
      ].map((e) => ({
        ...e,
        products: [...e.products].reverse(),
      }));
    }, [h, u]);
  return (
    <main className="jsx-c6d421133c8c91bd home">
      <QC />
      <section id="striplights" className="jsx-c6d421133c8c91bd range">
        <div className="jsx-c6d421133c8c91bd container">
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: 40,
            }}
            className="jsx-c6d421133c8c91bd range__head"
          >
            <div className="jsx-c6d421133c8c91bd range__copy">
              <span className="jsx-c6d421133c8c91bd eyebrow">Featured · Strip Lighting</span>
              <h1 className="jsx-c6d421133c8c91bd range__title">Find your perfect strip light</h1>
              <p className="jsx-c6d421133c8c91bd range__sub">
                Browse the full strip range below — or let our quick finder match you to the right strip in 4 questions.
              </p>
            </div>
            <button type="button" onClick={() => c(!0)} className="jsx-c6d421133c8c91bd link-mono range__finder">
              {'Open the finder '}
              <span aria-hidden="true" className="jsx-c6d421133c8c91bd">
                →
              </span>
            </button>
          </div>
          <div className="jsx-c6d421133c8c91bd sl-banner">
            <img
              src={asset.asset('/images/finder/led_strip.webp')}
              alt="Warm white LED strip lighting glowing on the reel"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              width={980}
              height={980}
              className="jsx-c6d421133c8c91bd"
            />
            <span className="jsx-c6d421133c8c91bd">Real light, real product — our 24V strip range on the reel</span>
          </div>
          {!d && x && (
            <p className="jsx-c6d421133c8c91bd range__status range__status--error">
              Couldn't load products right now. Please try again shortly.
            </p>
          )}
          {!x && (d || j) && (
            <div className="jsx-c6d421133c8c91bd grid">
              <ProductCard2.ProductGridSkeleton count={8} />
            </div>
          )}
          {!x && !d && !j && <CatSections sections={y} renderCard={(e) => <ProductCard key={e.id} product={e} />} />}
        </div>
      </section>
      <VideosSection />
      <W open={e} onClose={() => c(!1)} />
      <JSXStyle id="c6d421133c8c91bd">
        {
          '.range.jsx-c6d421133c8c91bd{padding:20px 0 80px}.range__head.jsx-c6d421133c8c91bd{justify-content:space-between;align-items:flex-end;gap:40px;margin-bottom:34px;display:flex}.range__title.jsx-c6d421133c8c91bd{letter-spacing:-.03em;margin:2px 0 12px;font-size:max(30px,min(3.6vw,44px));font-weight:600;line-height:1.12}.range__sub.jsx-c6d421133c8c91bd{color:var(--ink-soft);margin:0;font-size:15px;line-height:1.6}.range__finder.jsx-c6d421133c8c91bd{cursor:pointer;flex:none;margin-bottom:6px}.range__status.jsx-c6d421133c8c91bd{color:var(--ink-soft);padding:12px 0;font-size:14px}.range__status--error.jsx-c6d421133c8c91bd{color:#b3261e}.sl-banner.jsx-c6d421133c8c91bd{margin:0 0 26px;position:relative;overflow:hidden}.sl-banner.jsx-c6d421133c8c91bd img{object-fit:cover;filter:saturate(1.05);width:100%;height:290px;display:block}.sl-banner.jsx-c6d421133c8c91bd span.jsx-c6d421133c8c91bd{color:#fff;font-family:var(--font-mono);letter-spacing:.05em;text-transform:uppercase;background:#15170fd1;padding:7px 11px;font-size:10.5px;position:absolute;bottom:12px;left:14px}.loading.jsx-c6d421133c8c91bd{flex-direction:column;justify-content:center;align-items:center;gap:18px;min-height:60vh;display:flex}.spinner.jsx-c6d421133c8c91bd{border:3px solid var(--line);border-top-color:var(--ink);border-radius:50%;width:40px;height:40px;animation:.8s linear infinite spin}.loading__text.jsx-c6d421133c8c91bd{color:var(--ink-soft);margin:0;font-size:14px}@keyframes spin{to{transform:rotate(360deg)}}.grid.jsx-c6d421133c8c91bd{grid-template-columns:repeat(4,1fr);gap:24px;display:grid}@media (width<=1080px){.grid.jsx-c6d421133c8c91bd{grid-template-columns:repeat(2,1fr)}}@media (width<=860px){.range__head.jsx-c6d421133c8c91bd{gap:24px;flex-direction:column!important;align-items:flex-start!important}}@media (width<=560px){.grid.jsx-c6d421133c8c91bd{grid-template-columns:1fr}.sl-banner.jsx-c6d421133c8c91bd img{height:180px}}'
        }
      </JSXStyle>
    </main>
  );
}
