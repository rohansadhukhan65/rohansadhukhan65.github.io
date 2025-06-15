import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FileDownload, Menu as MenuIcon } from "@mui/icons-material";
import { Link } from "react-router";
import { motion } from "framer-motion";

const Nav: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMobile);
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  const navLinks = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Work Experience", path: "/work-experience" },
    { text: "Projects", path: "/projects" },
  ];

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const mobileDrawer = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      className="bg-gray-900 h-full"
    >
      <Box className="p-4">
        <Typography
          variant="h6"
          className="font-bold fira-code mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
        >
          Rohan Sadhukhan
        </Typography>
        <List>
          {navLinks.map((link, index) => (
            <motion.div
              key={link.text}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={listItemVariants}
            >
              <ListItemButton
                component={Link}
                to={link.path}
                className="text-white hover:text-white"
                sx={{ color: "white", "&:hover": { color: "white" } }}
              >
                <ListItemText primary={link.text} className="text-white" />
              </ListItemButton>
            </motion.div>
          ))}
          <motion.div
            custom={navLinks.length}
            initial="hidden"
            animate="visible"
            variants={listItemVariants}
          >
            <ListItem className="mt-4">
              <Button
                variant="outlined"
                startIcon={<FileDownload />}
                className="border-blue-500 text-blue-500 hover:bg-blue-500/10 w-full"
                href="/resume.pdf"
                download
              >
                Resume
              </Button>
            </ListItem>
          </motion.div>
        </List>
      </Box>
    </Box>
  );

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

          {/* Mobile menu icon - only show on mobile */}
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              className="text-gray-300"
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Desktop navigation - only show on desktop */}
          {!isMobile && (
            <Box className="flex space-x-6 items-center">
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
          )}
        </Box>
      </Container>

      {/* Mobile drawer */}
      {isMobile && (
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          {mobileDrawer}
        </Drawer>
      )}
    </Box>
  );
};

export default Nav;
