"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function MagicCursor({
  starDuration = 150,
  minTime = 250,
  minDistance = 75,
  glowDuration = 75,
  maxGlowSpacing = 10,
}) {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const cursor = cursorRef.current;

    const origin = { x: 0, y: 0 };

    let last = {
      starTimestamp: Date.now(),
      starPosition: origin,
      mousePosition: origin,
    };

    const config = {
      starDuration,
      minTime,
      minDistance,
      glowDuration,
      maxGlowSpacing,
    };

    const distance = (a, b) =>
      Math.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2);

    const createStar = (pos) => {
      const star = document.createElement("span");
      star.innerHTML = "✦";
      star.className = "absolute pointer-events-none text-white";

      star.style.left = `${pos.x}px`;
      star.style.top = `${pos.y}px`;
      star.style.animation = `fall ${config.starDuration * 10}ms ease forwards`;

      container.appendChild(star);
      setTimeout(() => container.removeChild(star), config.starDuration);
    };

    const createGlow = (lastPos, current) => {
      const dist = distance(lastPos, current);
      const quantity = Math.max(
        Math.floor(dist / config.maxGlowSpacing),
        1
      );

      const dx = (current.x - lastPos.x) / quantity;
      const dy = (current.y - lastPos.y) / quantity;

      for (let i = 0; i < quantity; i++) {
        const glow = document.createElement("div");
        glow.className =
          "absolute pointer-events-none w-0 h-0 shadow-[0_0_1.2rem_0.6rem_white]";
        glow.style.left = `${lastPos.x + dx * i}px`;
        glow.style.top = `${lastPos.y + dy * i}px`;

        container.appendChild(glow);
        setTimeout(() => container.removeChild(glow), config.glowDuration);
      }
    };

    const handleMove = (e) => {
      const pos = { x: e.clientX, y: e.clientY };

      cursor.style.left = `${pos.x}px`;
      cursor.style.top = `${pos.y}px`;

      const now = Date.now();
      const movedFar =
        distance(last.starPosition, pos) >= config.minDistance;
      const waitedLong =
        now - last.starTimestamp > config.minTime;

      if (movedFar || waitedLong) {
        createStar(pos);
        last.starTimestamp = now;
        last.starPosition = pos;
      }

      createGlow(last.mousePosition, pos);
      last.mousePosition = pos;
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [starDuration, minTime, minDistance, glowDuration, maxGlowSpacing]);

  return (
    <>
      <div
        ref={containerRef}
        className="fixed inset-0 pointer-events-none z-50"
      />

      <div
        ref={cursorRef}
        className="fixed h-8 pointer-events-none z-100"
      >
        <Image
          src="/arrowcursor.png"
          alt="cursor"
          width={32}
          height={32}
        />
      </div>
    </>
  );
}