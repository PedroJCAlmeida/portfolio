import React from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Technologies from "./components/Technologies.jsx";
import Projects from "./components/Projects.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="bg-gray-900 text-white w-full">
      <Header />
      <Hero />
      <Technologies />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
