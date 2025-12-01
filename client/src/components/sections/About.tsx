import { CheckCircle2 } from "lucide-react";
import aboutImage from "@assets/stock_images/medical_team_profess_653ede4a.jpg"; // Placeholder - will need to be updated with actual path after download

export function About() {
  return (
    <section className="py-16 md:py-24 bg-gray-50" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative order-2 md:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={aboutImage} 
                alt="Medical Team" 
                className="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl max-w-[200px] hidden md:block">
              <p className="text-4xl font-bold text-primary mb-1">15+</p>
              <p className="text-sm text-gray-600 font-medium">Years of Excellence in Healthcare</p>
            </div>
          </div>

          <div className="order-1 md:order-2 space-y-6">
            <div className="inline-block px-3 py-1 bg-green-100 text-primary text-sm font-bold rounded-full">
              About Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Dedicated to Your Health, <br/>
              <span className="text-primary">Committed to Care.</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At Health Care, we believe that quality medical assistance should be accessible, reliable, and compassionate. Our team of experienced professionals is dedicated to bringing hospital-grade care directly to your comfort zone.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1 shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Certified Professionals</h4>
                  <p className="text-sm text-gray-500">All our doctors and nurses are licensed and highly trained.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1 shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Advanced Technology</h4>
                  <p className="text-sm text-gray-500">We use modern equipment for accurate diagnostics at home.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1 shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Affordable Plans</h4>
                  <p className="text-sm text-gray-500">Quality healthcare shouldn't break the bank.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
