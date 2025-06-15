import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { techStack } from '../../storage/TechStack'

const TechStack: React.FC = () => {
  return (
    <Box id="tech" className="py-20 bg-gray-800">
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
            Tech Stack
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
          {techStack.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Box 
                className="p-6 rounded-lg bg-gray-900 bg-opacity-60 backdrop-blur-sm border-l-2 border-blue-500/30 h-full"
                sx={{ 
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease'
                }}
              >
                <Typography
                  variant="h6"
                  className="mb-4 font-medium tracking-wide"
                  sx={{ color: '#60a5fa' }}
                >
                  {category.name}
                </Typography>
                
                <Box className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 * skillIndex }}
                      className="px-3 py-1.5 bg-gray-800/50 border border-gray-700/30 rounded-md text-sm text-gray-200 inline-block"
                    >
                      <span className="flex items-center backdrop-filter backdrop-blur-sm bg-white/5 rounded-full">
                        {skill}
                      </span>
                    </motion.span>
                  ))}
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default TechStack
