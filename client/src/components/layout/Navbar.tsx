import { Search, Menu, X, User, UserCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 md:px-8 h-24 md:h-28 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group cursor-pointer flex-shrink-0" onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById('home');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}>
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-green-600 flex items-center justify-center text-white font-bold text-2xl group-hover:scale-110 transition-transform shadow-lg shadow-primary/30 group-hover:shadow-xl group-hover:shadow-primary/40">
              HC
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-2xl text-gray-900 group-hover:text-primary transition-colors block">Health Care</span>
              <span className="text-xs text-gray-500 tracking-wide">Your Health, Our Priority</span>
            </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-12">
          <a href="#home" className="text-gray-700 hover:text-primary font-semibold text-sm transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-primary after:rounded-full after:transition-all hover:after:w-full py-1" onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById('home');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}>Home</a>
          <a href="#about" className="text-gray-700 hover:text-primary font-semibold text-sm transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-primary after:rounded-full after:transition-all hover:after:w-full py-1">About Us</a>
          <a href="#services" className="text-gray-700 hover:text-primary font-semibold text-sm transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-primary after:rounded-full after:transition-all hover:after:w-full py-1">Services</a>
          <a href="#contact" className="text-gray-700 hover:text-primary font-semibold text-sm transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-primary after:rounded-full after:transition-all hover:after:w-full py-1">Contact</a>
        </div>

        {/* Right Side - Icons */}
        <div className="hidden md:flex items-center gap-6">
          <Button variant="ghost" className="rounded-full w-12 h-12 text-gray-600 hover:text-primary hover:bg-green-50/80 transition-all duration-300 flex items-center justify-center group">
            <Search className="w-7 h-7 group-hover:scale-110 transition-transform" />
          </Button>
          <Button variant="ghost" className="rounded-full w-12 h-12 text-gray-600 hover:text-primary hover:bg-green-50/80 transition-all duration-300 flex items-center justify-center group">
            <UserCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-3 text-gray-700 hover:text-primary hover:bg-gray-100 rounded-lg transition-all duration-300 flex-shrink-0"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white/98 backdrop-blur-md p-6 flex flex-col gap-3 shadow-2xl absolute w-full animate-in slide-in-from-top-5 duration-200 left-0">
          <a href="#home" className="block py-4 px-5 hover:bg-primary/5 text-gray-800 font-semibold rounded-xl transition-all duration-200 text-lg border-l-4 border-transparent hover:border-primary" onClick={(e) => {
            e.preventDefault();
            setIsMenuOpen(false);
            const element = document.getElementById('home');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}>Home</a>
          <a href="#about" className="block py-4 px-5 hover:bg-primary/5 text-gray-800 font-semibold rounded-xl transition-all duration-200 text-lg border-l-4 border-transparent hover:border-primary" onClick={() => setIsMenuOpen(false)}>About Us</a>
          <a href="#services" className="block py-4 px-5 hover:bg-primary/5 text-gray-800 font-semibold rounded-xl transition-all duration-200 text-lg border-l-4 border-transparent hover:border-primary" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#contact" className="block py-4 px-5 hover:bg-primary/5 text-gray-800 font-semibold rounded-xl transition-all duration-200 text-lg border-l-4 border-transparent hover:border-primary" onClick={() => setIsMenuOpen(false)}>Contact</a>
          
          <div className="pt-6 mt-4 border-t border-gray-200 flex gap-4 justify-center">
            <Button variant="outline" className="rounded-full w-12 h-12 flex items-center justify-center text-gray-600 hover:text-primary border-2 border-gray-200 hover:border-primary">
              <Search className="w-6 h-6" />
            </Button>
            <Button className="rounded-full flex-1 gap-3 h-12 font-semibold text-base bg-primary hover:bg-green-700">
              <UserCircle className="w-6 h-6" /> Login
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
