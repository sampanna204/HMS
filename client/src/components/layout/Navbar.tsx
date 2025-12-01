import { Search, Menu, X, User, UserCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-green-100">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl group-hover:scale-105 transition-transform shadow-md shadow-primary/20">
              HC
            </div>
            <span className="font-bold text-xl text-gray-800 hidden sm:block tracking-tight">Health Care</span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/"><a className="text-gray-600 hover:text-primary font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">Home</a></Link>
          <Link href="#about"><a className="text-gray-600 hover:text-primary font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">About Us</a></Link>
          <Link href="#services"><a className="text-gray-600 hover:text-primary font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">Services</a></Link>
          <Link href="#contact"><a className="text-gray-600 hover:text-primary font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">Contact</a></Link>
        </div>

        {/* Right Side - Icons */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="icon" className="rounded-full text-gray-600 hover:text-primary hover:bg-green-50">
            <Search className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full text-gray-600 hover:text-primary hover:bg-green-50">
            <UserCircle className="w-6 h-6" />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white p-4 flex flex-col gap-2 shadow-lg absolute w-full animate-in slide-in-from-top-5 duration-200">
          <Link href="/"><a className="block py-3 px-4 hover:bg-green-50 text-gray-700 font-medium rounded-lg transition-colors">Home</a></Link>
          <Link href="#about"><a className="block py-3 px-4 hover:bg-green-50 text-gray-700 font-medium rounded-lg transition-colors">About Us</a></Link>
          <Link href="#services"><a className="block py-3 px-4 hover:bg-green-50 text-gray-700 font-medium rounded-lg transition-colors">Services</a></Link>
          <Link href="#contact"><a className="block py-3 px-4 hover:bg-green-50 text-gray-700 font-medium rounded-lg transition-colors">Contact</a></Link>
          
          <div className="pt-4 mt-2 border-t border-gray-100 flex gap-4 justify-center">
            <Button variant="outline" size="icon" className="rounded-full w-10 h-10">
              <Search className="w-5 h-5" />
            </Button>
            <Button className="rounded-full flex-1 gap-2">
              <User className="w-4 h-4" /> Login
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
