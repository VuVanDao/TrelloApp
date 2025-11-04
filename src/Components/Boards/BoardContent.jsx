import { Box } from "@mui/material";
import React from "react";

const BoardContent = () => {
  return (
    <>
      <Box
        sx={{
          height: (theme) =>
            `calc(100vh - ${theme.trelloCustom.header_height} - ${theme.trelloCustom.board_bar_height})`,
        }}
      ></Box>
    </>
  );
};

export default BoardContent;
