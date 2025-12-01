import { Button } from "@/components/ui/button";

export function PromoBanner() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-[#dc2626] rounded-[2rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl shadow-red-900/20">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
             <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid)" />
             </svg>
          </div>

          <div className="relative z-10 max-w-2xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full mb-6">
              10% OFF
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Men's Health <br/> Package</h2>
            
            <p className="text-red-100 text-sm md:text-base mb-8 max-w-lg">
              CBC, ESR, Fasting Blood Sugar, Lipid Profile, LFT (AST, ALT, BILIRUBIN D)
            </p>
            
            <div className="mb-8">
              <p className="text-red-200 text-xs uppercase tracking-wider mb-1">Starting From</p>
              <p className="text-4xl font-bold">NPR 7620 /-</p>
            </div>
            
            <Button className="bg-white text-red-600 hover:bg-red-50 rounded-full px-8 h-12 font-bold border-none">
              Book Now
            </Button>
          </div>
          
          {/* Decorative circles */}
          <div className="absolute -right-20 -bottom-40 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute right-40 top-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        </div>
      </div>
    </section>
  );
}
