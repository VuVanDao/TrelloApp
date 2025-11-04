import { Box, Divider, Menu, MenuItem, Typography } from "@mui/material";
import { FaTrello } from "react-icons/fa";
import { MdHomeFilled } from "react-icons/md";

import React from "react";

const MenuLeftSide = ({ anchorEl, setAnchorEl }) => {
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
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
      >
        <MenuItem sx={{ width: "300px" }} onClick={handleClose}>
          <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <Box
              sx={{
                width: "33px",
                height: "33px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "5px",
                fontSize: "20px",
                backgroundColor: "#dddee1",
              }}
            >
              <MdHomeFilled style={{ fontSize: "20px" }} />
            </Box>
            <Typography>Home</Typography>
          </Box>
        </MenuItem>
        <MenuItem sx={{ width: "300px" }} onClick={handleClose}>
          <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <Box
              sx={{
                width: "33px",
                height: "33px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "5px",
                fontSize: "20px",
                backgroundColor: "#dddee1",
              }}
            >
              <FaTrello style={{ fontSize: "25px" }} />
            </Box>
            <Typography>Trello</Typography>
          </Box>
        </MenuItem>
        <Divider></Divider>
      </Menu>
    </>
  );
};

export default MenuLeftSide;
