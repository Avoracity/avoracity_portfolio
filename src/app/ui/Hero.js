"use client";

import { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";

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
          Avoracity
        </h1>

        <h2
          className={`mt-4 text-3xl md:text-4xl font-mono text-white transition-all duration-1000 delay-300 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          Web Developer | Artist
        </h2>

        <a
          href="https://www.instagram.com/avoracity_studio/"
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-8 text-white hover:scale-110 transition-all duration-300 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          aria-label="Instagram"
        >
          <FaInstagram size={40} />
        </a>
      </div>
    </div>
  );
}