import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Rohan's Portfolio - Full Stack Developer",
  description = "Rohan Sadhukhan is a Full Stack Developer skilled in React, Node.js, and more. Check out my projects and work experience.",
  keywords = "Rohan Sadhukhan, Web Developer, Full Stack Developer, React Developer, Portfolio",
  ogImage = "/og-image.jpg", // You can replace with your actual OG image path
  ogUrl = "https://rohansadhukhan65.github.io/",
  canonical = "https://rohansadhukhan65.github.io/",
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Canonical Link */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={ogUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;
