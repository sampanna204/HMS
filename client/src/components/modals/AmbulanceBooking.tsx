import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

interface AmbulanceBookingProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AmbulanceBooking({ isOpen, onClose }: AmbulanceBookingProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    destination: "",
    emergency: false
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

        <h2 className="text-2xl font-bold text-gray-900 mb-2">Book Ambulance</h2>
        <p className="text-gray-600 text-sm mb-6">Quick emergency medical transport</p>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Patient Name</label>
            <Input
              placeholder="Full name"
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
            <label className="block text-sm font-semibold text-gray-700 mb-2">Current Location</label>
            <Input
              placeholder="Your address or location"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="h-11 rounded-lg bg-gray-50 border-gray-200"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Destination (Hospital)</label>
            <Input
              placeholder="Hospital name or address"
              value={formData.destination}
              onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
              className="h-11 rounded-lg bg-gray-50 border-gray-200"
            />
          </div>

          <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-lg p-3">
            <input
              type="checkbox"
              id="emergency"
              checked={formData.emergency}
              onChange={(e) => setFormData({ ...formData, emergency: e.target.checked })}
              className="w-5 h-5 rounded accent-red-600"
            />
            <label htmlFor="emergency" className="text-sm font-medium text-gray-700">
              This is an emergency (Priority dispatch)
            </label>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-sm text-gray-600">Ambulance Charges:</p>
            <p className="text-2xl font-bold text-primary">NPR 2,000</p>
            {formData.emergency && <p className="text-xs text-red-600 mt-1">Emergency charges may apply</p>}
          </div>

          <Button className="w-full h-11 rounded-lg font-semibold bg-gradient-to-r from-red-600 to-red-700 hover:shadow-lg text-white">
            Call Ambulance Now
          </Button>
        </form>
      </div>
    </div>
  );
}
