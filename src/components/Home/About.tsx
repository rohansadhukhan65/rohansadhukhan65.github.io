import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Button } from "@mui/material";

// image
import aboutImage from "../../assets/img/about-me.png";

const About: React.FC = () => {
  return (
    <Box id="about" className="py-20 bg-gray-900">
      <Container>
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
            About Me
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
                src={aboutImage}
                alt="About Rohan"
                className="w-full h-[400px] object-cover rounded-lg shadow-xl"
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
                development, I specialize in creating scalable, efficient, and
                user-friendly applications. My passion lies in transforming
                ideas into digital solutions that make a difference.
              </Typography>
              <Typography variant="body1" className="text-gray-300 mb-6">
                I enjoy working on challenging projects that push my technical
                boundaries and allow me to explore innovative technologies. When
                I'm not coding, you'll find me exploring new tech trends,
                contributing to open source, or sharing knowledge with the
                community.
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
  );
};

export default About;
