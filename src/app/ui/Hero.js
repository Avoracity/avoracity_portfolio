export default function Hero() {
  return (
    <div className="bg-black relative h-screen">
      {/* Background with mask */}
      <div
        id="hero"
        className="
          absolute inset-0
          bg-[url('/hero-webpage.png')]
          bg-cover bg-center bg-no-repeat
          mask-[linear-gradient(to_bottom,black_80%,transparent_100%)]
          z-0
        "
      ></div>

      {/* Centered text overlay */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
        {/* Main Heading */}
        <h1 className="text-6xl md:text-7xl font-bold text-white opacity-0 animate-[fade-up_1.5s_ease-out_forwards]">
          Avoracity Portfolio
        </h1>

        {/* Subheading */}
        <h2 className="mt-4 text-3xl md:text-4xl font-mono text-white opacity-0 animate-[fade-up_1.5s_ease-out_forwards_0.5s]">
          Web Developer | Artist
        </h2>
      </div>
    </div>
  );
}