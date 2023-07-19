import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import StickyNavbar from "./components/StickyBar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Scholarships from "./pages/Scholarships";
import Footer2 from "./components copy/Footer";
import Navbar2 from "./components copy/Navbar";
import StickyNavbar2 from "./components copy/StickyBar";
import Home2 from "./pages copy/Home";
import Services2 from "./pages copy/Services";
import Scholarships2 from "./pages copy/Scholarships";

function App() {
  const [isArabic, setIsArabic] = useState(localStorage.getItem("lan") === "ar");

  useEffect(() => {
    const handleStorageChange = () => {
      const storedLanguage = localStorage.getItem("lan");
      setIsArabic(storedLanguage === "ar");
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []); // Empty dependency array to ensure it runs only once during component mount

  return (
    <div className="App container mx-auto">
      <BrowserRouter>
        {isArabic ? (
          <>
            <StickyNavbar />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/scholarships" element={<Scholarships />} />
            </Routes>
          </>
        ) : (
          <>
            <StickyNavbar2 />
            <Navbar2 />
            <Routes>
              <Route path="/" element={<Home2 />} />
              <Route path="/services" element={<Services2 />} />
              <Route path="/scholarships" element={<Scholarships2 />} />
            </Routes>
          </>
        )}
      </BrowserRouter>

      {isArabic ? (
        <Footer />
      ) : (
        <Footer2 />
      )}
    </div>
  );
}

export default App;
