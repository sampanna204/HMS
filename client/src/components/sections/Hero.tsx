import { Button } from "@/components/ui/button";
import { CheckCircle, Heart, UserPlus } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@assets/stock_images/professional_doctor__fa4d53ae.jpg";

export function Hero() {
  return (
    <section className="relative py-12 lg:py-20 overflow-hidden bg-gradient-to-b from-green-50/50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1]">
                Your Health Journey, <br />
                <span className="text-primary relative inline-block">
                  Our Commitment!
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-green-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span>
              </h1>
              <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
                Empowering you and your family with the right care and support to stay healthy, happy, and thriving every step of the way.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full px-8 text-base h-14 shadow-lg shadow-primary/25 hover:scale-105 transition-transform">
                Explore Services
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 text-base h-14 border-2 hover:bg-gray-50 text-gray-700">
                Book Appointment
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4 text-sm font-medium text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Expert Physicians</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Lab Tests at Home</span>
              </div>
            </div>
          </motion.div>

          {/* Image/Visuals */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src={heroImage} 
                alt="Doctor smiling" 
                className="w-full h-[500px] object-cover object-center"
              />
            </div>

            {/* Floating Card 1 */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute top-10 -left-6 md:-left-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 z-20 animate-bounce-slow"
            >
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Patient Satisfaction</p>
                <p className="font-bold text-gray-900">98.5%</p>
              </div>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="absolute bottom-10 -right-6 md:-right-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 z-20 animate-bounce-slow"
              style={{ animationDelay: "1s" }}
            >
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                <UserPlus className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Expert Doctors</p>
                <p className="font-bold text-gray-900">500+</p>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-green-200/30 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
