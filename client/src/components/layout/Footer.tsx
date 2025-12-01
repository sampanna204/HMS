import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, CreditCard } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-[#064e3b] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
                HS
              </div>
              <span className="font-bold text-xl">Hamro Health</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering you and your family with the right care and support to stay healthy, happy, and thriving every step of the way.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><Link href="/"><a className="hover:text-primary transition-colors">Home</a></Link></li>
              <li><Link href="/about"><a className="hover:text-primary transition-colors">About Us</a></Link></li>
              <li><Link href="/services"><a className="hover:text-primary transition-colors">Services</a></Link></li>
              <li><Link href="/doctors"><a className="hover:text-primary transition-colors">Doctors</a></Link></li>
              <li><Link href="/blog"><a className="hover:text-primary transition-colors">Health Blog</a></Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><Link href="/privacy"><a className="hover:text-primary transition-colors">Privacy Policy</a></Link></li>
              <li><Link href="/terms"><a className="hover:text-primary transition-colors">Terms of Service</a></Link></li>
              <li><Link href="/careers"><a className="hover:text-primary transition-colors">Careers</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-primary transition-colors">Contact Us</a></Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Kathmandu, Nepal<br />Baneshwor - 10</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+977 9812345678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>contact@hamrohealth.com</span>
              </li>
            </ul>
            
            <div className="mt-8">
              <h4 className="font-semibold text-sm mb-3">We Accept</h4>
              <div className="flex gap-2">
                <div className="bg-white text-black text-xs font-bold px-2 py-1 rounded">VISA</div>
                <div className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">eSewa</div>
                <div className="bg-purple-700 text-white text-xs font-bold px-2 py-1 rounded">Khalti</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-xs text-gray-400">
          <p>&copy; 2025 Hamro Health. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
