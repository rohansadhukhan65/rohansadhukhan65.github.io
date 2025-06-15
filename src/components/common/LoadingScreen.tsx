import React from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";

const CodeIcon: React.FC<{ delay: number }> = ({ delay }) => {

  return (
    <motion.div
      style={{
        width: "40px",
        height: "40px",
        borderRadius: "8px",
        backgroundColor: "#1a1a1a",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
      }}
      initial={{ y: 0, opacity: 0.2 }}
      animate={{
        y: [-20, 0, -20],
        opacity: [0.2, 1, 0.2],
        rotate: [0, 10, 0, -10, 0],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        delay: delay,
      }}
    >
      <motion.svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#60a5fa"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </motion.svg>
    </motion.div>
  );
};

const BracketIcon: React.FC<{ delay: number }> = ({ delay }) => {

  return (
    <motion.div
      style={{
        width: "40px",
        height: "40px",
        borderRadius: "8px",
        backgroundColor: "#1a1a1a",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
      }}
      initial={{ y: 0, opacity: 0.2 }}
      animate={{
        y: [-20, 0, -20],
        opacity: [0.2, 1, 0.2],
        rotate: [0, 5, 0, -5, 0],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        delay: delay,
      }}
    >
      <motion.span
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          color: "#a78bfa",
        }}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        {"{}"}
      </motion.span>
    </motion.div>
  );
};

const FunctionIcon: React.FC<{ delay: number }> = ({ delay }) => {

  return (
    <motion.div
      style={{
        width: "40px",
        height: "40px",
        borderRadius: "8px",
        backgroundColor: "#1a1a1a",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
      }}
      initial={{ y: 0, opacity: 0.2 }}
      animate={{
        y: [-20, 0, -20],
        opacity: [0.2, 1, 0.2],
        rotate: [0, -8, 0, 8, 0],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        delay: delay,
      }}
    >
      <motion.span
        style={{
          fontSize: "18px",
          fontWeight: "bold",
          color: "#f87171",
          fontFamily: '"Fira Code Variable", monospace',
        }}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        fn()
      </motion.span>
    </motion.div>
  );
};

const LoadingScreen: React.FC = () => {

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#111827",
        zIndex: 9999,
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <CodeIcon delay={0} />
        <BracketIcon delay={0.3} />
        <FunctionIcon delay={0.6} />
      </Box>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        style={{
          marginTop: "24px",
          fontFamily: '"Inter", sans-serif',
          color: "#9ca3af",
          fontSize: "14px",
          letterSpacing: "1px",
        }}
      >
        Loading ...
      </motion.div>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "120px" }}
        transition={{
          delay: 0.5,
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        style={{
          height: "3px",
          background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
          marginTop: "16px",
          borderRadius: "2px",
        }}
      />
    </Box>
  );
};

export default LoadingScreen;
