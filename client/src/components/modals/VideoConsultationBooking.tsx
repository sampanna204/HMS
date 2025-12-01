import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

interface VideoConsultationBookingProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VideoConsultationBooking({ isOpen, onClose }: VideoConsultationBookingProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: ""
  });

  const timeSlots: { time: string; price: number }[] = [
    { time: "9:00 AM", price: 500 },
    { time: "10:00 AM", price: 500 },
    { time: "11:00 AM", price: 500 },
    { time: "2:00 PM", price: 600 },
    { time: "3:00 PM", price: 600 },
    { time: "4:00 PM", price: 700 },
    { time: "5:00 PM", price: 800 }
  ];

  const selectedTimeSlot = timeSlots.find(slot => slot.time === formData.time);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 animate-in slide-in-from-bottom-5 duration-300 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold text-gray-900 mb-2">Book Video Consultation</h2>
        <p className="text-gray-600 text-sm mb-6">Consult with doctors via video call</p>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
            <Input
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="h-11 rounded-lg bg-gray-50 border-gray-200"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
            <Input
              placeholder="+977 98XXXXXXXX"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="h-11 rounded-lg bg-gray-50 border-gray-200"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Select Date</label>
            <Input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="h-11 rounded-lg bg-gray-50 border-gray-200"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Select Time Slot</label>
            <select
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              className="w-full h-11 rounded-lg bg-gray-50 border border-gray-200 px-4 font-medium"
            >
              <option value="">Choose a time slot</option>
              {timeSlots.map((slot) => (
                <option key={slot.time} value={slot.time}>
                  {slot.time} - NPR {slot.price}
                </option>
              ))}
            </select>
          </div>

          {selectedTimeSlot && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-sm text-gray-600">Price for selected slot:</p>
              <p className="text-2xl font-bold text-primary">NPR {selectedTimeSlot.price}</p>
            </div>
          )}

          <Button className="w-full h-11 rounded-lg font-semibold bg-gradient-to-r from-primary to-green-600 hover:shadow-lg">
            Confirm Booking
          </Button>
        </form>
      </div>
    </div>
  );
}
