import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearUserProfile } from "../../redux-store/slice/userProfileSlice";
import { RootState } from "../../redux-store/store";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { profile } = useSelector((state: RootState) => state.userProfile);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(clearUserProfile());
    navigate("/auth/login", { replace: true });
  };

  return (
    <header className="bg-white border-b border-gray-300 shadow-sm px-5 py-3 flex justify-between items-center">
      <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        QikBerry
      </h1>

      <div className="relative" ref={dropdownRef}>
        <div onClick={() => setOpen(prev => !prev)} className="cursor-pointer">
          <div className="avatar">
            <div className="mask mask-squircle w-10">
              <img src="https://img.daisyui.com/images/profile/demo/distracted1@192.webp" alt="avatar" />
            </div>
          </div>
        </div>

        {open && (
          <div className="absolute right-0 mt-2 w-52 bg-white border rounded-md shadow-lg z-50">
            <div className="p-3">
              <p className="text-sm font-semibold text-gray-800">{profile?.name}</p>
              <p className="text-xs text-gray-500">{profile?.email}</p>
            </div>
            <div className="border-t">
              <button
                onClick={handleLogout}
                className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-100 cursor-pointer"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
