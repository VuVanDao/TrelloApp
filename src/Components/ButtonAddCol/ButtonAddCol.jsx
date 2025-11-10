import { Box, Typography, useColorScheme } from "@mui/material";
import { IoAddSharp } from "react-icons/io5";
import React from "react";

const ButtonAddCol = () => {
  const { mode } = useColorScheme("light");

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          p: "7px 10px",
          borderRadius: "15px",
          gap: "10px",
          minWidth: (theme) => theme.trelloCustom.ColumnWidth,
          maxWidth: (theme) => theme.trelloCustom.ColumnWidth,
          maxHeight: "45px",
          minHeight: "45px",
          color: "white",
          backgroundColor: mode === "light" ? "#55a6de" : "#2e2e31",
          "&:hover": {
            backgroundColor: mode === "light" ? "#4b9fdd" : "#4d4d51",
          },
        }}
        className="cursor_pointer"
      >
        <IoAddSharp />
        <Typography fontSize={"15px"}>Add another list</Typography>
      </Box>
    </>
  );
};

export default ButtonAddCol;
