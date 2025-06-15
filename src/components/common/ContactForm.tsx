import React, { useState } from 'react'
import { Box, Container, Typography } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import { Email, LinkedIn, GitHub, Instagram, Facebook, Send } from '@mui/icons-material'
import { IconButton, TextField, Button, Paper, CircularProgress } from '@mui/material'

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      
      // Reset form state after showing success message
      setTimeout(() => {
        setFormSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <Box 
      id="contact" 
      className="py-24 bg-gray-800"
      sx={{ 
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: 'radial-gradient(circle at 10% 90%, rgba(59, 130, 246, 0.1), transparent 40%)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(124, 58, 237, 0.08) 0%, transparent 50%)',
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
          className="mb-16"
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
            Get In Touch
          </Typography>
          
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="body1"
              className="text-gray-300 max-w-2xl mx-auto text-center mt-6"
              sx={{ lineHeight: 1.8, letterSpacing: '0.01em' }}
            >
              Have a project in mind or want to collaborate? Feel free to
              reach out and let's create something amazing together!
            </Typography>
          </motion.div> */}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Box 
                sx={{ 
                  backdropFilter: 'blur(10px)',
                  backgroundColor: 'rgba(17, 24, 39, 0.6)',
                  borderRadius: '16px',
                  border: '1px solid rgba(75, 85, 99, 0.3)',
                  padding: '2rem',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <Typography 
                    variant="h5" 
                    className="mb-6 font-bold"
                    sx={{ 
                      background: 'linear-gradient(90deg, #60a5fa, #a78bfa)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Contact Information
                  </Typography>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Box className="space-y-6 mb-12">
                      <Box 
                        className="flex items-center space-x-4 p-3 rounded-lg"
                        sx={{ 
                          background: 'rgba(59, 130, 246, 0.1)',
                          border: '1px solid rgba(59, 130, 246, 0.2)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            background: 'rgba(59, 130, 246, 0.15)',
                            transform: 'translateY(-2px)'
                          }
                        }}
                      >
                        <Box 
                          sx={{ 
                            backgroundColor: 'rgba(59, 130, 246, 0.2)',
                            borderRadius: '50%',
                            width: 40,
                            height: 40,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <Email className="text-blue-400" />
                        </Box>
                        <Box>
                          <Typography variant="body2" className="text-gray-400">
                            Email
                          </Typography>
                          <Typography variant="body1" className="text-gray-100">
                            rohansadhukhan65@gmail.com
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </motion.div>
                </div>

                <div>
                  <Typography variant="h6" className="mb-4 font-bold text-gray-300">
                    Connect With Me
                  </Typography>
                  <Box className="flex space-x-3">
                    {[
                      { icon: <LinkedIn />, bg: '#0077B5', href: 'https://www.linkedin.com/in/rohan-sadhukhan-857b57217/' },
                      { icon: <GitHub />, bg: '#333', href: 'https://github.com/rohansadhukhan65' },
                      { icon: <Instagram />, bg: '#E4405F', href: '#' },
                      { icon: <Facebook />, bg: '#1877F2', href: '#' }
                    ].map((social, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      >
                        <IconButton
                          sx={{
                            backgroundColor: `${social.bg}20`,
                            color: social.bg,
                            '&:hover': {
                              backgroundColor: `${social.bg}40`,
                              boxShadow: `0 0 15px ${social.bg}60`
                            },
                            transition: 'all 0.3s ease'
                          }}
                          component="a"
                          href={social.href}
                          target="_blank"
                        >
                          {social.icon}
                        </IconButton>
                      </motion.div>
                    ))}
                  </Box>
                </div>
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
                elevation={0}
                sx={{
                  backdropFilter: 'blur(10px)',
                  backgroundColor: 'rgba(17, 24, 39, 0.6)',
                  borderRadius: '16px',
                  border: '1px solid rgba(75, 85, 99, 0.3)',
                  padding: '2rem',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <AnimatePresence>
                  {formSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 bg-opacity-95 z-10"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      >
                        <Box
                          sx={{
                            width: 80,
                            height: 80,
                            borderRadius: '50%',
                            backgroundColor: 'rgba(59, 130, 246, 0.2)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: 2
                          }}
                        >
                          <Send sx={{ fontSize: 40, color: '#60a5fa' }} />
                        </Box>
                      </motion.div>
                      <Typography variant="h6" className="font-bold text-center mb-2">
                        Message Sent Successfully!
                      </Typography>
                      <Typography variant="body2" className="text-gray-400 text-center">
                        I'll get back to you as soon as possible.
                      </Typography>
                    </motion.div>
                  ) : null}
                </AnimatePresence>

                <Typography 
                  variant="h5" 
                  className="mb-6 font-bold"
                  sx={{ 
                    background: 'linear-gradient(90deg, #60a5fa, #a78bfa)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Send Message
                </Typography>
                
                <Box component="form" className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {[
                      { label: "Name", gridSpan: 1 },
                      { label: "Email", gridSpan: 1 },
                      { label: "Subject", gridSpan: 2 },
                      { label: "Message", gridSpan: 2, multiline: true, rows: 4 }
                    ].map((field, index) => (
                      <motion.div 
                        key={field.label}
                        className={`col-span-1 sm:col-span-${field.gridSpan}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 * index }}
                        viewport={{ once: true }}
                      >
                        <TextField
                          fullWidth
                          label={field.label}
                          variant="outlined"
                          multiline={field.multiline}
                          rows={field.rows}
                          required
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              color: "white",
                              backgroundColor: "rgba(255,255,255,0.05)",
                              borderRadius: "10px",
                              "& fieldset": {
                                borderColor: "rgba(255,255,255,0.1)",
                                borderWidth: "1px",
                              },
                              "&:hover fieldset": {
                                borderColor: "rgba(96, 165, 250, 0.5)",
                              },
                              "&.Mui-focused fieldset": {
                                borderColor: "#60a5fa",
                                borderWidth: "1px",
                              },
                            },
                            "& .MuiInputLabel-root": {
                              color: "rgba(255,255,255,0.7)",
                            },
                            "& .Mui-focused .MuiInputLabel-root": {
                              color: "#60a5fa",
                            },
                          }}
                        />
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="contained"
                      type="submit"
                      disabled={isSubmitting}
                      sx={{
                        background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                        borderRadius: '10px',
                        padding: '12px 0',
                        textTransform: 'none',
                        fontWeight: 600,
                        width: '100%',
                        boxShadow: '0 10px 15px -3px rgba(59, 130, 246, 0.3)',
                        position: 'relative',
                        overflow: 'hidden',
                        '&:hover': {
                          background: 'linear-gradient(90deg, #2563eb, #7c3aed)',
                          boxShadow: '0 15px 20px -3px rgba(59, 130, 246, 0.4)',
                        },
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: '-100%',
                          width: '100%',
                          height: '100%',
                          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                          transition: 'all 0.6s ease',
                        },
                        '&:hover::after': {
                          left: '100%',
                        }
                      }}
                    >
                      {isSubmitting ? (
                        <CircularProgress size={24} sx={{ color: 'white' }} />
                      ) : (
                        <>Send Message</>
                      )}
                    </Button>
                  </motion.div>
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
