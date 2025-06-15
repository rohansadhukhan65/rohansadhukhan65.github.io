import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Pagination,
  Chip,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type ProjectItem } from "../storage/Projects";
import Nav from "../components/common/Nav";
import SEO from "../components/common/SEO";

const Projects: React.FC = () => {
  // State for pagination and filtering
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [filteredProjects, setFilteredProjects] =
    useState<ProjectItem[]>(projects);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const projectsPerPage = 6;
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const pageCount = Math.ceil(filteredProjects.length / projectsPerPage);

  // Extract unique categories
  const categories = [
    "All",
    ...Array.from(new Set(projects.map((project) => project.category))),
  ];

  // Handle category filter
  const handleCategoryFilter = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
    if (category === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === category)
      );
    }
  };

  // Handle page change
  const handlePageChange = (
    _: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
    // Scroll to top of projects section
    document
      .getElementById("projects-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <SEO
        title="Projects | Rohan Sadhukhan's Portfolio"
        description="Explore projects developed by Rohan Sadhukhan. View my latest work in web development, including React, Node.js, and full-stack applications."
        keywords="Rohan Sadhukhan, Projects, Web Development Projects, React Projects, Portfolio Projects"
      />
      <Nav />

      <Box
        id="projects-section"
        sx={{
          pt: 12,
          pb: 10,
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
              "radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)",
            pointerEvents: "none",
          },
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
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
              My Projects
            </Typography>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="my-5 flex flex-col items-center justify-center"
            >
              <Typography
                variant="body1"
                className="text-gray-300 max-w-3xl mx-auto text-center mt-6 mb-12"
                sx={{ lineHeight: 1.8, letterSpacing: "0.01em" }}
              >
                Explore my portfolio of projects across different categories.
                Each project represents unique challenges and technical
                solutions.
              </Typography>
            </motion.div>

            {/* Category filter */}
            <Box className="flex flex-wrap justify-center gap-3 my-8">
              {categories.map((category, index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Chip
                    label={category}
                    onClick={() => handleCategoryFilter(category)}
                    sx={{
                      fontSize: "0.9rem",
                      px: 2,
                      py: 2.5,
                      borderRadius: "8px",
                      backgroundColor:
                        activeCategory === category
                          ? "rgba(59, 130, 246, 0.8)"
                          : "rgba(75, 85, 99, 0.3)",
                      color: activeCategory === category ? "white" : "#d1d5db",
                      "&:hover": {
                        backgroundColor:
                          activeCategory === category
                            ? "rgba(59, 130, 246, 0.9)"
                            : "rgba(75, 85, 99, 0.4)",
                      },
                      transition: "all 0.2s ease",
                      cursor: "pointer",
                    }}
                  />
                </motion.div>
              ))}
            </Box>
          </motion.div>

          {/* Projects grid */}
          <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProjects.length > 0 ? (
              currentProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                >
                  <Card
                    className="h-full overflow-hidden"
                    sx={{
                      backgroundColor: "rgba(17, 24, 39, 0.8)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(75, 85, 99, 0.3)",
                      borderRadius: "16px",
                      boxShadow:
                        hoveredProject === project.id
                          ? "0 20px 40px rgba(0,0,0,0.4), 0 0 20px rgba(59, 130, 246, 0.2)"
                          : "0 10px 30px rgba(0,0,0,0.3)",
                      transition:
                        "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Box sx={{ position: "relative", overflow: "hidden" }}>
                      <CardMedia
                        component="img"
                        height="200"
                        image={project.image}
                        alt={project.title}
                        sx={{
                          transition: "transform 0.8s ease",
                          transform:
                            hoveredProject === project.id
                              ? "scale(1.05)"
                              : "scale(1)",
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          background:
                            "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(17, 24, 39, 1) 100%)",
                          opacity: 0.6,
                        }}
                      />

                      {/* Category badge */}
                      <Chip
                        label={project.category}
                        size="small"
                        sx={{
                          position: "absolute",
                          top: 12,
                          right: 12,
                          backgroundColor: "rgba(59, 130, 246, 0.8)",
                          color: "white",
                          fontWeight: 500,
                          fontSize: "0.7rem",
                        }}
                      />
                    </Box>

                    <CardContent sx={{ padding: "1.5rem", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                      <Typography
                        variant="h5"
                        component="div"
                        className="mb-3 font-bold"
                        sx={{
                          color: "#fff",
                          fontSize: "1.35rem",
                          position: "relative",
                          display: "inline-block",
                          "&::after": {
                            content: '""',
                            position: "absolute",
                            bottom: "-6px",
                            left: "0",
                            width:
                              hoveredProject === project.id ? "100%" : "40%",
                            height: "2px",
                            background:
                              "linear-gradient(90deg, #3b82f6, transparent)",
                            transition: "width 0.3s ease",
                          },
                        }}
                      >
                        {project.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        className="text-gray-300 mb-5 pt-3"
                        sx={{
                          lineHeight: 1.7,
                          fontSize: "0.95rem",
                          opacity: 0.9,
                        }}
                      >
                        {project.description}
                      </Typography>

                      <Box className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={techIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 * techIndex }}
                          >
                            <Chip
                              label={tech}
                              size="small"
                              sx={{
                                backgroundColor: "rgba(59, 130, 246, 0.15)",
                                color: "#a5b4fc",
                                borderRadius: "4px",
                                fontSize: "0.7rem",
                                height: "24px",
                                "&:hover": {
                                  backgroundColor: "rgba(59, 130, 246, 0.25)",
                                },
                              }}
                            />
                          </motion.div>
                        ))}
                      </Box>

                      <Box className="flex justify-between items-center mt-auto">
                        <Box className="flex space-x-3 gap-3">
                          {project.demoLink && (
                            <Button
                              size="small"
                              variant="outlined"
                              startIcon={<LaunchIcon sx={{ fontSize: 16 }} />}
                              href={project.demoLink}
                              target="_blank"
                              sx={{
                                borderRadius: "8px",
                                textTransform: "none",
                                borderColor: "rgba(59, 130, 246, 0.5)",
                                color: "#60a5fa",
                                "&:hover": {
                                  borderColor: "#60a5fa",
                                  backgroundColor: "rgba(59, 130, 246, 0.08)",
                                },
                              }}
                            >
                              Demo
                            </Button>
                          )}
                          {project.codeLink && (
                            <Button
                              size="small"
                              variant="outlined"
                              startIcon={<GitHubIcon sx={{ fontSize: 16 }} />}
                              href={project.codeLink}
                              target="_blank"
                              sx={{
                                borderRadius: "8px",
                                textTransform: "none",
                                borderColor: "rgba(168, 85, 247, 0.5)",
                                color: "#c084fc",
                                "&:hover": {
                                  borderColor: "#c084fc",
                                  backgroundColor: "rgba(168, 85, 247, 0.08)",
                                },
                              }}
                            >
                              Code
                            </Button>
                          )}
                        </Box>

                        <AnimatePresence>
                          {hoveredProject === project.id && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.8 }}
                              transition={{ duration: 0.2 }}
                            >
                              <IconButton
                                size="small"
                                sx={{
                                  backgroundColor: "rgba(59, 130, 246, 0.15)",
                                  color: "#60a5fa",
                                  "&:hover": {
                                    backgroundColor: "rgba(59, 130, 246, 0.25)",
                                  },
                                }}
                              >
                                <ArrowForwardIcon fontSize="small" />
                              </IconButton>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-12"
              >
                <Typography variant="h6" className="text-gray-300">
                  No projects found in this category.
                </Typography>
              </motion.div>
            )}
          </Box>

          {/* Pagination */}
          {filteredProjects.length > projectsPerPage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12 flex justify-center"
            >
              <Pagination
                count={pageCount}
                page={currentPage}
                onChange={handlePageChange}
                size="large"
                sx={{
                  "& .MuiPaginationItem-root": {
                    color: "#d1d5db",
                    borderColor: "rgba(75, 85, 99, 0.3)",
                  },
                  "& .Mui-selected": {
                    backgroundColor: "rgba(59, 130, 246, 0.8) !important",
                    color: "white",
                  },
                }}
              />
            </motion.div>
          )}
        </Container>
      </Box>
    </Box>
  );
};

export default Projects;
