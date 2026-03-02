import Navbar from "@/ui/Navbar";
import Hero from "@/ui/Hero";
import Studio from "@/ui/Artstudio";
import Introgami from "@/ui/Introgami";
import Lividi from "@/ui/Lividi";
import Cssplayground from "@/ui/Cssplayground";
import Footer from "@/ui/Footer";

export default function Home() {
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
