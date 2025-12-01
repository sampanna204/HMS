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
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-5 md:p-6 animate-in slide-in-from-bottom-5 duration-300 relative max-h-[90vh] overflow-y-auto m-auto">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-xl font-bold text-gray-900 mb-1">Ambulance Service</h2>
        <p className="text-gray-600 text-xs mb-4">Emergency medical transport</p>

        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Patient Name</label>
            <Input
              placeholder="Full name"
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
            <label className="block text-xs font-semibold text-gray-700 mb-1">Current Location</label>
            <Input
              placeholder="Your address"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="h-9 rounded-lg bg-gray-50 border-gray-200 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Destination</label>
            <Input
              placeholder="Hospital name"
              value={formData.destination}
              onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
              className="h-9 rounded-lg bg-gray-50 border-gray-200 text-sm"
            />
          </div>

          <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg p-2">
            <input
              type="checkbox"
              id="emergency"
              checked={formData.emergency}
              onChange={(e) => setFormData({ ...formData, emergency: e.target.checked })}
              className="w-4 h-4 rounded accent-red-600"
            />
            <label htmlFor="emergency" className="text-xs font-medium text-gray-700">
              Emergency priority
            </label>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
            <p className="text-xs text-gray-600">Charges:</p>
            <p className="text-lg font-bold text-primary">NPR 2,000</p>
          </div>

          <Button className="w-full h-9 rounded-lg font-semibold text-sm bg-gradient-to-r from-red-600 to-red-700 hover:shadow-lg text-white">
            Call Ambulance
          </Button>
        </form>
      </div>
    </div>
  );
}
