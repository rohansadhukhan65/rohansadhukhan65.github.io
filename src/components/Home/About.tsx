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
