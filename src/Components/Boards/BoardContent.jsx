import { Box } from "@mui/material";
import React from "react";
import ButtonAddCol from "../ButtonAddCol/ButtonAddCol";
import ListColumns from "../ListColumns/ListColumns";
import { mapOrder } from "~/utils/sort";

const BoardContent = ({ board }) => {
  const orderedColumns = mapOrder(board?.columns, board.columnOrderIds, "_id");
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
        <ListColumns columns={orderedColumns}></ListColumns>
        <ButtonAddCol></ButtonAddCol>
      </Box>
    </>
  );
};

export default BoardContent;
