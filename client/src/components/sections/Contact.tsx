import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section className="py-16 md:py-24 bg-white" id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-green-100 text-primary text-sm font-bold rounded-full mb-4">
            Contact Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-gray-600">
            Have questions about our services? Need to book an appointment? 
            Reach out to us and our team will assist you immediately.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-primary mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Call Us</h3>
              <p className="text-gray-500 text-sm mb-4">Available 24/7 for emergencies.</p>
              <a href="tel:+9779812345678" className="text-gray-900 font-bold hover:text-primary transition-colors">
                +977 9812345678
              </a>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-primary mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Email Us</h3>
              <p className="text-gray-500 text-sm mb-4">Send us your query anytime.</p>
              <a href="mailto:contact@healthcare.com" className="text-gray-900 font-bold hover:text-primary transition-colors">
                contact@healthcare.com
              </a>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-primary mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Visit Us</h3>
              <p className="text-gray-500 text-sm mb-4">Come say hello at our office.</p>
              <p className="text-gray-900 font-bold">
                Kathmandu, Nepal<br />Baneshwor - 10
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white p-6 md:p-10 rounded-3xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold mb-6">Send Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Full Name</label>
                  <Input placeholder="John Doe" className="h-12 rounded-xl bg-gray-50 border-gray-200 focus:ring-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email Address</label>
                  <Input placeholder="john@example.com" type="email" className="h-12 rounded-xl bg-gray-50 border-gray-200 focus:ring-primary" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Phone Number</label>
                  <Input placeholder="+977 98..." className="h-12 rounded-xl bg-gray-50 border-gray-200 focus:ring-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Subject</label>
                  <Input placeholder="Appointment Request" className="h-12 rounded-xl bg-gray-50 border-gray-200 focus:ring-primary" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Message</label>
                <Textarea placeholder="How can we help you?" className="min-h-[150px] rounded-xl bg-gray-50 border-gray-200 focus:ring-primary resize-none" />
              </div>

              <Button className="w-full md:w-auto px-8 h-12 rounded-xl text-base font-semibold shadow-lg shadow-primary/20">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
