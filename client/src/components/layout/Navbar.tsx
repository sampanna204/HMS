import { Search, Menu, X, User, LogOut } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AuthModal } from "@/components/modals/AuthModal";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/App";
import { useLocation } from "wouter";
import logo from "@/assets/sanjivani_logo.png";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");
  const [searchQuery, setSearchQuery] = useState("");
  const { isAuthenticated, user, logout } = useAuth();
  const [, setLocation] = useLocation();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setLocation(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a 
            href="/" 
            className="flex items-center gap-3 group cursor-pointer flex-shrink-0"
            onClick={(e) => {
              e.preventDefault();
              setLocation("/");
            }}
          >
            <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <img 
                src={logo} 
                alt="Sanjivani Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <span className="block font-bold text-sm md:text-lg lg:text-xl text-primary group-hover:text-green-700 transition-colors duration-300">
                Sanjivani
              </span>
              <span className="hidden md:block text-xs text-gray-600 font-medium">
                Health Care Service
              </span>
            </div>
          </a>

          {/* Search Bar - Desktop */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Search services (doctor, nurse, medicine...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-11 pl-11 pr-4 rounded-full border-2 border-gray-200 focus:border-primary transition-colors"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </form>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 mx-6">
            <a href="#services" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Services
            </a>
            <a href="#about" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          {/* Right Side - Auth/User */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-3">
              {isAuthenticated ? (
                <>
                  <div className="relative group">
                    <Button variant="outline" className="rounded-full h-10 px-4 border-2 border-primary">
                      <User className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">{user?.name || "User"}</span>
                    </Button>
                    <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                      <div className="p-2">
                        <button
                          onClick={logout}
                          className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <LogOut className="w-4 h-4" />
                          Logout
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <Button
                    onClick={() => {
                      setAuthMode("login");
                      setShowAuth(true);
                    }}
                    className="rounded-full h-10 px-6 bg-gradient-to-r from-primary to-green-600 hover:shadow-lg font-semibold flex items-center gap-2"
                  >
                    <User className="w-4 h-4" />
                    Account
                  </Button>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-700 hover:text-primary transition-all flex-shrink-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg transition-all duration-300 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="p-4 space-y-3">
            <a
              href="#services"
              className="block py-3 px-4 hover:bg-gray-50 text-gray-800 font-medium rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#about"
              className="block py-3 px-4 hover:bg-gray-50 text-gray-800 font-medium rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="block py-3 px-4 hover:bg-gray-50 text-gray-800 font-medium rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>

            {isAuthenticated ? (
              <div className="pt-4 mt-2 border-t border-gray-200 space-y-2">
                <div className="px-4 py-2 text-sm text-gray-600">
                  Signed in as <span className="font-semibold">{user?.email}</span>
                </div>
                <Button
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                  variant="outline"
                  className="w-full rounded-lg"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </div>
            ) : (
              <div className="pt-4 mt-2 border-t border-gray-200">
                <Button
                  onClick={() => {
                    setAuthMode("login");
                    setShowAuth(true);
                    setIsMenuOpen(false);
                  }}
                  className="w-full rounded-lg bg-gradient-to-r from-primary to-green-600"
                >
                  <User className="w-4 h-4 mr-2" />
                  Account
                </Button>
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Mobile Search */}
      <form onSubmit={handleSearch} className="md:hidden pb-4">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-10 pl-10 pr-4 rounded-full border-2 border-gray-200 focus:border-primary"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        </div>
      </form>

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuth}
        onClose={() => setShowAuth(false)}
        initialMode={authMode}
      />
    </nav>
  );
}