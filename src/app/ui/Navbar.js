// components/ui/Navbar.js


export default function Navbar() {
  return (
<nav className="font-mono fixed top-0 left-0 w-full p-4 text-white bg-black/50 z-50">      <div className=" container mx-auto flex justify-between items-center">
 <div href="#hero" className="bg-no-repeat bg-center w-24 h-12 bg-contain font-bold text-xl"></div>
        <ul className="flex gap-6">
          <li><a href="#studio" scroll={false}>Studio</a></li>
          <li><a href="#introgami" scroll={false}>Introgami</a></li>
          <li><a href="#lividi" scroll={false}>Lividi</a></li>
          <li><a href="#cssplayground" scroll={false}>CSS Playground</a></li>

        </ul>
            
       </div>
    </nav>
  );
}
