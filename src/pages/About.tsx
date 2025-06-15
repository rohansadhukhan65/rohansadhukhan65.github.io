import React from "react";
import Nav from "../components/common/Nav";
import SEO from "../components/common/SEO";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

// Import images (you'll need to add these to your assets folder)
import profileImage from "../assets/img/main-profile.png";
import TechStack from "../components/Home/TechStack";
import Experience from "../components/Home/Experience";

const About: React.FC = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };



  return (
    <Box
      sx={{
        bgcolor: "#0f172a",
        color: "#e2e8f0",
        minHeight: "100vh",
      }}
    >
      <SEO
        title="About Rohan Sadhukhan | Full Stack Developer"
        description="Learn about Rohan Sadhukhan's background, skills, and experiences as a Full Stack Developer."
        keywords="Rohan Sadhukhan, About, Developer Biography, Skills, Experience"
      />
      <Nav />

      {/* Hero Section */}
      <Box
        sx={{
          py: 12,
          background:
            "linear-gradient(180deg, rgba(15,23,42,1) 0%, rgba(30,41,59,1) 100%)",
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
            variants={fadeIn}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: "bold",
                background: "linear-gradient(90deg, #fff, #a5b4fc)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 2,
              }}
            >
              About Me
            </Typography>

            <Typography
              variant="h5"
              component="p"
              sx={{
                maxWidth: "800px",
                lineHeight: 1.6,
                mb: 4,
              }}
            >
              Crafting digital experiences that blend{" "}
              <Box component="span" sx={{ color: "#60a5fa" }}>
                functionality
              </Box>{" "}
              with{" "}
              <Box component="span" sx={{ color: "#a78bfa" }}>
                aesthetics
              </Box>
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Bio Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 6, md: 6 },
            alignItems: "center",
          }}
        >
          <Box sx={{ width: { xs: "100%", md: "42%" } }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Box
                component="img"
                src={profileImage}
                alt="Rohan Sadhukhan"
                sx={{
                  width: "100%",
                  maxHeight: "500px",
                  objectFit: "cover",
                  borderRadius: "16px",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  border: "1px solid rgba(148, 163, 184, 0.1)",
                }}
              />
            </motion.div>
          </Box>

          <Box sx={{ width: { xs: "100%", md: "58%" } }}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  fontWeight: "600",
                  mb: 3,
                  color: "#f8fafc",
                }}
              >
                Rohan Sadhukhan
              </Typography>

              <Typography variant="h6" sx={{ mb: 3, color: "#60a5fa" }}>
                Full Stack Developer & UI/UX Enthusiast
              </Typography>

              <Typography
                variant="body1"
                paragraph
                sx={{ mb: 3, lineHeight: 1.8 }}
              >
                With over 5 years of experience in web and application
                development, I specialize in creating scalable, efficient, and
                user-friendly applications. My passion lies in transforming
                complex problems into elegant digital solutions.
              </Typography>

              <Typography
                variant="body1"
                paragraph
                sx={{ mb: 3, lineHeight: 1.8 }}
              >
                I love exploring the intersection of technology and design,
                creating software that not only works flawlessly but also
                provides meaningful user experiences. My approach combines
                technical expertise with creative problem-solving.
              </Typography>

              <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", mt: 4 }}>
                <Box>
                  <Typography
                    variant="h4"
                    sx={{ color: "#60a5fa", fontWeight: "bold" }}
                  >
                    5+
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#94a3b8" }}>
                    Years of Experience
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="h4"
                    sx={{ color: "#60a5fa", fontWeight: "bold" }}
                  >
                    50+
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#94a3b8" }}>
                    Projects Completed
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="h4"
                    sx={{ color: "#60a5fa", fontWeight: "bold" }}
                  >
                    10+
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#94a3b8" }}>
                    Happy Clients
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Container>

      {/* Skills Section */}
      <TechStack />

      {/* Journey Timeline */}
      <Experience />

      {/* Philosophy Section */}
      <Box sx={{ bgcolor: "rgba(30, 41, 59, 0.4)", py: 8 }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 4,
              }}
            >
              <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{
                    fontWeight: "600",
                    mb: 4,
                    color: "#f8fafc",
                  }}
                >
                  My Philosophy
                </Typography>

                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                  I believe that great software is born at the intersection of
                  powerful technology and thoughtful design. My approach
                  combines technical excellence with creative problem-solving to
                  create solutions that are not only functional but also
                  intuitive and enjoyable to use.
                </Typography>

                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                  Continuous learning is at the core of my practice. Technology
                  evolves rapidly, and I make it a priority to stay current with
                  the latest tools and methodologies while maintaining a strong
                  foundation in timeless development principles.
                </Typography>
              </Box>

              <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                <Box
                  sx={{
                    p: 4,
                    bgcolor: "rgba(15, 23, 42, 0.6)",
                    borderRadius: "16px",
                    height: "100%",
                  }}
                >
                  <Typography variant="h5" sx={{ mb: 3, color: "#f8fafc" }}>
                    What I Value
                  </Typography>

                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" sx={{ color: "#60a5fa", mb: 1 }}>
                      User-Centric Design
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#94a3b8" }}>
                      Creating interfaces that feel intuitive and natural while
                      solving real user problems.
                    </Typography>
                  </Box>

                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" sx={{ color: "#60a5fa", mb: 1 }}>
                      Clean & Maintainable Code
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#94a3b8" }}>
                      Writing code that is readable, well-structured, and built
                      to evolve with changing requirements.
                    </Typography>
                  </Box>

                  <Box>
                    <Typography variant="h6" sx={{ color: "#60a5fa", mb: 1 }}>
                      Performance & Accessibility
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#94a3b8" }}>
                      Building applications that are fast, efficient, and
                      accessible to everyone.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
