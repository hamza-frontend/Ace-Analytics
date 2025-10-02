import { Routes, Route } from "react-router-dom";

import Home from "@/pages/Home";
import MainLayout from "@/layouts/MainLayout";
import AboutUs from "@/pages/AboutUs";
import ContactUs from "@/pages/ContactUs";
import Projects from "@/pages/Projects";
import Services from "@/pages/Services";

export default function AppRoutes() {
  return (
    <Routes>
      {/* main layout routes */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        {/* other public pages */}
      </Route>
    </Routes>
  );
}
