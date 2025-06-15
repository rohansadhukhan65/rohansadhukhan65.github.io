import React from "react";
import Nav from "../components/common/Nav";
import SEO from "../components/common/SEO";

const Projects: React.FC = () => {
  return (
    <div>
      <SEO
        title="Projects | Rohan Sadhukhan's Portfolio"
        description="Explore projects developed by Rohan Sadhukhan. View my latest work in web development, including React, Node.js, and full-stack applications."
        keywords="Rohan Sadhukhan, Projects, Web Development Projects, React Projects, Portfolio Projects"
      />
      <Nav />
      Projects
    </div>
  );
};

export default Projects;
