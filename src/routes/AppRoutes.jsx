import { Routes, Route } from "react-router-dom";

import Home from "@/pages/Home";
import MainLayout from "@/layouts/MainLayout";
import AboutUs from "@/pages/AboutUs";

export default function AppRoutes() {
  return (
    <Routes>
      {/* main layout routes */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        {/* other public pages */}
      </Route>
    </Routes>
  );
}
