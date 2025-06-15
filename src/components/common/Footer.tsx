import React from "react";
import { Box, Container, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box className="py-8 bg-gray-900 border-t border-gray-800">
      <Container>
        <Box className="text-center">
          <Typography variant="body2" className="text-gray-400">
            © 2024 Rohan Sadhukhan. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
