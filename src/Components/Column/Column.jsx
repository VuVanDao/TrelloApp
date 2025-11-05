import { Box } from "@mui/material";
import React from "react";
import HeaderColumn from "./HeaderColumn";
import FooterColumn from "./FooterColumn";
import TrelloCard from "../TrelloCard/TrelloCard";

const Column = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "list_background.main",
          px: "5px",
          color: "black",
          borderRadius: "15px",
          minWidth: (theme) => theme.trelloCustom.ColumnWidth,
          maxWidth: (theme) => theme.trelloCustom.ColumnWidth,
          gap: "10px",
          height: "fit-content",
          maxHeight: (theme) =>
            `calc(100vh - ${
              theme.trelloCustom.boardContentHeight
            }  - ${theme.spacing(5)})`,
        }}
      >
        <HeaderColumn></HeaderColumn>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            overflowY: "auto",
            overflowX: "hidden",
            maxHeight: (theme) =>
              `calc(100vh - ${
                theme.trelloCustom.boardContentHeight
              }  - ${theme.spacing(5)} -  ${
                theme.trelloCustom.boardContentHeight
              })`,
            "&::-webkit-scrollbar": {
              width: "7px",
              height: "3px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#ced0da",
              borderRadius: "8px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "#bfc2cf",
            },
            p: "0px 7px",
          }}
        >
          <TrelloCard></TrelloCard>
        </Box>

        <FooterColumn></FooterColumn>
      </Box>
    </>
  );
};

export default Column;
