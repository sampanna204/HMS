import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

interface NurseBookingProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NurseBooking({ isOpen, onClose }: NurseBookingProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    shift: "morning",
    date: ""
  });

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

        <h2 className="text-2xl font-bold text-gray-900 mb-2">Book Nurse Visit</h2>
        <p className="text-gray-600 text-sm mb-6">Professional nurse for home health check-ups</p>

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
            <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
            <Input
              placeholder="Your address"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
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
            <label className="block text-sm font-semibold text-gray-700 mb-2">Select Shift</label>
            <select
              value={formData.shift}
              onChange={(e) => setFormData({ ...formData, shift: e.target.value })}
              className="w-full h-11 rounded-lg bg-gray-50 border border-gray-200 px-4 font-medium"
            >
              <option value="morning">Morning (6 AM - 12 PM)</option>
              <option value="afternoon">Afternoon (12 PM - 6 PM)</option>
              <option value="night">Night (6 PM - 12 AM)</option>
            </select>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-sm text-gray-600">Consultation Fee:</p>
            <p className="text-2xl font-bold text-primary">NPR 800</p>
          </div>

          <Button className="w-full h-11 rounded-lg font-semibold bg-gradient-to-r from-primary to-green-600 hover:shadow-lg">
            Confirm Booking
          </Button>
        </form>
      </div>
    </div>
  );
}
