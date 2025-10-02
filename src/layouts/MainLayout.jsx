import { Outlet } from "react-router-dom";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar /> {/* your top nav */}
      <main className="">
        <Outlet /> {/* page content goes here */}
      </main>
      <Footer /> {/* footer */}
    </div>
  );
}
