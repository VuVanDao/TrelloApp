import { Box } from "@mui/material";
import React from "react";

const BoxIconCover = ({ children, hoverColor }) => {
  const common_box_style = {
    width: "33px",
    height: "33px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
    fontSize: "20px",
    "&:hover": {
      backgroundColor: `${hoverColor ? hoverColor : "#4788b4"}`,
    },
  };
  return (
    <>
      <Box className="cursor_pointer" sx={common_box_style}>
        {children}
      </Box>
    </>
  );
};

export default BoxIconCover;
