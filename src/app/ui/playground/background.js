export default function Background() {
  return (
    <>
      {/* GOLD RADIAL BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(rgb(249,181,51),rgb(215,147,23))]">
        <div className="absolute inset-0 opacity-10
          bg-[url('https://assets.codepen.io/1468070/Star+Pattern+3.svg')]
          bg-size-[10%]
          animate-[pan_180s_linear_infinite]" />

        <div className="absolute inset-0
          bg-[radial-gradient(circle,transparent_75%,rgb(215,147,23))]
          opacity-90" />
      </div>
    </>
  );
}