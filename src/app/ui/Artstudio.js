import Link from "next/link";

export default function Artstudio() {
  return (
    <div className="bg-linear-to-b from-black to-[white]">
      <div
        id="studio"
        className="
          relative h-screen
          bg-[url('/avoracity-studio-section.png')]
          bg-cover bg-center bg-no-repeat
          mask-[linear-gradient(to_bottom,transparent_0%,black_20%,black_80%,transparent_100%)]
        "
      >
      </div>
    </div>
  );
}