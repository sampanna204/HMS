
import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useLocation } from "wouter";
import { BookingServices } from "@/components/sections/BookingServices";

export default function Search() {
  const [location] = useLocation();
  const query = new URLSearchParams(window.location.search).get('q') || '';

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
          <BookingServices searchQuery={query} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
