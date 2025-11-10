import { Box, useColorScheme } from "@mui/material";
import React from "react";

const BoxIconCover = ({ children, hoverColor }) => {
  const { mode } = useColorScheme("light");

  const common_box_style = {
    width: "33px",
    height: "33px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
    fontSize: "20px",
    "&:hover": {
      backgroundColor: `${
        hoverColor ? hoverColor : mode === "light" ? "#4788b4" : "#4d4d51"
      }`,
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
