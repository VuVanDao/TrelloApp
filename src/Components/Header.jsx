import {
  Avatar,
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { AiOutlineAppstore } from "react-icons/ai";
import { FaTrello } from "react-icons/fa";
import { AiFillNotification } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

const Header = () => {
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
          <AiOutlineAppstore
            style={{ fontSize: "20px", color: "secondary.main" }}
          />
          <Box
            sx={{ display: "flex", alignItems: "center", gap: "5px" }}
            className="cursor_pointer"
          >
            <FaTrello style={{ fontSize: "25px", color: "secondary.main" }} />
            <Typography>Trello</Typography>
          </Box>
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
            display: "flex",
            alignItems: "center",
            gap: "15px",
            color: "secondary.main",
          }}
        >
          <AiFillNotification
            style={{ fontSize: "20px", color: "secondary.main" }}
            className="cursor_pointer"
          />
          <IoIosNotifications
            style={{ fontSize: "20px", color: "secondary.main" }}
            className="cursor_pointer"
          />
          <IoIosHelpCircleOutline
            style={{ fontSize: "20px", color: "secondary.main" }}
            className="cursor_pointer"
          />
          <Avatar
            alt="User"
            sx={{ width: "25px", height: "25px" }}
            className="cursor_pointer"
          />
        </Box>
      </Box>
    </>
  );
};

export default Header;
