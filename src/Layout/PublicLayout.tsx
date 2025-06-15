import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import SEO from "../components/common/SEO";

const PublicLayout: React.FC = () => {
  return (
    <Box className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen text-white">
      <SEO />
      <Outlet />
    </Box>
  );
};

export default PublicLayout;
