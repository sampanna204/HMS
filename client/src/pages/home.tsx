import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { PromoBanner } from "@/components/sections/PromoBanner";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <PromoBanner />
      </main>
      <Footer />
    </div>
  );
}
