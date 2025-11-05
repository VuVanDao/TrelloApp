import { Box } from "@mui/material";
import React from "react";
import Column from "../Column/Column";

const BoardContent = () => {
  return (
    <>
      <Box
        sx={{
          height: (theme) =>
            `calc(100vh - ${theme.trelloCustom.header_height} - ${theme.trelloCustom.board_bar_height})`,
          backgroundColor: "board_content.main",
          display: "flex",
          gap: "15px",
          p: "15px",
          width: "100vw",
          overflowX: "scroll",
        }}
      >
        <Column></Column>
        <Column></Column>
        <Column></Column>
      </Box>
    </>
  );
};

export default BoardContent;
