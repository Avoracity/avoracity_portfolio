"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function MagicCursor({
  modalRef,
  starDuration = 150,
  minTime = 250,
  minDistance = 75,
  glowDuration = 75,
  maxGlowSpacing = 10,
}) {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!modalRef?.current) return;

    const modal = modalRef.current;

    const enter = () => setActive(true);
    const leave = () => setActive(false);

    modal.addEventListener("mouseenter", enter);
    modal.addEventListener("mouseleave", leave);

    return () => {
      modal.removeEventListener("mouseenter", enter);
      modal.removeEventListener("mouseleave", leave);
    };
  }, [modalRef]);

  useEffect(() => {
    const container = containerRef.current;
    const cursor = cursorRef.current;

    let last = {
      starTimestamp: Date.now(),
      starPosition: null,
      mousePosition: null,
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

      setTimeout(() => {
        if (container.contains(star)) container.removeChild(star);
      }, config.starDuration);
    };

    const createGlow = (lastPos, current) => {
      const dist = distance(lastPos, current);

      const quantity = Math.max(
        Math.ceil(dist / config.maxGlowSpacing),
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

        setTimeout(() => {
          if (container.contains(glow)) container.removeChild(glow);
        }, config.glowDuration);
      }
    };

    const handleMove = (e) => {
      if (!active) {
        cursor.style.opacity = "0";
        return;
      }

      const pos = { x: e.clientX, y: e.clientY };

      cursor.style.opacity = "1";
      cursor.style.left = `${pos.x}px`;
      cursor.style.top = `${pos.y}px`;

      // initialize first mouse position to prevent (0,0) glow
      if (!last.mousePosition) {
        last.mousePosition = pos;
        last.starPosition = pos;
        return;
      }

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

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, [
    active,
    starDuration,
    minTime,
    minDistance,
    glowDuration,
    maxGlowSpacing,
  ]);

  return (
    <>
      <div
        ref={containerRef}
        className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
      />

      <div
        ref={cursorRef}
        className="fixed h-8 pointer-events-none z-100 opacity-0 transition-opacity"
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