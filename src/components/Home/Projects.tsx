import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { projects } from "../../storage/Projects";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardMedia, Button, IconButton, Chip } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  return (
    <Box 
      id="projects" 
      className="py-24 bg-gradient-to-b from-gray-900 to-gray-800"
      sx={{ 
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)',
          pointerEvents: 'none'
        }
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <Typography 
            variant="h3" 
            className="font-bold text-center"
            sx={{ 
              position: 'relative',
              display: 'inline-block',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'linear-gradient(90deg, #fff, #a5b4fc)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-10px',
                left: '0',
                width: '40%',
                height: '3px',
                background: 'linear-gradient(90deg, #3b82f6, transparent)',
                borderRadius: '2px'
              }
            }}
          >
            My Projects
          </Typography>

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="body1"
              className="text-gray-300 max-w-2xl mx-auto text-center mt-24"
              sx={{ lineHeight: 1.8, letterSpacing: '0.01em' }}
            >
              Here are some of my recent projects that showcase my skills and
              expertise. Each project represents unique challenges and solutions.
            </Typography>
          </motion.div> */}
        </motion.div>

        <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <Card 
                className="h-full overflow-hidden"
                sx={{ 
                  backgroundColor: 'rgba(17, 24, 39, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(75, 85, 99, 0.3)',
                  borderRadius: '16px',
                  boxShadow: hoveredProject === project.id 
                    ? '0 20px 40px rgba(0,0,0,0.4), 0 0 20px rgba(59, 130, 246, 0.2)' 
                    : '0 10px 30px rgba(0,0,0,0.3)',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                }}
              >
                <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                    sx={{ 
                      transition: 'transform 0.8s ease',
                      transform: hoveredProject === project.id ? 'scale(1.05)' : 'scale(1)'
                    }}
                  />
                  <Box 
                    sx={{ 
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(17, 24, 39, 1) 100%)',
                      opacity: 0.6
                    }}
                  />
                </Box>
                
                <CardContent sx={{ padding: '1.5rem' }}>
                  <Typography
                    variant="h5"
                    component="div"
                    className="mb-3 font-bold"
                    sx={{ 
                      color: '#fff',
                      fontSize: '1.35rem',
                      position: 'relative',
                      display: 'inline-block',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: '-6px',
                        left: '0',
                        width: hoveredProject === project.id ? '100%' : '40%',
                        height: '2px',
                        background: 'linear-gradient(90deg, #3b82f6, transparent)',
                        transition: 'width 0.3s ease'
                      }
                    }}
                  >
                    {project.title}
                  </Typography>
                  
                  <Typography 
                    variant="body2" 
                    className="text-gray-300 mb-5"
                    sx={{ 
                      lineHeight: 1.7,
                      fontSize: '0.95rem',
                      opacity: 0.9
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
                            backgroundColor: 'rgba(59, 130, 246, 0.15)',
                            color: '#a5b4fc',
                            borderRadius: '4px',
                            fontSize: '0.7rem',
                            height: '24px',
                            '&:hover': {
                              backgroundColor: 'rgba(59, 130, 246, 0.25)',
                            }
                          }}
                        />
                      </motion.div>
                    ))}
                  </Box>
                  
                  <Box className="flex justify-between items-center">
                    <Box className="flex space-x-3">
                      <Button
                        size="small"
                        variant="outlined"
                        startIcon={<LaunchIcon sx={{ fontSize: 16 }} />}
                        sx={{
                          borderRadius: '8px',
                          textTransform: 'none',
                          borderColor: 'rgba(59, 130, 246, 0.5)',
                          color: '#60a5fa',
                          '&:hover': {
                            borderColor: '#60a5fa',
                            backgroundColor: 'rgba(59, 130, 246, 0.08)'
                          }
                        }}
                      >
                        Demo
                      </Button>
                      <Button
                        size="small"
                        variant="outlined"
                        startIcon={<GitHubIcon sx={{ fontSize: 16 }} />}
                        sx={{
                          borderRadius: '8px',
                          textTransform: 'none',
                          borderColor: 'rgba(168, 85, 247, 0.5)',
                          color: '#c084fc',
                          '&:hover': {
                            borderColor: '#c084fc',
                            backgroundColor: 'rgba(168, 85, 247, 0.08)'
                          }
                        }}
                      >
                        Code
                      </Button>
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
                              backgroundColor: 'rgba(59, 130, 246, 0.15)',
                              color: '#60a5fa',
                              '&:hover': {
                                backgroundColor: 'rgba(59, 130, 246, 0.25)',
                              }
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
          ))}
        </Box>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{
              background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
              borderRadius: '8px',
              padding: '10px 24px',
              textTransform: 'none',
              fontWeight: 600,
              boxShadow: '0 10px 20px rgba(59, 130, 246, 0.3)',
              '&:hover': {
                background: 'linear-gradient(90deg, #2563eb, #7c3aed)',
                boxShadow: '0 15px 25px rgba(59, 130, 246, 0.4)',
              }
            }}
          >
            View All Projects
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;
