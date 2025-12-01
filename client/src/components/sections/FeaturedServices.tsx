import { Star } from "lucide-react";
import doctorImg from "@assets/stock_images/professional_doctor__fa4d53ae.jpg";
import nurseImg from "@assets/stock_images/nurse_caring_for_eld_56f5a20e.jpg";

const featured = [
  {
    id: 1,
    title: "Senior Family Physician",
    provider: "Hamro Health",
    price: "1999",
    rating: 5,
    image: doctorImg,
    type: "General Physician"
  },
  {
    id: 2,
    title: "Home Nursing Service",
    provider: "Hamro Health",
    price: "1500",
    rating: 4.5,
    image: nurseImg,
    type: "Nursing Care"
  }
];

export function FeaturedServices() {
  return (
    <section className="py-12 bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Featured Services</h2>
            <p className="text-gray-600 text-sm">Take a closer look at our top services that make healthcare accessible.</p>
          </div>
          <a href="#" className="text-primary font-medium text-sm hover:underline hidden sm:block">View All</a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {featured.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex gap-4 hover:shadow-md transition-shadow">
              <div className="w-32 h-32 shrink-0 rounded-xl overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col justify-between py-1 flex-1">
                <div>
                  <p className="text-xs text-primary font-medium mb-1">{item.type}</p>
                  <h3 className="font-bold text-gray-900 text-lg leading-tight mb-1">{item.title}</h3>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-3 h-3 ${i < Math.floor(item.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                    <span className="text-xs text-gray-400 ml-1">{item.provider}</span>
                  </div>
                </div>
                <div className="flex items-end justify-between">
                  <p className="text-primary font-bold">NPR {item.price}/-</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
