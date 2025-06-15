import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Chip,
  Card,
  CardContent,
  Collapse,
  useTheme,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { experiences } from "../storage/Experience";
import Nav from "../components/common/Nav";
import SEO from "../components/common/SEO";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Business } from "@mui/icons-material";

const WorkExperience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const handleExpandClick = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <Box 
      className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800"
      sx={{
        backgroundImage: "url('/subtle-pattern.png')",
        backgroundBlendMode: "overlay",
      }}
    >
      <SEO
        title="Work Experience | Rohan Sadhukhan's Portfolio"
        description="View Rohan Sadhukhan's professional experience, career history, and skills as a Full Stack Developer."
        keywords="Rohan Sadhukhan, Work Experience, Professional Experience, Career History, Developer Resume"
      />
      <Nav />

      <Box
        id="experience-section"
        sx={{
          pt: { xs: 10, md: 14 },
          pb: { xs: 8, md: 12 },
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "100%",
            backgroundImage:
              "radial-gradient(circle at 75% 25%, rgba(59, 130, 246, 0.08) 0%, transparent 55%)",
            pointerEvents: "none",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "100%",
            backgroundImage:
              "radial-gradient(circle at 25% 75%, rgba(124, 58, 237, 0.06) 0%, transparent 50%)",
            pointerEvents: "none",
          },
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <Typography
              variant="h3"
              className="font-bold text-center mb-8"
              sx={{
                position: "relative",
                display: "inline-block",
                left: "50%",
                transform: "translateX(-50%)",
                background: "linear-gradient(90deg, #fff, #a5b4fc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: { xs: "2rem", md: "2.5rem" },
                letterSpacing: "-0.5px",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: "-10px",
                  left: "0",
                  width: "40%",
                  height: "3px",
                  background: "linear-gradient(90deg, #3b82f6, transparent)",
                  borderRadius: "2px",
                },
              }}
            >
              Professional Journey
            </Typography>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 flex flex-col items-center justify-center"
            >
              <Typography
                variant="body1"
                className="text-gray-300 max-w-3xl mx-auto text-center mt-6 mb-16"
                sx={{ 
                  lineHeight: 1.8, 
                  letterSpacing: "0.01em",
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  textShadow: "0 2px 10px rgba(0,0,0,0.2)",
                }}
              >
                My professional career path and experience across different
                organizations. Each role has contributed to my growth as a
                developer and shaped my expertise in the tech industry.
              </Typography>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Box
              sx={{
                position: "relative",
                maxWidth: "900px",
                margin: "0 auto",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  left: { xs: "20px", md: "50%" },
                  transform: { xs: "translateX(0)", md: "translateX(-1px)" },
                  width: "2px",
                  height: "100%",
                  backgroundImage:
                    "linear-gradient(to bottom, rgba(59, 130, 246, 0.9), rgba(124, 58, 237, 0.3))",
                  borderRadius: "999px",
                  boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)",
                },
              }}
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className={`mb-16 relative ${
                    index % 2 === 0
                      ? "md:pr-12 md:text-right md:ml-0 md:mr-auto"
                      : "md:pl-12 md:text-left md:ml-auto md:mr-0"
                  } w-full xs:w-[calc(100%-50px)] md:w-[49%] xs:ml-[50px] ${
                    index % 2 === 0 ? "md:ml-0" : "md:ml-auto"
                  }`}
                >
                  <Card
                    className={`rounded-lg overflow-hidden`}
                    sx={{
                      backgroundColor: "rgba(17, 24, 39, 0.7)",
                      backdropFilter: "blur(10px)",
                      boxShadow: expandedId === exp.id 
                        ? "0 15px 30px rgba(0,0,0,0.4), 0 0 15px rgba(59, 130, 246, 0.3)"
                        : "0 8px 20px rgba(0,0,0,0.2)",
                      transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                      borderRadius: "16px",
                      position: "relative",
                      borderLeft:
                        index % 2 === 0 || isMobile
                          ? "2px solid rgba(59, 130, 246, 0.6)"
                          : "none",
                      borderRight:
                        index % 2 !== 0 && !isMobile
                          ? "2px solid rgba(59, 130, 246, 0.6)"
                          : "none",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow:
                          "0 20px 40px rgba(0,0,0,0.3), 0 0 20px rgba(59, 130, 246, 0.25)",
                      },
                    }}
                    onClick={() => handleExpandClick(exp.id)}
                  >
                    {/* Timeline connector dot with pulse animation */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: "30px",
                        [index % 2 === 0 ? "right" : "left"]: {
                          xs: "auto",
                          md: "-36px",
                        },
                        left: {
                          xs: "-36px",
                          md: index % 2 === 0 ? "auto" : "-36px",
                        },
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        backgroundColor: "#3b82f6",
                        zIndex: 2,
                        boxShadow:
                          "0 0 0 4px rgba(59, 130, 246, 0.3), 0 0 15px rgba(59, 130, 246, 0.5)",
                        border: "2px solid #111827",
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          width: "100%",
                          height: "100%",
                          borderRadius: "50%",
                          backgroundColor: "rgba(59, 130, 246, 0.4)",
                          animation: expandedId === exp.id ? "pulse 2s infinite" : "none",
                          "@keyframes pulse": {
                            "0%": {
                              transform: "scale(1)",
                              opacity: 0.8,
                            },
                            "70%": {
                              transform: "scale(2)",
                              opacity: 0,
                            },
                            "100%": {
                              transform: "scale(2.5)",
                              opacity: 0,
                            },
                          },
                        },
                      }}
                    />

                    <CardContent sx={{ padding: "1.75rem" }}>
                      <Grid
                        container
                        spacing={2}
                        alignItems="center"
                        justifyContent={{
                          xs: "flex-start",
                          md: index % 2 === 0 ? "flex-end" : "flex-start",
                        }}
                      >
                        <Grid sx={{ display: "flex" }}>
                          {exp.logo ? (
                            <Box
                              component="img"
                              src={exp.logo}
                              alt={exp.company}
                              sx={{
                                width: 56,
                                height: 56,
                                borderRadius: "12px",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                                border: "2px solid rgba(59, 130, 246, 0.3)",
                                transition: "transform 0.3s ease",
                                "&:hover": {
                                  transform: "scale(1.05)",
                                },
                              }}
                            />
                          ) : (
                            <Box
                              sx={{
                                width: 56,
                                height: 56,
                                borderRadius: "12px",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                                border: "2px solid rgba(59, 130, 246, 0.3)",
                                transition: "transform 0.3s ease",
                                backgroundColor: "rgba(59, 130, 246, 0.2)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                "&:hover": {
                                  transform: "scale(1.05)",
                                },
                              }}
                            >
                              <Business sx={{ fontSize: 28, color: "#60a5fa" }} />
                            </Box>
                          )}
                        </Grid>
                        <Grid sx={{ flexGrow: 1 }}>
                          <Box
                            className={`flex flex-col ${
                              index % 2 === 0 ? "md:items-end" : "md:items-start"
                            }`}
                          >
                            <Typography
                              variant="h5"
                              className="font-bold mb-1"
                              sx={{ 
                                color: "#fff",
                                fontSize: { xs: "1.25rem", md: "1.35rem" },
                                textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                              }}
                            >
                              {exp.role}
                            </Typography>

                            <Typography
                              variant="subtitle1"
                              className="mb-2 font-medium"
                              sx={{ 
                                color: "#60a5fa",
                                fontSize: { xs: "1rem", md: "1.1rem" },
                              }}
                            >
                              {exp.company}
                            </Typography>

                            <Box
                              className="flex items-center gap-3 mb-3"
                              sx={{
                                justifyContent: {
                                  xs: "flex-start",
                                  md: index % 2 === 0 ? "flex-end" : "flex-start",
                                },
                              }}
                            >
                              <Box className="flex items-center text-gray-300">
                                <CalendarTodayIcon sx={{ fontSize: 14, mr: 0.5 }} />
                                <Typography
                                  variant="body2"
                                  className="fira-code"
                                >
                                  {exp.duration}
                                </Typography>
                              </Box>
                              <Box
                                sx={{
                                  width: "4px",
                                  height: "4px",
                                  borderRadius: "50%",
                                  backgroundColor: "rgba(156, 163, 175, 0.5)",
                                }}
                              />
                              <Box className="flex items-center text-gray-300">
                                <LocationOnIcon sx={{ fontSize: 14, mr: 0.5 }} />
                                <Typography variant="body2">
                                  {exp.location}
                                </Typography>
                              </Box>
                            </Box>

                            <Typography
                              variant="body2"
                              className="text-gray-300"
                              sx={{
                                lineHeight: 1.7,
                                fontSize: "0.9rem",
                                textAlign: !isMobile
                                  ? index % 2 === 0
                                    ? "right"
                                    : "left"
                                  : "left",
                              }}
                            >
                              {exp.description}
                            </Typography>

                            <Box
                              className="flex items-center mt-4 cursor-pointer transition-colors"
                              sx={{
                                justifyContent: {
                                  xs: "flex-start",
                                  md: index % 2 === 0 ? "flex-end" : "flex-start",
                                },
                                color: "#60a5fa",
                                "&:hover": {
                                  color: "#93c5fd",
                                },
                              }}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleExpandClick(exp.id);
                              }}
                            >
                              <Typography
                                variant="button"
                                sx={{
                                  fontSize: "0.85rem",
                                  fontWeight: 500,
                                  letterSpacing: "0.5px",
                                }}
                              >
                                {expandedId === exp.id
                                  ? "Show less"
                                  : "Show more"}
                              </Typography>
                              {expandedId === exp.id ? (
                                <KeyboardArrowUpIcon
                                  fontSize="small"
                                  sx={{ ml: 0.5 }}
                                />
                              ) : (
                                <KeyboardArrowDownIcon
                                  fontSize="small"
                                  sx={{ ml: 0.5 }}
                                />
                              )}
                            </Box>
                          </Box>
                        </Grid>
                      </Grid>

                      <AnimatePresence>
                        {expandedId === exp.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Collapse
                              in={expandedId === exp.id}
                              timeout="auto"
                              unmountOnExit
                            >
                              <Box 
                                className="mt-5 pt-4" 
                                sx={{ 
                                  borderTop: "1px solid rgba(75, 85, 99, 0.4)",
                                  background: "rgba(17, 24, 39, 0.3)",
                                  borderRadius: "8px",
                                  padding: "1rem",
                                  marginTop: "1.5rem",
                                }}
                              >
                                <Typography
                                  variant="subtitle2"
                                  className="font-bold mb-3 text-blue-300"
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    "&::before": {
                                      content: '""',
                                      display: "inline-block",
                                      width: "8px",
                                      height: "8px",
                                      borderRadius: "50%",
                                      backgroundColor: "#60a5fa",
                                      marginRight: "8px",
                                    },
                                  }}
                                >
                                  Key Responsibilities:
                                </Typography>
                                <Box 
                                  component="ul" 
                                  sx={{ 
                                    pl: 2,
                                    listStyleType: "none",
                                  }}
                                >
                                  {exp.responsibilities.map((responsibility, idx) => (
                                    <motion.li
                                      key={idx}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: idx * 0.1 }}
                                      className="mb-2 text-gray-300 flex items-start"
                                      sx={{
                                        textAlign: "left",
                                        fontSize: "0.875rem",
                                        lineHeight: 1.6,
                                      }}
                                    >
                                      <Box 
                                        component="span" 
                                        sx={{ 
                                          color: "#60a5fa", 
                                          marginRight: "8px",
                                          fontSize: "1rem",
                                        }}
                                      >
                                        •
                                      </Box>
                                      {responsibility}
                                    </motion.li>
                                  ))}
                                </Box>

                                <Typography
                                  variant="subtitle2"
                                  className="font-bold mt-4 mb-3 text-blue-300"
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    "&::before": {
                                      content: '""',
                                      display: "inline-block",
                                      width: "8px",
                                      height: "8px",
                                      borderRadius: "50%",
                                      backgroundColor: "#60a5fa",
                                      marginRight: "8px",
                                    },
                                  }}
                                >
                                  Technologies:
                                </Typography>
                                <Box
                                  className="flex flex-wrap gap-2 mt-2"
                                  sx={{
                                    justifyContent: {
                                      xs: "flex-start",
                                      md: index % 2 === 0 ? "flex-end" : "flex-start",
                                    },
                                  }}
                                >
                                  {exp.technologies.map((tech, techIndex) => (
                                    <motion.div
                                      key={techIndex}
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      transition={{ delay: techIndex * 0.05 }}
                                    >
                                      <Chip
                                        label={tech}
                                        size="small"
                                        sx={{
                                          backgroundColor: "rgba(59, 130, 246, 0.15)",
                                          color: "#a5b4fc",
                                          borderRadius: "6px",
                                          fontSize: "0.75rem",
                                          height: "26px",
                                          fontWeight: 500,
                                          border: "1px solid rgba(59, 130, 246, 0.2)",
                                          transition: "all 0.2s ease",
                                          "&:hover": {
                                            backgroundColor: "rgba(59, 130, 246, 0.25)",
                                            transform: "translateY(-2px)",
                                          },
                                        }}
                                      />
                                    </motion.div>
                                  ))}
                                </Box>
                              </Box>
                            </Collapse>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default WorkExperience;
