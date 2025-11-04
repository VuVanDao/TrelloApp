import { Avatar, Box, Button, Typography } from "@mui/material";
import { HiOutlineChartBar } from "react-icons/hi";
import { HiDotsHorizontal } from "react-icons/hi";
import { CgUserAdd } from "react-icons/cg";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { FaRegStar } from "react-icons/fa";
import { MdFilterList } from "react-icons/md";
import { TbSettingsAutomation } from "react-icons/tb";
import { GoRocket } from "react-icons/go";
import React from "react";

const BoardBar = () => {
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
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: "10px 20px",
          backgroundColor: "board_bar.main",
          gap: "15px",
          borderTop: "0.5px solid white",
          color: "white",
          height: (theme) => theme.trelloCustom.board_bar_height,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Typography>Board name</Typography>
          <HiOutlineChartBar style={{ fontSize: "20px" }} />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "13px" }}>
          <Avatar
            alt="User"
            sx={{ width: "30px", height: "30px" }}
            className="cursor_pointer"
          />
          <Box className="cursor_pointer" sx={common_box_style}>
            <GoRocket />
          </Box>
          <Box className="cursor_pointer" sx={common_box_style}>
            <TbSettingsAutomation />
          </Box>
          <Box className="cursor_pointer" sx={common_box_style}>
            <MdFilterList />
          </Box>
          <Box className="cursor_pointer" sx={common_box_style}>
            <FaRegStar />
          </Box>
          <Box className="cursor_pointer" sx={common_box_style}>
            <HiOutlineUserGroup />
          </Box>
          <Button
            sx={{
              backgroundColor: "#dcdfe4",
              height: "30px",
              color: "black",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "white",
              },
              display: "flex",
              alignItems: "center",
              gap: "5px",
              pr: "12px",
              pl: "8px",
              py: "16.5px",
            }}
          >
            <CgUserAdd style={{ fontSize: "20px" }} />
            Share
          </Button>
          <Box className="cursor_pointer" sx={common_box_style}>
            <HiDotsHorizontal />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default BoardBar;
