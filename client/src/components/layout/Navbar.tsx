import { Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-green-100">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl group-hover:scale-105 transition-transform">
              HC
            </div>
            <span className="font-bold text-xl text-gray-800 hidden sm:block">Health Care</span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/"><a className="text-gray-600 hover:text-primary font-medium transition-colors">Home</a></Link>
          <Link href="/services"><a className="text-gray-600 hover:text-primary font-medium transition-colors">Services</a></Link>
          <Link href="/doctors"><a className="text-gray-600 hover:text-primary font-medium transition-colors">Doctors</a></Link>
          <Link href="/contact"><a className="text-gray-600 hover:text-primary font-medium transition-colors">Contact</a></Link>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input 
              placeholder="Search services..." 
              className="pl-10 w-64 bg-gray-50 border-gray-200 focus-visible:ring-primary rounded-full" 
            />
          </div>
          <Button className="rounded-full px-6 font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all">
            Login
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white p-4 flex flex-col gap-4 shadow-lg absolute w-full">
          <Link href="/"><a className="block py-2 px-4 hover:bg-green-50 text-gray-600 font-medium rounded-lg">Home</a></Link>
          <Link href="/services"><a className="block py-2 px-4 hover:bg-green-50 text-gray-600 font-medium rounded-lg">Services</a></Link>
          <Link href="/doctors"><a className="block py-2 px-4 hover:bg-green-50 text-gray-600 font-medium rounded-lg">Doctors</a></Link>
          <Link href="/contact"><a className="block py-2 px-4 hover:bg-green-50 text-gray-600 font-medium rounded-lg">Contact</a></Link>
          <div className="pt-4 border-t border-gray-100">
            <Button className="w-full rounded-full">Login</Button>
          </div>
        </div>
      )}
    </nav>
  );
}
