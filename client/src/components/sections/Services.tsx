import doctorImg from "@assets/stock_images/doctor_checking_pati_937d8093.jpg";
import nurseImg from "@assets/stock_images/nurse_caring_for_eld_56f5a20e.jpg";
import medicineImg from "@assets/stock_images/pharmacist_deliverin_f269f62b.jpg";
import bloodImg from "@assets/stock_images/scientist_looking_at_c72e0122.jpg";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Physician",
    description: "Professional doctors available for home visits to treat you and your family.",
    image: doctorImg,
    tags: []
  },
  {
    id: 2,
    title: "Nurse",
    description: "Expert nursing care at home.",
    image: nurseImg,
    tags: ["Morning", "Day", "Night"]
  },
  {
    id: 3,
    title: "Medicine at Home",
    description: "Get your prescribed medicines delivered right to your doorstep quickly.",
    image: medicineImg,
    tags: []
  },
  {
    id: 4,
    title: "Blood Test",
    description: "Convenient home sample collection for all types of blood tests.",
    image: bloodImg,
    tags: []
  }
];

export function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We bring comprehensive medical care directly to your home for your convenience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-2xl border border-gray-100 bg-white overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <h3 className="absolute bottom-4 left-4 text-white font-bold text-xl z-20">{service.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.description}</p>
                
                {service.tags.length > 0 && (
                  <div className="flex gap-2 mb-4">
                    {service.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-green-50 text-green-700 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                <button className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
