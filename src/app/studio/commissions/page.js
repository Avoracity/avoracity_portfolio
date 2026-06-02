"use client";
import Link from "next/link";

const COMMISSIONS = [
  { slug: "chibi-full-body",    label: "Chibi",    sub: "Full Body",  tag: "CHBI·FB" },
  { slug: "chibi-half-body",    label: "Chibi",    sub: "Half Body",  tag: "CHBI·HB" },
  { slug: "chibi-dynamic",      label: "Chibi",    sub: "Dynamic",    tag: "CHBI·DY" },
  { slug: "classic-full-body",  label: "Classic",  sub: "Full Body",  tag: "CLSC·FB" },
  { slug: "classic-half-body",  label: "Classic",  sub: "Half Body",  tag: "CLSC·HB" },
  { slug: "classic-dynamic",    label: "Classic",  sub: "Dynamic",    tag: "CLSC·DY" },
  { slug: "glasses-jewelry",    label: "Add-ons",  sub: "Glasses & Jewelry", tag: "ADD·ON" },
];

export default function CommissionsMenu() {
  return (
    <main className="commissions-menu">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=Space+Mono:wght@400;700&display=swap');

        .commissions-menu {
          min-height: 100vh;
          background: #080808;
          color: #f0ece4;
          font-family: 'Space Mono', monospace;
          padding: 80px 40px 60px;
          position: relative;
          overflow: hidden;
        }

        .commissions-menu::before {
          content: '';
          position: fixed;
          inset: 0;
          background: radial-gradient(ellipse 60% 50% at 80% 20%, rgba(180,140,100,0.07) 0%, transparent 70%),
                      radial-gradient(ellipse 40% 60% at 10% 80%, rgba(100,80,140,0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .menu-eyebrow {
          font-size: 10px;
          letter-spacing: 0.3em;
          color: #7a6a56;
          margin-bottom: 16px;
          text-transform: uppercase;
        }

        .menu-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(52px, 8vw, 96px);
          font-weight: 300;
          line-height: 0.9;
          letter-spacing: -0.02em;
          margin-bottom: 80px;
          color: #f0ece4;
        }

        .menu-title em {
          font-style: italic;
          color: #c9a97a;
        }

        .commission-list {
          list-style: none;
          padding: 0;
          margin: 0;
          border-top: 1px solid #1e1e1e;
        }

        .commission-item {
          border-bottom: 1px solid #1e1e1e;
          position: relative;
        }

        .commission-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 24px 0;
          text-decoration: none;
          color: inherit;
          gap: 20px;
          transition: padding-left 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .commission-link:hover {
          padding-left: 16px;
        }

        .commission-link:hover .item-label {
          color: #f0ece4;
        }

        .commission-link:hover .item-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .commission-link:hover .item-tag {
          color: #c9a97a;
        }

        .item-left {
          display: flex;
          align-items: baseline;
          gap: 16px;
          flex: 1;
        }

        .item-tag {
          font-size: 9px;
          letter-spacing: 0.2em;
          color: #3a3a3a;
          transition: color 0.3s;
          min-width: 60px;
        }

        .item-label {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 300;
          color: #9a8a78;
          transition: color 0.3s;
          line-height: 1;
        }

        .item-sub {
          font-size: 10px;
          letter-spacing: 0.2em;
          color: #4a4a4a;
          text-transform: uppercase;
          align-self: center;
        }

        .item-arrow {
          font-size: 20px;
          color: #c9a97a;
          opacity: 0;
          transform: translateX(-8px);
          transition: opacity 0.3s, transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }
      `}</style>

      <p className="menu-eyebrow">Avoracity Studio · Commission Types</p>
      <h1 className="menu-title">Select your<br /><em>commission</em></h1>

      <ul className="commission-list">
        {COMMISSIONS.map((c) => (
          <li key={c.slug} className="commission-item">
            <Link href={`/studio/commissions/${c.slug}`} className="commission-link">
              <div className="item-left">
                <span className="item-tag">{c.tag}</span>
                <span className="item-label">{c.label}</span>
                <span className="item-sub">{c.sub}</span>
              </div>
              <span className="item-arrow">→</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
