import {
  Avatar,
  Box,
  Divider,
  ListSubheader,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
  useColorScheme,
} from "@mui/material";
import { BiGroup } from "react-icons/bi";
import { CiShare1 } from "react-icons/ci";
import { MdKeyboardArrowRight } from "react-icons/md";
import React, { lazy, Suspense, useState } from "react";
const MenuThemeHeader = lazy(() => import("./MenuThemeHeader"));

const MenuRightSide = ({ anchorEl, setAnchorEl }) => {
  const { mode } = useColorScheme();
  const open = Boolean(anchorEl);
  const [anchorElChild, setAnchorElChild] = useState(null);
  const openChild = Boolean(anchorElChild);

  const handleClose = () => {
    setAnchorEl(null);
    handleCloseChild();
  };

  const handleOpenChild = (event) => {
    setAnchorElChild(event.currentTarget);
  };

  const handleCloseChild = () => {
    setAnchorElChild(null);
  };
  if (!anchorEl) {
    handleCloseChild();
  }

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
        <ListSubheader
          sx={{ width: "300px" }}
          onClick={handleClose}
          style={{
            backgroundColor: mode === "light" ? "#fff" : "#2e2e2e",
          }}
        >
          <Typography color="#92959a">Account </Typography>
        </ListSubheader>
        <MenuItem onClick={handleClose}>
          <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <Avatar sx={{ width: "40px", height: "40px" }} alt="user"></Avatar>
            <Box sx={{ height: "46px" }}>
              <Typography>username</Typography>
              <Typography sx={{ fontSize: "13px" }}>email@gmail.com</Typography>
            </Box>
          </Box>
        </MenuItem>
        <MenuItem onClick={handleClose}>Switch accounts</MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography>Manage accounts</Typography>
          <CiShare1 />
        </MenuItem>
        <Divider></Divider>
        <MenuItem>
          <Typography color="#92959a">Trello</Typography>
        </MenuItem>
        <MenuItem>
          <Typography>Profile and visibility</Typography>
        </MenuItem>
        <MenuItem>
          <Typography>Activity</Typography>
        </MenuItem>
        <MenuItem>
          <Typography>Cards</Typography>
        </MenuItem>
        <MenuItem>
          <Typography>Settings</Typography>
        </MenuItem>
        <MenuItem
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          onMouseDown={handleOpenChild}
        >
          <Typography>Theme</Typography>
          <MdKeyboardArrowRight />

          <Suspense>
            <Tooltip placement="left" title="theme">
              <MenuThemeHeader
                anchorElChild={anchorElChild}
                handleCloseChild={handleCloseChild}
                openChild={openChild}
              ></MenuThemeHeader>
            </Tooltip>
          </Suspense>
        </MenuItem>
        <Divider></Divider>
        <MenuItem onClick={handleClose}>
          <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <BiGroup style={{ fontSize: "20px" }} />
            <Typography>Create Workspace</Typography>
          </Box>
        </MenuItem>
        <Divider></Divider>
        <MenuItem>
          <Typography>Help</Typography>
        </MenuItem>
        <MenuItem>
          <Typography>Shortcuts</Typography>
        </MenuItem>
        <Divider></Divider>
        <MenuItem>
          <Typography>Logout</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default MenuRightSide;
