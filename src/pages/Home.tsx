import React from "react";

// Components
import Header from "../components/Home/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Projects from "../components/Home/Projects";
import ContactForm from "../components/ContactForm";
import About from "../components/Home/About";
import TechStack from "../components/Home/TechStack";
import SEO from "../components/SEO";

const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="Rohan Sadhukhan | Portfolio - Full Stack Developer"
        description="Welcome to Rohan Sadhukhan's portfolio. I'm a Full Stack Developer specializing in React, Node.js, and modern web technologies."
        keywords="Rohan Sadhukhan, Web Developer, Full Stack Developer, React, Node.js, Portfolio"
      />

      {/* Navigation */}
      <Nav />

      {/* Header/Hero Section */}
      <Header />

      {/* About Section */}
      <About />

      {/* Tech Stack Section */}
      <TechStack />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
