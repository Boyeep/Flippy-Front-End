import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Hero from "./Components/Hero";
import AboutUs from "./Components/AboutUs";
import WhyChooseUs from "./Components/WhyChooseUs";
import PopularCourses from "./Components/PopularCourses";
import AllCourses from "./Components/AllCourses";
import CoursesPage from "./CoursesPage"; // Halaman khusus Courses
import Footer from "./Components/Footer";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        {/* Header */}
        <header className="header">
          <nav className="navbar">
            <div className="logo">Flippy</div>
            <div className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/#about-us">About Us</Link>
              <Link to="/courses">Courses</Link>
              <Link to="/#Footer">Contact</Link>
            </div>
            <div className="auth-buttons">
              <button className="login">Login</button>
              <button className="signup">Sign Up</button>
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
                <AboutUs />
                <WhyChooseUs />
                <PopularCourses />
                <AllCourses />
                <Footer />
              </div>
            }
          />
          {/* Halaman Courses */}
          <Route path="/courses" element={<CoursesPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;