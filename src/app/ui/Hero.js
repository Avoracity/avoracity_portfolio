import Link from "next/link";

export default function Hero() {
  return (
    <div class="bg-black">
    <div
      id="hero"
      className="
        relative h-screen
        bg-[url('/hero-webpage.png')]
        bg-cover bg-center bg-no-repeat
        mask-[linear-gradient(to_bottom,black_80%,transparent_100%)]
      "
    >
    </div>

    </div>

  );
}