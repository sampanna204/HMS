import { useState } from "react";
import doctorVideoImg from "@assets/generated_images/doctor_telemedicine_video_consultation.png";
import physicianImg from "@assets/generated_images/digital_health_booking_app_interface.png";
import nurseHomeImg from "@assets/generated_images/nurse_home_healthcare_service.png";
import bloodImg from "@assets/stock_images/scientist_looking_at_c72e0122.jpg";
import medicineImg from "@assets/stock_images/pharmacist_deliverin_f269f62b.jpg";
import ambulanceImg from "@assets/generated_images/ambulance_emergency_medical_service.png";
import { Clock, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { VideoConsultationBooking } from "@/components/modals/VideoConsultationBooking";
import { PhysicianBooking } from "@/components/modals/PhysicianBooking";
import { NurseBooking } from "@/components/modals/NurseBooking";
import { LabTestBooking } from "@/components/modals/LabTestBooking";
import { MedicineDeliveryBooking } from "@/components/modals/MedicineDeliveryBooking";
import { AmbulanceBooking } from "@/components/modals/AmbulanceBooking";
import { useAuth } from "@/App";
import { useToast } from "@/hooks/use-toast";
import { AuthModal } from "@/components/modals/AuthModal";

const bookingServices = [
  {
    id: 1,
    title: "Video Consultation",
    description: "Consult with experienced doctors via video call from your home",
    image: doctorVideoImg,
    price: "NPR 500",
    time: "15-30 mins",
    rating: 4.9,
    reviews: 2450
  },
  {
    id: 2,
    title: "Physician",
    description: "Professional doctor visit at your location for general check-up",
    image: physicianImg,
    price: "NPR 1,200",
    time: "30-45 mins",
    rating: 4.8,
    reviews: 1560
  },
  {
    id: 3,
    title: "Nurse",
    description: "Professional nurses visit your home for health check-ups and vitals",
    image: nurseHomeImg,
    price: "NPR 800",
    time: "30-45 mins",
    rating: 4.8,
    reviews: 1890
  },
  {
    id: 4,
    title: "Laboratory Service",
    description: "Sample collection and blood tests conducted at your doorstep",
    image: bloodImg,
    price: "NPR 300+",
    time: "10 mins",
    rating: 4.9,
    reviews: 3200
  },
  {
    id: 5,
    title: "Medicine Delivery",
    description: "Get prescribed medicines delivered to your home within 2 hours",
    image: medicineImg,
    price: "FREE",
    time: "1-2 hrs",
    rating: 4.7,
    reviews: 5600
  },
  {
    id: 6,
    title: "Ambulance",
    description: "Quick emergency medical transport to hospital",
    image: ambulanceImg,
    price: "NPR 2,000",
    time: "5-10 mins",
    rating: 4.9,
    reviews: 890
  }
];

interface BookingServicesProps {
  searchQuery?: string;
}

export function BookingServices({ searchQuery = "" }: BookingServicesProps) {
  const [activeModal, setActiveModal] = useState<number | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { isAuthenticated } = useAuth();
  const { toast } = useToast();

  const openBooking = (serviceId: number) => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to book this service",
        variant: "destructive"
      });
      setShowAuthModal(true);
      return;
    }
    setActiveModal(serviceId);
  };

  const closeBooking = () => {
    setActiveModal(null);
  };

  const filteredServices = searchQuery
    ? bookingServices.filter(
        (service) =>
          service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          service.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : bookingServices;

  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50/30" id="services">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Healthcare Services at Your Doorstep</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Book professional healthcare services online and enjoy quality medical care from the comfort of your home
          </p>
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No services found matching "{searchQuery}"</p>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-2xl border border-gray-100 bg-white overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              onClick={() => openBooking(service.id)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.description}</p>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                  <span className="text-xs text-gray-500 ml-2">
                    {service.rating} ({service.reviews})
                  </span>
                </div>

                {/* Details */}
                <div className="flex items-center gap-3 mb-4 text-sm text-gray-600">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>{service.time}</span>
                </div>

                {/* Price and Button */}
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">{service.price}</span>
                  <Button className="rounded-lg px-4 py-2 h-auto text-sm font-semibold bg-primary hover:bg-green-700">
                    Book Now
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* How it Works */}
        <div className="mt-20 bg-gradient-to-r from-primary/10 to-green-100/30 rounded-3xl p-12 md:p-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">How it Works</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Choose Service", desc: "Browse and select the healthcare service you need" },
              { step: 2, title: "Pick Time Slot", desc: "Choose a convenient date and time for the service" },
              { step: 3, title: "Book & Pay", desc: "Secure payment and instant confirmation" },
              { step: 4, title: "Receive Service", desc: "Professional healthcare at your doorstep" }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Modals */}
      <VideoConsultationBooking isOpen={activeModal === 1} onClose={closeBooking} />
      <PhysicianBooking isOpen={activeModal === 2} onClose={closeBooking} />
      <NurseBooking isOpen={activeModal === 3} onClose={closeBooking} />
      <LabTestBooking isOpen={activeModal === 4} onClose={closeBooking} />
      <MedicineDeliveryBooking isOpen={activeModal === 5} onClose={closeBooking} />
      <AmbulanceBooking isOpen={activeModal === 6} onClose={closeBooking} />
      
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        initialMode="login"
      />
    </section>
  );
}
