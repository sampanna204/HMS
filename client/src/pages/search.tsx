import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useLocation } from "wouter";
import { BookingServices } from "@/components/sections/BookingServices";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Search as SearchIcon } from "lucide-react";

export default function Search() {
  const [location] = useLocation();
  const query = new URLSearchParams(window.location.search).get('q') || '';
  const [searchQuery, setSearchQuery] = useState(query);

  const handleSearch = (e) => {
    e.preventDefault();
    // In a real app, you'd navigate or trigger a search action here
    // For now, we'll just log it.
    console.log("Searching for:", searchQuery);
    // Example navigation:
    // push(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Search Results for "{query}"
          </h1>
          <p className="text-gray-600 mb-8">
            Showing all matching healthcare services
          </p>
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="relative">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search for services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-12 text-base pl-12 pr-4 rounded-xl"
                autoFocus
              />
            </div>
          </form>
          <BookingServices searchQuery={query} />
        </div>
      </main>
      <Footer />
    </div>
  );
}