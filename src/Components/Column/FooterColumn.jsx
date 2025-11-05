import { Box, Typography } from "@mui/material";
import React from "react";
import { IoAddSharp } from "react-icons/io5";
import { PiImagesLight } from "react-icons/pi";
import BoxIconCover from "../BoxIconCover";
const FooterColumn = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "5px",
          p: "0px 10px 10px 10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            p: "7px",
            borderRadius: "5px",
            width: "90%",
            gap: "5px",
            "&:hover": {
              backgroundColor: "#d1d3d4",
            },
          }}
          className="cursor_pointer"
        >
          <IoAddSharp style={{ fontSize: "15px" }} />
          <Typography fontSize={"15px"}>Add a card</Typography>
        </Box>
        <BoxIconCover hoverColor={"#d1d3d4"}>
          <PiImagesLight style={{ fontSize: "15px" }} />
        </BoxIconCover>
      </Box>
    </>
  );
};

export default FooterColumn;
