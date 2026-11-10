import Link from "next/link";
import Image from "next/image";

export default function Artstudio() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,300&family=Space+Mono&display=swap');

        .commissions-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 14px 28px;
          border: 1px solid rgba(201, 169, 122, 0.5);
          color: #c9a97a;
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          text-decoration: none;
          background: rgba(8, 8, 8, 0.4);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          transition: background 0.3s, border-color 0.3s, color 0.3s, gap 0.3s;
          animation: fadeUp 1s cubic-bezier(0.22, 1, 0.36, 1) 0.4s both;
        }

        .commissions-btn:hover {
          background: rgba(201, 169, 122, 0.12);
          border-color: #c9a97a;
          gap: 18px;
        }

        .commissions-btn .btn-arrow {
          font-size: 14px;
          transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .commissions-btn:hover .btn-arrow {
          transform: translateX(4px);
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div id="studio" className="relative w-full">
        <Image
          src="/artportbg.png"
          alt=""
          width={1600}
          height={900}
          sizes="100vw"
          className="block w-full h-auto"
        />

        <Link
          href="/studio/commissions"
          className="commissions-btn absolute bottom-20 left-1/2 -translate-x-1/2"
        >
          <span>View commissions</span>
          <span className="btn-arrow">→</span>
        </Link>
      </div>
    </>
  );
}