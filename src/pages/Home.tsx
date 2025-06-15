import React from "react";

// Components
import Header from "../components/Home/Header";
import Nav from "../components/common/Nav";
import Footer from "../components/common/Footer";
import Projects from "../components/Home/Projects";
import ContactForm from "../components/common/ContactForm";
import About from "../components/Home/About";
import TechStack from "../components/Home/TechStack";
import Experience from "../components/Home/Experience";
import SEO from "../components/common/SEO";

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

      {/* Experience Section */}
      <Experience />

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
