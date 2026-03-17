"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setShow(true);
    });
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className="relative h-screen bg-black">
      {/* Background */}
      <div
        className="
    absolute inset-0
    bg-[url('/hero-webpage.png')]
    bg-cover bg-center bg-no-repeat
    mask-[linear-gradient(to_bottom,black_80%,transparent_100%)]
    z-0
  "
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Text */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1
          className={`text-6xl md:text-7xl font-bold text-white transition-all duration-1000 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          Avoracity Portfolio
        </h1>

        <h2
          className={`mt-4 text-3xl md:text-4xl font-mono text-white transition-all duration-1000 delay-300 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          Web Developer | Artist
        </h2>
      </div>
    </div>
  );
}
