import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { FileDownload } from "@mui/icons-material";
import { Link } from "react-router-dom";
const Nav: React.FC = () => {
  return (
    <Box
      component="nav"
      className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-sm"
    >
      <Container maxWidth="xl">
        <Box className="flex justify-between items-center py-4">
          <Typography variant="h5" className="font-bold fira-code">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Rohan Sadhukhan
            </span>
          </Typography>

          <Box className="hidden md:flex space-x-6 items-center">
            <Link
              to="/"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              to="/work-experience"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Work Experience
            </Link>
            <Link
              to="/projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </Link>
            <Button
              variant="outlined"
              startIcon={<FileDownload />}
              className="border-blue-500 text-blue-500 hover:bg-blue-500/10"
              href="/resume.pdf"
              download
            >
              Resume
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Nav;
