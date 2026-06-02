"use client";
import Link from "next/link";
import { useState } from "react";

// ─── Data ───────────────────────────────────────────────────────────────────
const CATEGORIES = [
  {
    id: "pixel-art",
    label: "Pixel Art",
    note: "Payment: Venmo · PayPal F&F",
    items: [
      { slug: "pixel-chibi-full-body",      label: "Chibi",     sub: "Full Body",  price: "$35" },
      { slug: "pixel-chibi-half-body",      label: "Chibi",     sub: "Half Body",  price: "$25" },
      { slug: "pixel-chibi-dynamic",        label: "Chibi",     sub: "Dynamic",    price: "$45" },
      { slug: "pixel-character-full-body",  label: "Character", sub: "Full Body",  price: "$65" },
      { slug: "pixel-character-half-body",  label: "Character", sub: "Half Body",  price: "$50" },
      { slug: "pixel-character-dynamic",    label: "Character", sub: "Dynamic",    price: "$80" },
    ],
  },
  {
    id: "digital-art",
    label: "Digital Art",
    note: "Payment: Venmo · PayPal F&F",
    items: [
      { slug: "digital-chibi-full-body",     label: "Chibi",     sub: "Full Body", price: "$45" },
      { slug: "digital-chibi-half-body",     label: "Chibi",     sub: "Half Body", price: "$30" },
      { slug: "digital-chibi-dynamic",       label: "Chibi",     sub: "Dynamic",   price: "$55" },
      { slug: "digital-character-full-body", label: "Character", sub: "Full Body", price: "$80" },
      { slug: "digital-character-half-body", label: "Character", sub: "Half Body", price: "$60" },
      { slug: "digital-character-dynamic",   label: "Character", sub: "Dynamic",   price: "$95" },
    ],
  },
  {
    id: "jewelry",
    label: "Jewelry",
    note: "NYC local pickup only · Payment: Cash · Venmo · PayPal F&F",
    items: [
      { slug: "jewelry-glasses-chains", label: "Glasses", sub: "Chains", price: "$15+" },
    ],
  },
];

const HOW_TO_STEPS = [
  {
    n: "01",
    title: "Choose your commission",
    body: "Browse the categories above and pick the type that fits your vision. Each listing shows pricing and turnaround time.",
  },
  {
    n: "02",
    title: "Fill out the request form",
    body: "Click any commission type to open its request form — or reach out directly via Instagram (@avoracity_studio) or email (avoracity.studio@gmail.com).",
  },
  {
    n: "03",
    title: "What I'll need from you",
    body: "Name (how you'd like to be credited), clear reference image(s) of your character, description of the piece (pose, personality, background, number of characters), payment method preference, and any additional notes.",
  },
  {
    n: "04",
    title: "Payment",
    body: "Digital commissions: Venmo or PayPal Friends & Family. Jewelry: Cash, Venmo, or PayPal F&F. Payment is due before work begins. For jewelry, NYC local pickup only — shipping is currently unavailable.",
  },
  {
    n: "05",
    title: "Portfolio notice",
    body: "Completed commissions may be publicly listed under the Avoracity Studio portfolio unless you request otherwise.",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────
export default function CommissionsMenu() {
  const [activeTab, setActiveTab] = useState("pixel-art");

  const isHow = activeTab === "how-to-order";
  const activeCategory = CATEGORIES.find((c) => c.id === activeTab);

  return (
    <main className="cm">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=Space+Mono:wght@400;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .cm {
          min-height: 100vh;
          background: #080808;
          color: #f0ece4;
          font-family: 'Space Mono', monospace;
        }

        /* ── Header ── */
        .cm-header {
          padding: 64px 48px 0;
          border-bottom: 1px solid #141414;
        }

        .cm-eyebrow {
          font-size: 9px;
          letter-spacing: 0.35em;
          color: #5a5040;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .cm-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(48px, 7vw, 88px);
          font-weight: 300;
          line-height: 0.9;
          letter-spacing: -0.02em;
          margin-bottom: 48px;
        }

        .cm-title em { font-style: italic; color: #c9a97a; }

        /* ── Tabs ── */
        .cm-tabs {
          display: flex;
          gap: 0;
          margin-top: 0;
        }

        .cm-tab {
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #3a3a3a;
          background: none;
          border: none;
          border-bottom: 2px solid transparent;
          padding: 14px 24px 14px 0;
          cursor: pointer;
          transition: color 0.2s, border-color 0.2s;
          margin-right: 8px;
        }

        .cm-tab:hover { color: #8a7a68; }

        .cm-tab.active {
          color: #c9a97a;
          border-bottom-color: #c9a97a;
        }

        .cm-tab.how {
          margin-left: auto;
          padding-right: 0;
          color: #3a3530;
        }

        .cm-tab.how:hover { color: #6a5a48; }
        .cm-tab.how.active { color: #c9a97a; border-bottom-color: #c9a97a; }

        /* ── Body ── */
        .cm-body { padding: 0 48px 80px; }

        /* ── Category note ── */
        .cat-note {
          font-size: 9px;
          letter-spacing: 0.2em;
          color: #3a3530;
          text-transform: uppercase;
          padding: 20px 0 0;
          border-top: none;
        }

        /* ── Commission list ── */
        .cm-list {
          list-style: none;
          border-top: 1px solid #141414;
          margin-top: 16px;
        }

        .cm-group-label {
          font-size: 8px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #2a2520;
          padding: 28px 0 10px;
        }

        .cm-item { border-bottom: 1px solid #141414; }

        .cm-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 0;
          text-decoration: none;
          color: inherit;
          transition: padding-left 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .cm-link:hover { padding-left: 12px; }
        .cm-link:hover .cm-item-name { color: #f0ece4; }
        .cm-link:hover .cm-arrow { opacity: 1; transform: translateX(0); }

        .cm-item-left {
          display: flex;
          align-items: baseline;
          gap: 14px;
          flex: 1;
        }

        .cm-item-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(22px, 3vw, 36px);
          font-weight: 300;
          color: #7a6a58;
          transition: color 0.25s;
          line-height: 1;
        }

        .cm-item-sub {
          font-size: 9px;
          letter-spacing: 0.2em;
          color: #3a3a3a;
          text-transform: uppercase;
          align-self: center;
        }

        .cm-item-right {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .cm-item-price {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          color: #5a4a38;
          font-style: italic;
        }

        .cm-arrow {
          font-size: 16px;
          color: #c9a97a;
          opacity: 0;
          transform: translateX(-6px);
          transition: opacity 0.25s, transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }

        /* ── How to Order ── */
        .how-wrap {
          padding-top: 48px;
          max-width: 640px;
        }

        .how-intro {
          font-size: 11px;
          line-height: 1.9;
          color: #6a5a48;
          margin-bottom: 48px;
        }

        .how-intro a {
          color: #c9a97a;
          text-decoration: none;
        }

        .how-intro a:hover { text-decoration: underline; }

        .how-steps { display: flex; flex-direction: column; gap: 0; }

        .how-step {
          display: grid;
          grid-template-columns: 48px 1fr;
          gap: 16px;
          padding: 28px 0;
          border-bottom: 1px solid #141414;
        }

        .how-step:first-child { border-top: 1px solid #141414; }

        .step-n {
          font-size: 9px;
          letter-spacing: 0.2em;
          color: #2a2520;
          padding-top: 4px;
        }

        .step-content {}

        .step-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 300;
          color: #c9a97a;
          margin-bottom: 8px;
        }

        .step-body {
          font-size: 10px;
          line-height: 1.9;
          color: #5a5040;
        }

        @media (max-width: 600px) {
          .cm-header { padding: 40px 24px 0; }
          .cm-body { padding: 0 24px 60px; }
          .cm-tab { font-size: 8px; padding: 12px 16px 12px 0; }
        }
      `}</style>

      {/* Header */}
      <div className="cm-header">
        <p className="cm-eyebrow">Avoracity Studio</p>
        <h1 className="cm-title">
          Commission<br /><em>menu</em>
        </h1>

        {/* Tabs */}
        <nav className="cm-tabs">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              className={`cm-tab ${activeTab === c.id ? "active" : ""}`}
              onClick={() => setActiveTab(c.id)}
            >
              {c.label}
            </button>
          ))}
          <button
            className={`cm-tab how ${activeTab === "how-to-order" ? "active" : ""}`}
            onClick={() => setActiveTab("how-to-order")}
          >
            How to order
          </button>
        </nav>
      </div>

      {/* Body */}
      <div className="cm-body">

        {/* Commission list */}
        {!isHow && activeCategory && (() => {
          // Group items by label (Chibi / Character / etc.)
          const groups = activeCategory.items.reduce((acc, item) => {
            if (!acc[item.label]) acc[item.label] = [];
            acc[item.label].push(item);
            return acc;
          }, {});

          return (
            <>
              <p className="cat-note">{activeCategory.note}</p>
              <ul className="cm-list">
                {Object.entries(groups).map(([groupName, items]) => (
                  <li key={groupName}>
                    <p className="cm-group-label">{groupName}</p>
                    <ul style={{ listStyle: "none" }}>
                      {items.map((item) => (
                        <li key={item.slug} className="cm-item">
                          <Link href={`/studio/commissions/${item.slug}`} className="cm-link">
                            <div className="cm-item-left">
                              <span className="cm-item-name">{item.sub}</span>
                            </div>
                            <div className="cm-item-right">
                              <span className="cm-item-price">{item.price}</span>
                              <span className="cm-arrow">→</span>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </>
          );
        })()}

        {/* How to Order */}
        {isHow && (
          <div className="how-wrap">
            <p className="how-intro">
             
               Contact me via Instagram{" "}
              <a href="https://instagram.com/avoracity_studio" target="_blank" rel="noopener noreferrer">@avoracity_studio</a>
              , or email{" "}
              <a href="mailto:avoracity.studio@gmail.com">avoracity.studio@gmail.com</a>
              {" "}to get started.
            </p>
            <div className="how-steps">
              {HOW_TO_STEPS.map((s) => (
                <div key={s.n} className="how-step">
                  <span className="step-n">{s.n}</span>
                  <div className="step-content">
                    <p className="step-title">{s.title}</p>
                    <p className="step-body">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}