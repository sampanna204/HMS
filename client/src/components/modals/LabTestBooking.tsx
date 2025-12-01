import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

interface LabTestBookingProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LabTestBooking({ isOpen, onClose }: LabTestBookingProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    testType: "blood",
    additionalInfo: "",
    date: ""
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

        <h2 className="text-xl font-bold text-gray-900 mb-1">Lab Test</h2>
        <p className="text-gray-600 text-xs mb-4">Sample collection at your home</p>

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
            <label className="block text-xs font-semibold text-gray-700 mb-1">Test Type</label>
            <select
              value={formData.testType}
              onChange={(e) => setFormData({ ...formData, testType: e.target.value })}
              className="w-full h-9 rounded-lg bg-gray-50 border border-gray-200 px-3 font-medium text-sm"
            >
              <option value="blood">Blood Test</option>
              <option value="urine">Urine Test</option>
              <option value="covid">COVID-19 Test</option>
              <option value="thyroid">Thyroid Test</option>
              <option value="lipid">Lipid Profile</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Details</label>
            <textarea
              placeholder="Special instructions"
              value={formData.additionalInfo}
              onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
              className="w-full rounded-lg bg-gray-50 border border-gray-200 px-3 py-2 font-medium text-sm min-h-16"
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

          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
            <p className="text-xs text-gray-600">Fee:</p>
            <p className="text-lg font-bold text-primary">NPR 300+</p>
          </div>

          <Button className="w-full h-9 rounded-lg font-semibold text-sm bg-gradient-to-r from-primary to-green-600 hover:shadow-lg">
            Book Now
          </Button>
        </form>
      </div>
    </div>
  );
}
