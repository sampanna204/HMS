import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, X } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: "login" | "signup";
}

export function AuthModal({ isOpen, onClose, initialMode = "login" }: AuthModalProps) {
  const [mode, setMode] = useState<"login" | "signup">(initialMode);
  const [showPassword, setShowPassword] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 md:p-8 relative animate-in slide-in-from-bottom-5 duration-300 max-h-[90vh] overflow-y-auto m-auto">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setMode("login")}
            className={`flex-1 py-2 px-4 rounded-lg font-semibold text-sm transition-all ${
              mode === "login"
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setMode("signup")}
            className={`flex-1 py-2 px-4 rounded-lg font-semibold text-sm transition-all ${
              mode === "signup"
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {mode === "login" ? "Welcome Back" : "Create Account"}
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            {mode === "login" ? "Sign in to your account" : "Join Health Care today"}
          </p>
        </div>

        {/* Form */}
        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
          {mode === "signup" && (
            <>
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
            </>
          )}

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

          {mode === "login" && (
            <div className="flex flex-col items-center gap-3 text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded accent-primary" />
                <span className="text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-primary font-semibold hover:underline">
                Forgot Password?
              </a>
            </div>
          )}

          {mode === "signup" && (
            <label className="flex items-start gap-2 text-xs justify-center">
              <input type="checkbox" className="mt-1 w-4 h-4 rounded accent-primary" />
              <span className="text-gray-600 text-center">
                I agree to the <a href="#" className="text-primary font-semibold">Terms</a> and <a href="#" className="text-primary font-semibold">Privacy Policy</a>
              </span>
            </label>
          )}

          <Button className="w-full h-10 rounded-lg font-semibold text-sm bg-gradient-to-r from-primary to-green-600 hover:shadow-lg">
            {mode === "login" ? "Sign In" : "Create Account"}
          </Button>
        </form>
      </div>
    </div>
  );
}
