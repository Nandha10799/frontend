import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row">
      {/* Left side */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-blue-600 to-purple-700 p-8 flex-col justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 text-white">
          <span className="text-2xl font-extrabold tracking-wide">QikBerry</span>
        </div>

        {/* Hero Section */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-white leading-tight">
            Empowering Secure Collaboration
          </h1>
          <p className="text-blue-100 text-base max-w-md">
            Access your dashboard, manage your preferences, and stay connected with your team — all in one place.
          </p>
          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-6 text-white shadow-lg">
            <h3 className="text-lg font-semibold mb-2">You're in good company 🚀</h3>
            <p className="text-sm text-white/80">
              QikBerry is trusted by fast-moving teams around the world to power their secure workflows.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                ⚡
              </div>
              <p className="text-xs text-white/50 italic">Built for teams that move fast</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-blue-100 text-sm">© 2025 QikBerry. All rights reserved.</p>
      </div>

      {/* Right side */}
      <div className="flex-1 flex items-center justify-center p-6 bg-gray-50">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="flex md:hidden items-center gap-2 mb-8">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              QikBerry
            </span>
          </div>

          {/* Form outlet */}
          <Outlet />

          {/* Mobile footer */}
          <div className="md:hidden mt-8">
            <p className="text-gray-500 text-sm">© 2025 QikBerry. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
