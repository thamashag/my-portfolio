import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import ContactFooter from "./components/ContactFooter";
import Blog from "./components/Blog";
import BlogList from "./components/BlogList"; // Import the BlogList component
import Recursion from "./articles/recursion";
import Microservices from "./articles/microservices";
import Kubernetes from "./articles/kubernetes";
import HealthierLivingShowcase from "./components/HealthierLivingShowcase";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Define routes for each page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Projects />
              <Blog />
              <ContactFooter />
            </>
          }
        />
        <Route path="/blog-list" element={<BlogList />} />{" "}
        <Route path="articles/recursion" element={<Recursion />} />{" "}
        <Route path="articles/microservices" element={<Microservices />} />{" "}
        <Route path="articles/kubernetes" element={<Kubernetes />} />{" "}
        <Route
          path="work/healthierliving"
          element={<HealthierLivingShowcase />}
        />{" "}
        {/* New route for BlogList */}
      </Routes>
    </Router>
  );
};

export default App;
