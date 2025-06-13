import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  IconButton,
  Snackbar,
} from "@mui/material";
import {
  GitHub,
  LinkedIn,
  Email,
  Close as CloseIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const Construct: React.FC = () => {
  const [email, setEmail] = useState("");
  const [snackbar, setSnackbar] = useState({ open: false, message: "" });

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setSnackbar({
        open: true,
        message: "Thank you! I'll notify you when the site launches.",
      });
      setEmail("");
    } else {
      setSnackbar({
        open: true,
        message: "Please enter a valid email address.",
      });
    }
  };

  const socialLinks = [
    {
      icon: <GitHub />,
      url: "https://github.com/rohansadhukhan65",
      label: "GitHub",
    },
    {
      icon: <LinkedIn />,
      url: "https://www.linkedin.com/in/rohan-sadhukhan-857b57217/",
      label: "LinkedIn",
    },
    {
      icon: <Email />,
      url: "mailto:rohansadhukhan65@gmail.com",
      label: "Email",
    },
  ];

  return (
    <Box className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12 text-center"
        >
          {/* Main Heading */}
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Typography
              variant="h2"
              component="h1"
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-bold mb-2"
              sx={{ fontFamily: "Fira Code" }}
            >
              Coming Soon
            </Typography>
          </motion.div>

          {/* Subtitle */}
          <Typography
            variant="h5"
            className="text-gray-300 mx-auto"
            sx={{ fontFamily: "Fira Code" }}
          >
            Crafting something amazing for you. My portfolio website is under
            construction.
          </Typography>

          {/* Progress Indicator */}
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "60%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"
          />

          {/* Notification Form */}
          <Box
            component="form"
            onSubmit={handleNotify}
            className="max-w-md mx-auto space-y-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm"
          >
            <Typography variant="body1" className="text-gray-300 mb-4">
              Want to know when it's ready?
            </Typography>
            <Box className="flex gap-2">
              <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                variant="outlined"
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    color: "white",
                    "& fieldset": { borderColor: "rgba(255,255,255,0.2)" },
                    "&:hover fieldset": {
                      borderColor: "rgba(255,255,255,0.4)",
                    },
                    "&.Mui-focused fieldset": { borderColor: "#6366f1" },
                  },
                  "& input::placeholder": { color: "rgba(255,255,255,0.5)" },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                className=" bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 normal-case"
              >
                Notify Me
              </Button>
            </Box>
          </Box>

          {/* Social Links */}
          <Box className="flex justify-center gap-6">
            {socialLinks.map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconButton
                  component="a"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {link.icon}
                </IconButton>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>

      {/* Notification Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        message={snackbar.message}
        action={
          <IconButton
            size="small"
            color="inherit"
            onClick={() => setSnackbar({ ...snackbar, open: false })}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </Box>
  );
};

export default Construct;
