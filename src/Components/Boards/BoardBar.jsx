import { Avatar, Box, Button, Tooltip, Typography } from "@mui/material";
import { HiOutlineChartBar } from "react-icons/hi";
import { HiDotsHorizontal } from "react-icons/hi";
import { CgUserAdd } from "react-icons/cg";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { FaRegStar } from "react-icons/fa";
import { MdFilterList } from "react-icons/md";
import { TbSettingsAutomation } from "react-icons/tb";
import { GoRocket } from "react-icons/go";
import React from "react";
import BoxIconCover from "../BoxIconCover";

const BoardBar = ({ boardTitle }) => {
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
          width: "100vw",
        }}
      >
        {/* left */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "5px",
              p: "7px 13px",
              "&:hover": {
                backgroundColor: "#4788b4",
              },
            }}
            className="cursor_pointer"
          >
            {boardTitle}
          </Typography>
          <HiOutlineChartBar
            style={{ fontSize: "20px" }}
            className="cursor_pointer"
          />
        </Box>

        {/* right */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "13px" }}>
          <Tooltip title="điền tên tài khoản vào đây">
            <Avatar
              alt="User"
              sx={{
                width: "30px",
                height: "30px",
                display: {
                  xs: "none",
                  sm: "flex",
                },
              }}
              className="cursor_pointer"
            />
          </Tooltip>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "flex",
              },
              alignItems: "center",
              gap: "15px",
            }}
          >
            <BoxIconCover>
              <Tooltip title="Power-Ups">
                <GoRocket />
              </Tooltip>
            </BoxIconCover>
            <BoxIconCover>
              <Tooltip title="Automation">
                <TbSettingsAutomation />
              </Tooltip>
            </BoxIconCover>
          </Box>
          <BoxIconCover>
            <Tooltip title="Filter">
              <MdFilterList />
            </Tooltip>
          </BoxIconCover>

          <Box
            sx={{
              display: {
                xs: "none",
                sm: "flex",
              },
              alignItems: "center",
              gap: "15px",
            }}
          >
            <BoxIconCover>
              <Tooltip title="Click to star or unstar this board. Starred boards show up at the top of your boards list.">
                <FaRegStar />
              </Tooltip>
            </BoxIconCover>
            <BoxIconCover>
              <Tooltip title="Change visibility">
                <HiOutlineUserGroup />
              </Tooltip>
            </BoxIconCover>
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
              display: {
                xs: "none",
                sm: "flex",
              },
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
          <BoxIconCover>
            <HiDotsHorizontal />
          </BoxIconCover>
        </Box>
      </Box>
    </>
  );
};

export default BoardBar;
