import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { BookingServices } from "@/components/sections/BookingServices";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <BookingServices />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
