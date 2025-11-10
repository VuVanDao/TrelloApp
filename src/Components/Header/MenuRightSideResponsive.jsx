import React, { useState } from "react";
import { AiTwotoneNotification } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegCircleQuestion } from "react-icons/fa6";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
  MdOutlineSettingsSuggest,
} from "react-icons/md";
import {
  Avatar,
  Box,
  Collapse,
  Divider,
  FormControl,
  FormControlLabel,
  List,
  Menu,
  MenuItem,
  Radio,
  RadioGroup,
  Typography,
  useColorScheme,
  useMediaQuery,
} from "@mui/material";
const commonFontsize = "14px";

const MenuRightSideResponsive = ({ anchorEl, setAnchorEl }) => {
  const [openList, setOpenList] = useState(false);
  const { mode, setMode } = useColorScheme();

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  const handleClick = () => {
    setOpenList(!openList);
  };
  if (!mode) {
    return null;
  }
  const handleChange = (event) => {
    setMode(event.target.value);
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
        autoFocus={false}
      >
        <MenuItem sx={{ width: "300px" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <Avatar alt="done" sx={{ width: "30px", height: "30px" }}></Avatar>
            <Typography>Account</Typography>
          </Box>
        </MenuItem>
        <MenuItem>
          <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "30px",
                height: "30px",
              }}
            >
              <AiTwotoneNotification />
            </Box>
            <Typography>Feedback</Typography>
          </Box>
        </MenuItem>
        <MenuItem>
          <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "30px",
                height: "30px",
              }}
            >
              <IoMdNotificationsOutline />
            </Box>
            <Typography>Notifications</Typography>
          </Box>
        </MenuItem>
        <MenuItem>
          <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <Box
              sx={{
                width: "30px",
                height: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaRegCircleQuestion />
            </Box>
            <Typography>Information</Typography>
          </Box>
        </MenuItem>
        <Divider></Divider>
        <MenuItem onClick={handleClick}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                ml: "5px",
              }}
            >
              <MdOutlineSettingsSuggest style={{ fontSize: "20px" }} />
              <Typography>Theme</Typography>
            </Box>
            {openList ? (
              <MdOutlineKeyboardArrowUp />
            ) : (
              <MdOutlineKeyboardArrowDown />
            )}
          </Box>
        </MenuItem>
        <Collapse in={openList} timeout="auto" unmountOnExit>
          <FormControl
            sx={{ width: "100%", ml: "3px" }}
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={mode}
            onChange={handleChange}
          >
            <RadioGroup>
              <MenuItem sx={{ width: "100%" }}>
                <FormControlLabel
                  value="light"
                  control={<Radio />}
                  label="light"
                  sx={{ width: "100%" }}
                />
              </MenuItem>

              <MenuItem sx={{ width: "100%" }}>
                <FormControlLabel
                  value="dark"
                  control={<Radio />}
                  label="dark"
                  sx={{ width: "100%" }}
                />
              </MenuItem>

              <MenuItem sx={{ width: "100%" }}>
                <FormControlLabel
                  value="system"
                  control={<Radio />}
                  label="system"
                  sx={{ width: "100%" }}
                />
              </MenuItem>
            </RadioGroup>
          </FormControl>
        </Collapse>
      </Menu>
    </>
  );
};

export default MenuRightSideResponsive;
