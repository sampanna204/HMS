import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

interface PhysicianBookingProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PhysicianBooking({ isOpen, onClose }: PhysicianBookingProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    date: "",
    time: ""
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-5 md:p-6 animate-in slide-in-from-bottom-5 duration-300 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-xl font-bold text-gray-900 mb-1">Physician Visit</h2>
        <p className="text-gray-600 text-xs mb-4">Professional doctor at your location</p>

        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name</label>
            <Input
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="h-9 rounded-lg bg-gray-50 border-gray-200 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number</label>
            <Input
              placeholder="+977 98XXXXXXXX"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="h-9 rounded-lg bg-gray-50 border-gray-200 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Location</label>
            <Input
              placeholder="Your address"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="h-9 rounded-lg bg-gray-50 border-gray-200 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Date</label>
            <Input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="h-9 rounded-lg bg-gray-50 border-gray-200 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Time</label>
            <Input
              type="time"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              className="h-9 rounded-lg bg-gray-50 border-gray-200 text-sm"
            />
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
            <p className="text-xs text-gray-600">Fee:</p>
            <p className="text-lg font-bold text-primary">NPR 1,200</p>
          </div>

          <Button className="w-full h-9 rounded-lg font-semibold text-sm bg-gradient-to-r from-primary to-green-600 hover:shadow-lg">
            Book Now
          </Button>
        </form>
      </div>
    </div>
  );
}
