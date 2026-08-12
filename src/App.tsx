/*
---
Pending Connections:
1. Facebook page URL missing. (Placeholder # is used, marked with TODO)
2. WhatsApp URL missing. (Placeholder # is used, marked with TODO)
3. Appointment system page not implemented. (CTA links default to #contact, marked with TODO)
4. Google Maps URLs for branches missing. (Null values in list, marked with TODO)
---
*/
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Branches from "./components/Branches";
import PatientGuideSection from "./components/PatientGuideSection";
import HealthAwareness from "./components/HealthAwareness";
import GallerySection from "./components/GallerySection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function Home() {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <Services />
      <Branches />
      <PatientGuideSection />
      <HealthAwareness />
      <GallerySection />
      <Contact />
    </main>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;