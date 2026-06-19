export default function Navbar() {
  return (
    <nav className="font-mono fixed w-full p-4 text-white bg-black/50 z-50">
      <div className="container flex justify-center items-center">
        <div className="w-24 h-12 font-bold text-xl"></div>

        <ul className="flex gap-16">
          <li><a href="#studio">Commission Me</a></li>
          <li><a href="#introgami">Introgami</a></li>
          <li><a href="#lividi">Lividi</a></li>
          <li><a href="#cssplayground">CSS Playground</a></li>
        </ul>
      </div>
    </nav>
  );
}