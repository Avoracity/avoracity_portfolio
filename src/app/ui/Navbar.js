// components/ui/Navbar.js
import Link from "next/link";

export default function Navbar() {
  return (
<nav className="fixed top-0 left-0 w-full p-4 bg-white/10 z-50">      <div className=" container mx-auto flex justify-between items-center">
 <Link href="/" className="font-bold text-xl">Logo</Link>
        <ul className="flex gap-6">
          <li><Link href="#studio" scroll={false}>Studio</Link></li>
          <li><Link href="#introgami" scroll={false}>Introgami</Link></li>
          <li><Link href="#lividi" scroll={false}>Lividi</Link></li>
          <li><Link href="#cssplayground" scroll={false}>CSS Playground</Link></li>

        </ul>
            
       </div>
    </nav>
  );
}
