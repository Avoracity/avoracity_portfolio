"use client";
import Navbar from "@/ui/Navbar";
import Hero from "@/ui/Hero";
import Studio from "@/ui/Artstudio";
import Introgami from "@/ui/Introgami";
import Lividi from "@/ui/Lividi";
import Cssplayground from "@/app/ui/playground/Cssplayground";
import Footer from "@/ui/Footer";
import { useEffect } from "react";

export default function Home() {

  // Scroll to top on page reload
 useEffect(() => {
  if (window.location.hash) {
    history.replaceState(null, "", window.location.pathname);
  }
  window.scrollTo(0, 0);
}, []);

  return (
    <div className="">
      <main className="">
        <Navbar />
        <Hero />
        <Studio />
        <Introgami />
        <Lividi />
        <Cssplayground />
        <Footer />
      </main>
    </div>
  );
}
