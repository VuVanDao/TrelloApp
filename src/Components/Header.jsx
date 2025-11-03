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
          p: "10px 15px",
          backgroundColor: "primary.main",
          gap: "10px",
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
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
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
                backgroundColor: "#396cb1",
              },
              "&:hover .MuiInputBase-root": {
                backgroundColor: "#6b91c5",
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
              backgroundColor: "#396cb1",
              height: "30px",
              color: "secondary.main",
              textTransform: "lowercase",
              "&:hover": {
                backgroundColor: "#6b91c5",
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
            gap: "10px",
            color: "secondary.main",
          }}
        >
          <AiFillNotification
            style={{ fontSize: "20px", color: "secondary.main" }}
          />
          <IoIosNotifications
            style={{ fontSize: "20px", color: "secondary.main" }}
          />
          <IoIosHelpCircleOutline
            style={{ fontSize: "20px", color: "secondary.main" }}
          />
          <Avatar alt="User" sx={{ width: "20px", height: "20px" }} />
        </Box>
      </Box>
    </>
  );
};

export default Header;
