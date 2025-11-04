import { Box } from "@mui/material";
import React from "react";
const common_box_style = {
  width: "33px",
  height: "33px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "5px",
  fontSize: "20px",
  "&:hover": {
    backgroundColor: "#4788b4",
  },
};
const BoxIconCover = ({ children }) => {
  return (
    <>
      <Box className="cursor_pointer" sx={common_box_style}>
        {children}
      </Box>
    </>
  );
};

export default BoxIconCover;
