import { Box, Typography } from "@mui/material";
import { IoAddSharp } from "react-icons/io5";
import React from "react";

const ButtonAddCol = () => {
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
          backgroundColor: "#55a6de",
          "&:hover": {
            backgroundColor: "#4b9fdd",
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
