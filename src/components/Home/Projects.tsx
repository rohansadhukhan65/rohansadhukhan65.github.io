import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { projects } from "../../storage/Projects";
import { motion } from "framer-motion";
import { Card, CardContent, CardMedia, Button } from "@mui/material";

const Projects: React.FC = () => {
  return (
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
            expertise. Each project represents unique challenges and solutions.
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
                  <Typography variant="body2" className="text-gray-300 mb-4">
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
  );
};

export default Projects;
