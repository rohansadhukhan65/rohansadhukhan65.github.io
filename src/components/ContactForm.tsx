import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { Email, LinkedIn, GitHub, Instagram, Facebook } from '@mui/icons-material'
import { IconButton, TextField, Button, Paper } from '@mui/material'

const ContactForm : React.FC = () => {
  return (
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
  )
}

export default ContactForm
