import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, X } from "lucide-react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToSignup: () => void;
}

export function LoginModal({ isOpen, onClose, onSwitchToSignup }: LoginModalProps) {
  const [showPassword, setShowPassword] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 md:p-8 relative animate-in slide-in-from-bottom-5 duration-300">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
          <p className="text-gray-500 text-sm mt-1">Sign in to your account</p>
        </div>

        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
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

          <div className="flex flex-col items-center gap-3 text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded accent-primary" />
              <span className="text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-primary font-semibold hover:underline">Forgot Password?</a>
          </div>

          <Button className="w-full h-10 rounded-lg font-semibold text-sm bg-gradient-to-r from-primary to-green-600 hover:shadow-lg">
            Sign In
          </Button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-600">
          Don't have an account?{" "}
          <button
            onClick={() => {
              onClose();
              onSwitchToSignup();
            }}
            className="text-primary font-semibold hover:underline"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}
