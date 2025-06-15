import React from 'react'
import { Box, Container, Typography, Button } from '@mui/material'
import { motion } from 'framer-motion'

import profile from '../../assets/img/profile.png'

const Header: React.FC = () => {
  return (
    <Box id="home" className="min-h-[90vh] flex items-center">
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        <div className="md:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="subtitle1"
              className="text-blue-400 mb-2 fira-code"
            >
              Hello, I'm
            </Typography>
            <Typography variant="h2" className="font-bold mb-3">
              Rohan Sadhukhan
            </Typography>
            <Typography
              variant="h4"
              className="text-gray-300 mb-6 fira-code"
            >
              Full Stack Developer
            </Typography>
            <Typography
              variant="body1"
              className="text-gray-400 mb-8 max-w-md my-3"
            >
              I build exceptional digital experiences with modern
              technologies. Specializing in creating robust applications
              that solve real-world problems.
            </Typography>
            <Box className="flex space-x-4 gap-2 mt-5">
              <Button
                variant="contained"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                href="#contact"
              >
                Get in Touch
              </Button>
              <Button
                variant="outlined"
                className="border-gray-500 text-white hover:bg-gray-800"
                href="#projects"
              >
                See My Work
              </Button>
            </Box>
          </motion.div>
        </div>
        <div className="md:col-span-5 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Box
              component="img"
              src={profile}
              alt="Rohan Sadhukhan"
              className="rounded-full w-96 h-96 object-cover border-4 border-blue-500/30"
            />
          </motion.div>
        </div>
      </div>
    </Container>
  </Box>
  )
}

export default Header
