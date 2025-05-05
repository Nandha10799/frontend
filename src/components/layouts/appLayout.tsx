import { Outlet } from "react-router-dom";
import { Navbar } from "../common/navBar";

export default function AppLayout() {
  return (
    <div className="h-screen w-screen bg-gray-50">
      <div className="h-[9%] md:h-[7%] w-full">
        <Navbar />
      </div>
      <div className="h-[91%] md:h-[93%] w-full">
        <Outlet />
      </div>
    </div>
  );
}
