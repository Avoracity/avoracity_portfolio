export default function Navbar() {
  return (
    <nav className="font-mono fixed top-0 left-0 w-full p-4 text-white bg-black/50 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-24 h-12 font-bold text-xl"></div>

        <ul className="flex gap-6">
          <li><a href="#hero">Home</a></li>
          <li><a href="#studio">Studio</a></li>
          <li><a href="#introgami">Introgami</a></li>
          <li><a href="#lividi">Lividi</a></li>
          <li><a href="#cssplayground">CSS Playground</a></li>
        </ul>
      </div>
    </nav>
  );
}