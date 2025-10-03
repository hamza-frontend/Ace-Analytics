import { Routes, Route } from "react-router-dom";

import Home from "@/pages/Home";
import MainLayout from "@/layouts/MainLayout";
import AboutUs from "@/pages/AboutUs";
import ContactUs from "@/pages/ContactUs";
import Projects from "@/pages/Projects";
import Services from "@/pages/Services";
import ITConsultancy from "@/pages/services/ItConsultancy";
import SoftwareDevelopment from "@/pages/services/SoftwareDevelopment";
import RDConsulting from "@/pages/services/RdConsulting";
import Generators from "@/pages/services/Generators";
import Signals from "@/pages/services/Signals";
import Pcb from "@/pages/services/Pcb";
import ScrollToTop from "@/components/common/ScrollToTop";

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
        <Route path="/services/it-consultancy" element={<ITConsultancy />} />
        <Route
          path="/services/software-development"
          element={<SoftwareDevelopment />}
        />
        <Route path="/services/r&d-consulting" element={<RDConsulting />} />
        <Route
          path="/services/electrical-mechanical/generators"
          element={<Generators />}
        />
          <Route
          path="/services/electrical-mechanical/Signals"
          element={<Signals />}
        />
          <Route
          path="/services/electrical-mechanical/pcb's"
          element={<Pcb />}
        />
      </Route>
    </Routes>
  );
}
