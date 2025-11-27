import React from "react";
import { Backdrop, CircularProgress, Typography, Stack } from "@mui/material";

const GlobalLoading = ({ isLoading = false, message = "Đang tải..." }) => {
  return (
    <Backdrop
      sx={{
        color: "#fff",
        zIndex: (theme) => theme.zIndex.drawer + 1,
        flexDirection: "column",
        gap: 2,
      }}
      open={isLoading}
    >
      <CircularProgress color="inherit" />

      {/* Hiển thị dòng chữ nếu cần */}
      <Typography variant="h6" component="div">
        {message}
      </Typography>
    </Backdrop>
  );
};

export default GlobalLoading;
