import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, X } from "lucide-react";

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
}

export function SignupModal({ isOpen, onClose, onSwitchToLogin }: SignupModalProps) {
  const [showPassword, setShowPassword] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 md:p-8 relative animate-in slide-in-from-bottom-5 duration-300 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Create Account</h2>
          <p className="text-gray-500 text-sm mt-1">Join Health Care today</p>
        </div>

        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1 text-center">Full Name</label>
            <Input
              placeholder="John Doe"
              className="h-10 rounded-lg bg-gray-50 border-gray-200 text-sm w-full"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1 text-center">Phone</label>
            <Input
              placeholder="+977 98XXXXXXXX"
              className="h-10 rounded-lg bg-gray-50 border-gray-200 text-sm w-full"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1 text-center">Email</label>
            <Input
              type="email"
              placeholder="you@example.com"
              className="h-10 rounded-lg bg-gray-50 border-gray-200 text-sm w-full"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1 text-center">Password</label>
            <div className="relative w-full">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="h-10 rounded-lg bg-gray-50 border-gray-200 text-sm pr-10 w-full"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <label className="flex items-start gap-2 text-xs justify-center">
            <input type="checkbox" className="mt-1 w-4 h-4 rounded accent-primary" />
            <span className="text-gray-600 text-center">
              I agree to the <a href="#" className="text-primary font-semibold">Terms</a> and <a href="#" className="text-primary font-semibold">Privacy Policy</a>
            </span>
          </label>

          <Button className="w-full h-10 rounded-lg font-semibold text-sm bg-gradient-to-r from-primary to-green-600 hover:shadow-lg">
            Create Account
          </Button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <button
            onClick={() => {
              onClose();
              onSwitchToLogin();
            }}
            className="text-primary font-semibold hover:underline"
          >
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
}
