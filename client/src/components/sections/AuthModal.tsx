import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, X, LogIn, UserPlus } from "lucide-react";

export function AuthModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  if (!isOpen) {
    return (
      <div className="flex gap-4 justify-center py-12">
        <Button
          onClick={() => {
            setIsLogin(true);
            setIsOpen(true);
          }}
          className="px-8 py-3 rounded-full font-semibold text-base flex items-center gap-2"
        >
          <LogIn className="w-5 h-5" />
          Login
        </Button>
        <Button
          onClick={() => {
            setIsLogin(false);
            setIsOpen(true);
          }}
          variant="outline"
          className="px-8 py-3 rounded-full font-semibold text-base border-2 flex items-center gap-2"
        >
          <UserPlus className="w-5 h-5" />
          Sign Up
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 md:p-10 relative animate-in slide-in-from-bottom-5 duration-300">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h2>
          <p className="text-gray-500 text-sm">
            {isLogin ? "Sign in to book health services" : "Join to access healthcare services"}
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          {!isLogin && (
            <>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <Input
                  placeholder="John Doe"
                  className="h-11 rounded-lg bg-gray-50 border-gray-200 focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                <Input
                  placeholder="+977 98XXXXXXXX"
                  className="h-11 rounded-lg bg-gray-50 border-gray-200 focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </>
          )}

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
            <Input
              type="email"
              placeholder="you@example.com"
              className="h-11 rounded-lg bg-gray-50 border-gray-200 focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="h-11 rounded-lg bg-gray-50 border-gray-200 focus:ring-2 focus:ring-primary/20 pr-11"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <Button className="w-full h-11 rounded-lg font-semibold text-base bg-gradient-to-r from-primary to-green-600 hover:shadow-lg hover:shadow-primary/30 transition-all">
            {isLogin ? "Sign In" : "Create Account"}
          </Button>
        </form>

        {/* Toggle */}
        <p className="text-center mt-6 text-gray-600 text-sm">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-primary font-semibold hover:underline ml-1"
          >
            {isLogin ? "Sign Up" : "Sign In"}
          </button>
        </p>
      </div>
    </div>
  );
}
