import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

const LoadingPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh", // Chiều cao full màn hình
        width: "100vw",
        backgroundColor: "#f5f5f5", // Màu nền nhẹ dịu mắt
      }}
    >
      {/* Bạn có thể thay CircularProgress bằng Logo của dự án với animation xoay */}
      <CircularProgress size={60} thickness={4} color="primary" />

      <Typography
        variant="body1"
        sx={{ marginTop: 2, color: "text.secondary", fontWeight: 500 }}
      >
        Loading...
      </Typography>
    </Box>
  );
};

export default LoadingPage;
