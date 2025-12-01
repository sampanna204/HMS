import { Search, Menu, X, LogIn } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LoginModal } from "@/components/modals/LoginModal";
import { SignupModal } from "@/components/modals/SignupModal";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/98 backdrop-blur-xl border-b border-gray-100 shadow-lg transition-all duration-300">
      <div className="container mx-auto px-4 md:px-8 h-20 md:h-24 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group cursor-pointer flex-shrink-0" onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById('home');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}>
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-primary via-green-500 to-green-600 flex items-center justify-center text-white font-bold text-xl md:text-2xl group-hover:scale-110 transition-transform shadow-lg shadow-primary/40 group-hover:shadow-2xl group-hover:shadow-primary/50">
              HC
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-xl md:text-2xl text-gray-900 group-hover:text-primary transition-colors block leading-tight">Health Care</span>
            </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-8">
          <a href="#home" className="px-4 py-2 text-gray-700 hover:text-primary font-semibold text-sm transition-all duration-300 relative group" onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById('home');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}>
            Home
            <span className="absolute bottom-0 left-4 right-4 h-1 bg-primary rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </a>
          <a href="#about" className="px-4 py-2 text-gray-700 hover:text-primary font-semibold text-sm transition-all duration-300 relative group">
            About
            <span className="absolute bottom-0 left-4 right-4 h-1 bg-primary rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </a>
          <a href="#services" className="px-4 py-2 text-gray-700 hover:text-primary font-semibold text-sm transition-all duration-300 relative group">
            Services
            <span className="absolute bottom-0 left-4 right-4 h-1 bg-primary rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </a>
          <a href="#contact" className="px-4 py-2 text-gray-700 hover:text-primary font-semibold text-sm transition-all duration-300 relative group">
            Contact
            <span className="absolute bottom-0 left-4 right-4 h-1 bg-primary rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </a>
        </div>

        {/* Right Side - Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" className="rounded-full w-10 h-10 md:w-12 md:h-12 text-gray-600 hover:text-primary hover:bg-green-50/80 transition-all duration-300 flex items-center justify-center group">
            <Search className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </Button>
          <Button onClick={() => setShowLogin(true)} variant="outline" className="rounded-full px-6 md:px-8 h-10 md:h-12 border-2 border-primary text-primary hover:bg-primary/5 font-semibold transition-all duration-300 flex items-center gap-2">
            <LogIn className="w-4 h-4" />
            <span className="hidden sm:inline">Login</span>
          </Button>
          <Button onClick={() => setShowSignup(true)} className="rounded-full px-6 md:px-8 h-10 md:h-12 bg-gradient-to-r from-primary to-green-600 hover:shadow-lg hover:shadow-primary/40 text-white font-semibold transition-all duration-300">
            Sign Up
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-gray-700 hover:text-primary transition-all duration-300 flex-shrink-0"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white/98 backdrop-blur-md p-4 flex flex-col gap-2 shadow-2xl w-full animate-in slide-in-from-top-5 duration-200">
          <button onClick={(e) => { setIsMenuOpen(false); const element = document.getElementById('home'); element?.scrollIntoView({ behavior: 'smooth' }); }} className="block py-3 px-4 hover:bg-primary/5 text-gray-800 font-semibold rounded-lg transition-all duration-200 border-l-4 border-transparent hover:border-primary text-left">Home</button>
          <a href="#about" className="block py-3 px-4 hover:bg-primary/5 text-gray-800 font-semibold rounded-lg transition-all duration-200 border-l-4 border-transparent hover:border-primary" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#services" className="block py-3 px-4 hover:bg-primary/5 text-gray-800 font-semibold rounded-lg transition-all duration-200 border-l-4 border-transparent hover:border-primary" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#contact" className="block py-3 px-4 hover:bg-primary/5 text-gray-800 font-semibold rounded-lg transition-all duration-200 border-l-4 border-transparent hover:border-primary" onClick={() => setIsMenuOpen(false)}>Contact</a>
          
          <div className="pt-4 mt-2 border-t border-gray-100 flex flex-col gap-3">
            <Button onClick={() => { setShowLogin(true); setIsMenuOpen(false); }} variant="outline" className="w-full rounded-lg h-11 border-2 border-primary text-primary hover:bg-primary/5 font-semibold">
              Login
            </Button>
            <Button onClick={() => { setShowSignup(true); setIsMenuOpen(false); }} className="w-full rounded-lg h-11 bg-gradient-to-r from-primary to-green-600 text-white font-semibold">
              Sign Up
            </Button>
          </div>
        </div>
      )}

      {/* Auth Modals */}
      <LoginModal 
        isOpen={showLogin} 
        onClose={() => setShowLogin(false)}
        onSwitchToSignup={() => setShowSignup(true)}
      />
      <SignupModal 
        isOpen={showSignup} 
        onClose={() => setShowSignup(false)}
        onSwitchToLogin={() => setShowLogin(true)}
      />
    </nav>
  );
}
