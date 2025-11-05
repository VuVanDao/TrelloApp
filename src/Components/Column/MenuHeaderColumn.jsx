import React, { useState } from "react";
import {
  Box,
  Collapse,
  Divider,
  List,
  ListSubheader,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { IoMdClose } from "react-icons/io";
import BoxIconCover from "../BoxIconCover";
import { LuArrowUpRight } from "react-icons/lu";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
const commonFontsize = "14px";
const MenuHeaderColumn = ({ anchorEl, setAnchorEl }) => {
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [openList, setOpenList] = useState(false);

  const handleClick = () => {
    setOpenList(!openList);
  };
  return (
    <>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
          },
        }}
        // autoFocus="false"
      >
        <ListSubheader sx={{ minWidth: "300px", maxWidth: "300px" }}>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box sx={{ opacity: 0 }}>a</Box>
            <Typography fontSize={"15px"} color="#44546f">
              List actions
            </Typography>
            <BoxIconCover hoverColor={"#d1d3d4"}>
              <IoMdClose
                style={{ color: "#44546f", fontSize: "15px" }}
                onClick={handleClose}
              />
            </BoxIconCover>
          </Box>
        </ListSubheader>
        <MenuItem onClick={handleClose}>
          <Typography fontSize={commonFontsize}>Add card</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography fontSize={commonFontsize}>Copy list</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography fontSize={commonFontsize}>Move list</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography fontSize={commonFontsize}>
            Move all cards in this list
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography fontSize={commonFontsize}>Sort by...</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography fontSize={commonFontsize}>Watch</Typography>
        </MenuItem>
        <Divider></Divider>
        <MenuItem onClick={handleClose}>
          <LuArrowUpRight />
          <Typography fontSize={commonFontsize} ml={1}>
            Add list from Jira work items
          </Typography>
        </MenuItem>
        <Divider></Divider>
        <MenuItem
          onClick={handleClick}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            pr: "20px",
          }}
        >
          <Typography fontSize={commonFontsize} color="#44546f">
            Automation
          </Typography>
          {openList ? (
            <MdOutlineKeyboardArrowUp />
          ) : (
            <MdOutlineKeyboardArrowDown />
          )}
        </MenuItem>

        <Collapse in={openList} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <MenuItem>
              <Typography fontSize={commonFontsize}>
                When a card is added to the list...
              </Typography>
            </MenuItem>
            <MenuItem>
              <Typography fontSize={commonFontsize}>
                Every day, sort by list...
              </Typography>
            </MenuItem>
            <MenuItem>
              <Typography fontSize={commonFontsize}>
                Every Monday, sort by list...
              </Typography>
            </MenuItem>
            <MenuItem>
              <Typography fontSize={commonFontsize}>Create a rule</Typography>
            </MenuItem>
          </List>
        </Collapse>
        <Divider></Divider>
        <MenuItem>
          <Typography fontSize={commonFontsize}>Archive this list</Typography>
        </MenuItem>
        <MenuItem>
          <Typography fontSize={commonFontsize}>
            Archive all cards in this list
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default MenuHeaderColumn;
