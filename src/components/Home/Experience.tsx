import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { experiences } from "../../storage/Experience";

const Experience: React.FC = () => {
  return (
    <Box
      id="experience"
      className="py-20 bg-gray-900"
      sx={{
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "100%",
          backgroundImage:
            "radial-gradient(circle at 75% 25%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)",
          pointerEvents: "none",
        },
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
              position: "relative",
              display: "inline-block",
              left: "50%",
              transform: "translateX(-50%)",
              background: "linear-gradient(90deg, #fff, #a5b4fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: "-10px",
                left: "0",
                width: "40%",
                height: "3px",
                background: "linear-gradient(90deg, #3b82f6, transparent)",
                borderRadius: "2px",
              },
            }}
          >
            Experience
          </Typography>
        </motion.div>

        <Box
          sx={{
            position: "relative",
            maxWidth: "800px",
            margin: "0 auto",
            "&::before": {
              content: '""',
              position: "absolute",
              left: { xs: "20px", md: "50%" },
              transform: { xs: "translateX(0)", md: "translateX(-1px)" },
              width: "2px",
              height: "100%",
              backgroundColor: "rgba(59, 130, 246, 0.3)",
              borderRadius: "999px",
            },
          }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`mb-12 relative ${
                index % 2 === 0
                  ? "md:pr-8 md:text-right md:ml-0 md:mr-auto"
                  : "md:pl-8 md:text-left md:ml-auto md:mr-0"
              } w-full xs:w-[calc(100%-50px)] md:w-[45%] xs:ml-[50px] ${
                index % 2 === 0 ? "md:ml-0" : "md:ml-auto"
              }`}
            >
              <Box
                className="p-6 rounded-lg bg-gray-800 bg-opacity-60 backdrop-blur-sm border-l-2 border-blue-500/30"
                sx={{
                  boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                  transition: "all 0.3s ease",
                  borderRadius: "12px",
                  position: "relative",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow:
                      "0 15px 30px rgba(0,0,0,0.3), 0 0 10px rgba(59, 130, 246, 0.2)",
                  },
                }}
              >
                {/* Timeline connector dot */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    [index % 2 === 0 ? "right" : "left"]: {
                      xs: "auto",
                      md: "-42px",
                    },
                    left: {
                      xs: "-42px",
                      md: index % 2 === 0 ? "auto" : "-42px",
                    },
                    transform: "translateY(-50%)",
                    width: "18px",
                    height: "18px",
                    borderRadius: "50%",
                    backgroundColor: "#3b82f6",
                    zIndex: 2,
                    boxShadow: "0 0 0 4px rgba(59, 130, 246, 0.3)",
                  }}
                />

                <Typography
                  variant="h6"
                  className="mb-1 font-bold"
                  sx={{ color: "#fff" }}
                >
                  {exp.role}
                </Typography>

                <Typography
                  variant="subtitle1"
                  className="mb-2 font-medium"
                  sx={{ color: "#60a5fa" }}
                >
                  {exp.company}
                </Typography>

                <Typography variant="body2" className="text-gray-400 fira-code">
                  {exp.duration}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;
