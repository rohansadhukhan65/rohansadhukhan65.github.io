import React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Card,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";
import {
  GitHub,
  LinkedIn,
  Instagram,
  Facebook,
  Email,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// static data
import { projects } from "../storage/Projects";
import { techStack } from "../storage/TechStack";

// Components
import Header from "../components/Home/Header";
import Nav from "../components/Nav";



const Home: React.FC = () => {
 

  // Create a theme instance for proper styling
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Box className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen text-white">
        {/* Navigation */}
        <Nav />

        {/* Header/Hero Section */}
        <Header />

        {/* About Section */}
        <Box id="about" className="py-20 bg-gray-900">
          <Container>
            <Box className="text-center mb-12">
              <Typography variant="h3" className="font-bold mb-2">
                About Me
              </Typography>
              <Box className="w-16 h-1 bg-blue-500 mx-auto" />
            </Box>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Box
                    component="img"
                    src="https://via.placeholder.com/600x400?text=About+Me+Image"
                    alt="About Rohan"
                    className="w-full rounded-lg shadow-xl"
                  />
                </motion.div>
              </div>
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Typography variant="h4" className="mb-4 font-bold">
                    Full Stack Developer from India
                  </Typography>
                  <Typography variant="body1" className="text-gray-300 mb-6">
                    With over 5 years of experience in web and application
                    development, I specialize in creating scalable, efficient,
                    and user-friendly applications. My passion lies in
                    transforming ideas into digital solutions that make a
                    difference.
                  </Typography>
                  <Typography variant="body1" className="text-gray-300 mb-6">
                    I enjoy working on challenging projects that push my
                    technical boundaries and allow me to explore innovative
                    technologies. When I'm not coding, you'll find me exploring
                    new tech trends, contributing to open source, or sharing
                    knowledge with the community.
                  </Typography>
                  <Button
                    variant="contained"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                    href="#contact"
                  >
                    Let's Connect
                  </Button>
                </motion.div>
              </div>
            </div>
          </Container>
        </Box>

        {/* Tech Stack Section */}
        <Box id="tech" className="py-20 bg-gray-800">
          <Container>
            <Box className="text-center mb-12 flex flex-col items-center">
              <Typography variant="h3" className="font-bold mb-2">
                Tech Stack
              </Typography>
              <Box className="w-16 h-1 bg-blue-500 mx-auto mb-4" />
              <Typography
                variant="body1"
                className="text-gray-300 max-w-2xl mx-auto"
              >
                I work with a variety of technologies to build robust and
                scalable applications. Here are some of the core technologies I
                specialize in:
              </Typography>
            </Box>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {techStack.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    elevation={3}
                    className="p-6 h-full bg-gray-900 border border-gray-700"
                  >
                    <Typography
                      variant="h5"
                      className="mb-4 text-blue-400 font-bold"
                    >
                      {category.name}
                    </Typography>
                    <Box className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Box
                          key={skillIndex}
                          className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
                        >
                          {skill}
                        </Box>
                      ))}
                    </Box>
                  </Paper>
                </motion.div>
              ))}
            </div>
          </Container>
        </Box>

        {/* Projects Section */}
        <Box id="projects" className="py-20 bg-gray-900">
          <Container>
            <Box className="text-center mb-12 flex flex-col items-center">
              <Typography variant="h3" className="font-bold mb-2">
                My Projects
              </Typography>
              <Box className="w-16 h-1 bg-blue-500 mx-auto mb-4" />
              <Typography
                variant="body1"
                className="text-gray-300 max-w-2xl mx-auto"
              >
                Here are some of my recent projects that showcase my skills and
                expertise. Each project represents unique challenges and
                solutions.
              </Typography>
            </Box>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-gray-800 border border-gray-700 overflow-hidden">
                    <CardMedia
                      component="img"
                      height="140"
                      image={project.image}
                      alt={project.title}
                    />
                    <CardContent>
                      <Typography
                        variant="h5"
                        component="div"
                        className="mb-2 font-bold text-white"
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="text-gray-300 mb-4"
                      >
                        {project.description}
                      </Typography>
                      <Box className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, index) => (
                          <Box
                            key={index}
                            className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-300"
                          >
                            {tech}
                          </Box>
                        ))}
                      </Box>
                      <Box className="flex justify-start space-x-2">
                        <Button
                          size="small"
                          variant="outlined"
                          className="text-blue-400 border-blue-400"
                        >
                          Demo
                        </Button>
                        <Button
                          size="small"
                          variant="outlined"
                          className="text-purple-400 border-purple-400"
                        >
                          Code
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Container>
        </Box>

        {/* Contact Section */}
        <Box id="contact" className="py-20 bg-gray-800">
          <Container>
            <Box className="text-center mb-12 flex flex-col items-center">
              <Typography variant="h3" className="font-bold mb-2">
                Get In Touch
              </Typography>
              <Box className="w-16 h-1 bg-blue-500 mx-auto mb-4" />
              <Typography
                variant="body1"
                className="text-gray-300 max-w-2xl mx-auto"
              >
                Have a project in mind or want to collaborate? Feel free to
                reach out!
              </Typography>
            </Box>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-5">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Typography variant="h5" className="mb-4 font-bold">
                    Contact Information
                  </Typography>
                  <Box className="space-y-4 mb-8">
                    <Box className="flex items-center space-x-3">
                      <Email className="text-blue-400" />
                      <Typography variant="body1">
                        rohansadhukhan65@gmail.com
                      </Typography>
                    </Box>
                  </Box>

                  <Typography variant="h6" className="mb-4 font-bold">
                    Follow Me
                  </Typography>
                  <Box className="flex space-x-3">
                    <IconButton
                      className="text-white bg-[#0077B5] hover:bg-[#0077B5]/80"
                      component="a"
                      href="https://www.linkedin.com/in/rohan-sadhukhan-857b57217/"
                      target="_blank"
                    >
                      <LinkedIn />
                    </IconButton>
                    <IconButton
                      className="text-white bg-[#333] hover:bg-[#333]/80"
                      component="a"
                      href="https://github.com/rohansadhukhan65"
                      target="_blank"
                    >
                      <GitHub />
                    </IconButton>
                    <IconButton
                      className="text-white bg-[#E4405F] hover:bg-[#E4405F]/80"
                      component="a"
                      href="#"
                      target="_blank"
                    >
                      <Instagram />
                    </IconButton>
                    <IconButton
                      className="text-white bg-[#1877F2] hover:bg-[#1877F2]/80"
                      component="a"
                      href="#"
                      target="_blank"
                    >
                      <Facebook />
                    </IconButton>
                  </Box>
                </motion.div>
              </div>

              <div className="md:col-span-7">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    elevation={3}
                    className="p-6 bg-gray-900 border border-gray-700"
                  >
                    <Typography variant="h5" className="mb-4 font-bold">
                      Send Message
                    </Typography>
                    <Box component="form" className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div>
                          <TextField
                            fullWidth
                            label="Name"
                            variant="outlined"
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                color: "white",
                                "& fieldset": {
                                  borderColor: "rgba(255,255,255,0.2)",
                                },
                                "&:hover fieldset": {
                                  borderColor: "rgba(255,255,255,0.4)",
                                },
                                "&.Mui-focused fieldset": {
                                  borderColor: "#3b82f6",
                                },
                              },
                              "& .MuiInputLabel-root": {
                                color: "rgba(255,255,255,0.7)",
                              },
                            }}
                          />
                        </div>
                        <div>
                          <TextField
                            fullWidth
                            label="Email"
                            variant="outlined"
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                color: "white",
                                "& fieldset": {
                                  borderColor: "rgba(255,255,255,0.2)",
                                },
                                "&:hover fieldset": {
                                  borderColor: "rgba(255,255,255,0.4)",
                                },
                                "&.Mui-focused fieldset": {
                                  borderColor: "#3b82f6",
                                },
                              },
                              "& .MuiInputLabel-root": {
                                color: "rgba(255,255,255,0.7)",
                              },
                            }}
                          />
                        </div>
                        <div className="col-span-1 sm:col-span-2">
                          <TextField
                            fullWidth
                            label="Subject"
                            variant="outlined"
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                color: "white",
                                "& fieldset": {
                                  borderColor: "rgba(255,255,255,0.2)",
                                },
                                "&:hover fieldset": {
                                  borderColor: "rgba(255,255,255,0.4)",
                                },
                                "&.Mui-focused fieldset": {
                                  borderColor: "#3b82f6",
                                },
                              },
                              "& .MuiInputLabel-root": {
                                color: "rgba(255,255,255,0.7)",
                              },
                            }}
                          />
                        </div>
                        <div className="col-span-1 sm:col-span-2">
                          <TextField
                            fullWidth
                            label="Message"
                            variant="outlined"
                            multiline
                            rows={4}
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                color: "white",
                                "& fieldset": {
                                  borderColor: "rgba(255,255,255,0.2)",
                                },
                                "&:hover fieldset": {
                                  borderColor: "rgba(255,255,255,0.4)",
                                },
                                "&.Mui-focused fieldset": {
                                  borderColor: "#3b82f6",
                                },
                              },
                              "& .MuiInputLabel-root": {
                                color: "rgba(255,255,255,0.7)",
                              },
                            }}
                          />
                        </div>
                      </div>
                      <Button
                        variant="contained"
                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 w-full"
                        size="large"
                      >
                        Send Message
                      </Button>
                    </Box>
                  </Paper>
                </motion.div>
              </div>
            </div>
          </Container>
        </Box>

        {/* Footer */}
        <Box className="py-8 bg-gray-900 border-t border-gray-800">
          <Container>
            <Box className="text-center">
              <Typography variant="body2" className="text-gray-400">
                © 2024 Rohan Sadhukhan. All rights reserved.
              </Typography>
            </Box>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Home;
