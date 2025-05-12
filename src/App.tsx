import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Hero from "./Components/Hero";
import AboutUs from "./Components/AboutUs";
import WhyChooseUs from "./Components/WhyChooseUs";
import PopularCourses from "./Components/PopularCourses";
import AllCourses from "./Components/AllCourses";
import CoursesPage from "./CoursesPage"; // Halaman khusus Courses
import SignUpPage from "./SignUpPage"; // Halaman Sign Up
import LoginPage from "./LoginPage"; // Halaman Login
import ForgotPasswordPage from "./ForgotPasswordPage"; // Halaman Forgot Password
import CreateNewPasswordPage from "./CreateNewPasswordPage"; // Halaman Create New Password
import Footer from "./Components/Footer";
import "./App.css";

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State for toggling menu
  const aboutUsRef = useRef<HTMLDivElement>(null); // Referensi untuk bagian "About Us"
  const footerRef = useRef<HTMLDivElement>(null); // Referensi untuk bagian Footer

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll ke atas dengan animasi halus
  };

  const scrollToAboutUs = () => {
    if (aboutUsRef.current) {
      aboutUsRef.current.scrollIntoView({ behavior: "smooth" }); // Scroll ke bagian "About Us"
    }
  };

  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" }); // Scroll ke bagian Footer
    }
  };

    const isCoursesPage = location.pathname === "/courses"; // Cek apakah di halaman CoursesPage

  return (
    <Router>
      <div>
        {/* Header */}
        <header className="header">
          <nav className="navbar">
            <div className="logo">Flippy</div>
            <button className="hamburger-menu" onClick={toggleMenu}>
              ☰
            </button>
            <div className={`nav-links ${menuOpen ? "open" : ""}`}>
              <Link to="/" onClick={() => { setMenuOpen(false); scrollToTop(); }}>Home</Link>
              <Link to="/" onClick={() => { setMenuOpen(false); scrollToAboutUs(); }}>About Us</Link>
              <Link to="/courses" onClick={() => setMenuOpen(false)}>Courses</Link>
              <Link to="/" onClick={() => { setMenuOpen(false); scrollToFooter(); }}>Contact</Link>
            </div>
            <div className="auth-buttons">
              <Link to="/login">
                <button className="login">Login</button>
              </Link>
              <Link to="/signup">
                <button className="signup">Sign Up</button>
              </Link>
            </div>
          </nav>
        </header>

        {/* Routing */}
        <Routes>
          {/* Halaman Utama */}
          <Route
            path="/"
            element={
              <div>
                <Hero />
                <div ref={aboutUsRef}>
                  <AboutUs />
                </div>
                <WhyChooseUs />
                <PopularCourses />
                <AllCourses />
                <div ref={footerRef}>
                  <Footer />
                </div>
              </div>
            }
          />
          {/* Halaman Courses */}
          <Route path="/courses" element={<CoursesPage />} />
          {/* Halaman Sign Up */}
          <Route path="/signup" element={<SignUpPage />} />
          {/* Halaman Login */}
          <Route path="/login" element={<LoginPage />} />
          {/* Halaman Forgot Password */}
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          {/* Halaman Create New Password */}
          <Route path="/create-new-password" element={<CreateNewPasswordPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;