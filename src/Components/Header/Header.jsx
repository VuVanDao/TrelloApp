import {
  Avatar,
  Box,
  Button,
  InputAdornment,
  TextField,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import { AiOutlineAppstore } from "react-icons/ai";
import { FaTrello } from "react-icons/fa";
import { AiFillNotification } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoApps } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { Suspense, lazy } from "react";
import BoxIconCover from "../BoxIconCover";
import MenuRightSideResponsive from "./MenuRightSideResponsive";
import { useSelector } from "react-redux";
const MenuLeftSide = lazy(() => import("./MenuLeftSide"));
const MenuRightSide = lazy(() => import("./MenuRightSide"));

const Header = () => {
  const [anchorElLeft, setAnchorElLeft] = useState(null);
  const [anchorElRight, setAnchorElRight] = useState(null);
  const [openMenuRightResponsive, setOpenMenuRightResponsive] = useState(false);
  const isMd = useMediaQuery("(min-width: 576px)"); // false < 576px < true : nhỏ hơn 576px là false , ngược lại là true
  const currAccount = useSelector((state) => state.accountReducer.accountState);

  const handleClick = (event, item, openMenuRes = false) => {
    if (openMenuRes) {
      setOpenMenuRightResponsive(true);
    }
    item === "left"
      ? setAnchorElLeft(event.currentTarget)
      : setAnchorElRight(event.currentTarget);
  };

  if (!isMd && anchorElRight && !openMenuRightResponsive) {
    setAnchorElRight(null);
  }

  if (isMd && openMenuRightResponsive) {
    setAnchorElRight(null);
    setOpenMenuRightResponsive(false);
  }
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: "10px 10px",
          backgroundColor: "primary.main",
          gap: "15px",
          height: (theme) => theme.trelloCustom.header_height,
          width: "100vw",
        }}
      >
        {/* left side */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            color: "secondary.main",
          }}
        >
          <BoxIconCover>
            <Tooltip title="More from Atlassian">
              <AiOutlineAppstore
                style={{ fontSize: "20px", color: "secondary.main" }}
                onClick={(e) => handleClick(e, "left")}
              />
            </Tooltip>
          </BoxIconCover>

          <Box
            className="cursor_pointer"
            sx={{ display: "flex", alignItems: "center", gap: "5px" }}
          >
            <FaTrello style={{ fontSize: "25px", color: "secondary.main" }} />
            <Typography>Trello</Typography>
          </Box>

          <Suspense>
            <MenuLeftSide
              anchorEl={anchorElLeft}
              setAnchorEl={setAnchorElLeft}
            />
          </Suspense>
        </Box>

        {/* middle side */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            width: {
              xs: "100px",
              md: "780px",
            },
            maxWidth: {
              xs: "100px",
              md: "780px",
            },
          }}
        >
          <TextField
            placeholder="Search"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <CiSearch style={{ color: "white" }} />
                  </InputAdornment>
                ),
              },
            }}
            sx={{
              width: {
                md: "100%",
                xs: "0px",
              },
              opacity: { xs: 0, md: 1 },
              "& .MuiInputBase-root": {
                height: "30px", // custom height
                color: "white", // text mặc định
                backgroundColor: "background_input_header.main",
              },
              "&:hover .MuiInputBase-root": {
                backgroundColor: "background_input_header.second",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "gray", // border mặc định
                },
                "&:hover fieldset": {
                  borderColor: "white", // border khi hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white", // border khi focus
                },
                "&.Mui-focused .MuiInputBase-input": {
                  color: "white", // text color khi focus
                },
              },
              "& .MuiInputLabel-root": {
                color: "gray", // label mặc định
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "white", // label khi focus
              },
            }}
          />
          <Button
            sx={{
              backgroundColor: "background_input_header.main",
              height: "30px",
              color: "secondary.main",
              textTransform: "lowercase",
              "&:hover": {
                backgroundColor: "background_input_header.second",
              },
            }}
          >
            Create
          </Button>
        </Box>

        {/* right side */}
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "flex",
            },
            alignItems: "center",
            gap: "12px",
            color: "secondary.main",
          }}
        >
          <BoxIconCover>
            <Tooltip title="Share your thoughts on Trello">
              <AiFillNotification
                style={{ fontSize: "20px", color: "secondary.main" }}
              />
            </Tooltip>
          </BoxIconCover>
          <BoxIconCover>
            <Tooltip title="notifications">
              <IoIosNotifications
                style={{ fontSize: "20px", color: "secondary.main" }}
              />
            </Tooltip>
          </BoxIconCover>
          <BoxIconCover>
            <Tooltip title="Information">
              <IoIosHelpCircleOutline
                style={{ fontSize: "20px", color: "secondary.main" }}
              />
            </Tooltip>
          </BoxIconCover>
          <BoxIconCover>
            <Tooltip title={currAccount?.username || "Account"}>
              <Avatar
                alt="User"
                sx={{ width: "25px", height: "25px" }}
                onClick={(e) => handleClick(e, "right")}
              />
            </Tooltip>
          </BoxIconCover>
        </Box>

        <Box
          sx={{
            display: {
              xs: "block",
              sm: "none",
            },
          }}
        >
          <BoxIconCover>
            <IoApps
              style={{ fontSize: "20px", color: "#ffffff" }}
              onClick={(e) => handleClick(e, "right", true)}
            />
          </BoxIconCover>
        </Box>
      </Box>
      <Suspense>
        {!isMd ? (
          <MenuRightSideResponsive
            anchorEl={anchorElRight}
            setAnchorEl={setAnchorElRight}
          ></MenuRightSideResponsive>
        ) : (
          <MenuRightSide
            anchorEl={anchorElRight}
            setAnchorEl={setAnchorElRight}
          />
        )}
      </Suspense>
    </>
  );
};

export default Header;
