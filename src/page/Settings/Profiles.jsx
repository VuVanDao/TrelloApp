import React from "react";
import {
  Box,
  Typography,
  Divider,
  TextField,
  Button,
  Link,
  IconButton,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import PublicIcon from "@mui/icons-material/Public";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { updateAccountInfoRedux } from "~/utils/Redux/AccountSlice";
import { useNavigate } from "react-router-dom";

const Profiles = () => {
  const currAccount = useSelector((state) => state.accountReducer.accountState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    dispatch(
      updateAccountInfoRedux({
        data: { username: data?.username, bio: data?.bio },
        id: currAccount?._id,
      })
    );
  };

  return (
    <Box sx={{ p: 3, maxWidth: "800px", margin: "0 auto" }}>
      {/* Header Buttons */}
      <Box
        sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}
        onClick={() => {
          navigate("/boards");
        }}
      >
        <IconButton sx={{ color: "#9fadbc" }}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{
          mb: 3,
          color: (theme) =>
            theme.palette.mode === "dark" ? "#b6c2cf" : "black",
        }}
      >
        Profile and Visibility
      </Typography>

      {/* Banner */}
      <Box
        sx={{
          width: "100%",
          height: 160,
          bgcolor: "#fce4ec",
          backgroundImage:
            "linear-gradient(45deg, #fff0f5 25%, #f8bbd0 25%, #f8bbd0 50%, #fff0f5 50%, #fff0f5 75%, #f8bbd0 75%, #f8bbd0 100%)",
          backgroundSize: "40px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 2,
          mb: 4,
        }}
      >
        <img
          src="https://trello.com/assets/eff3d701a9c3a71105ea.svg"
          style={{ width: "100%", height: "100%", backgroundSize: "contain" }}
        ></img>
      </Box>

      {/* Manage Info */}
      <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
        Manage your personal information
      </Typography>

      <Box
        sx={{
          bgcolor: "#22272b",
          p: 2,
          borderRadius: 1,
          mb: 4,
          border: "1px solid #384148",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            mb: 1.5,
            color: "#fff",
          }}
        >
          This is an Atlassian account. Edit your personal information and
          visibility settings through your{" "}
          <Link
            href="#"
            underline="hover"
            sx={{
              color: "blue",
            }}
          >
            Atlassian profile
          </Link>
          .
        </Typography>
      </Box>

      {/* About Form */}
      <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
        About
      </Typography>
      <Divider
        sx={{
          mb: 3,
          borderColor: (theme) =>
            theme.palette.mode === "dark" ? "rgba(255,255,255,0.1)" : "black",
        }}
      />

      <Typography variant="body2" sx={{ mb: 3, color: "#9fadbc" }}>
        Required fields are marked with an asterisk{" "}
        <span style={{ color: "#f44336" }}>*</span>
      </Typography>

      <Box component={"form"} onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography variant="subtitle2" fontWeight="bold">
              Username <span style={{ color: "#f44336" }}>*</span>
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                color: "#9fadbc",
              }}
            >
              <PublicIcon sx={{ fontSize: 14 }} />
              <Typography variant="caption">Always public</Typography>
            </Box>
          </Box>
          <TextField
            fullWidth
            defaultValue={currAccount?.username}
            size="small"
            variant="outlined"
            {...register("username")}
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#22272b" : "#fff",
              "& fieldset": {
                borderColor: (theme) =>
                  theme.palette.mode === "dark" ? "#738496" : "#ccc",
              },
              "&:hover fieldset": {
                borderColor: (theme) =>
                  theme.palette.mode === "dark" ? "#8c9bab" : "#999",
              },
              "&.Mui-focused fieldset": {
                borderColor: (theme) => theme.palette.primary.main,
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: (theme) =>
                    theme.palette.mode === "dark" ? "#fff" : "#738496", // border khi focus
                },
              },
            }}
          />
        </Box>

        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography variant="subtitle2" fontWeight="bold">
              Bio
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                color: "#9fadbc",
              }}
            >
              <PublicIcon sx={{ fontSize: 14 }} />
              <Typography variant="caption">Always public</Typography>
            </Box>
          </Box>
          <TextField
            fullWidth
            multiline
            rows={4}
            size="small"
            variant="outlined"
            defaultValue={currAccount?.bio}
            {...register("bio")}
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#22272b" : "#fff",
              "& fieldset": {
                borderColor: (theme) =>
                  theme.palette.mode === "dark" ? "#738496" : "#ccc",
              },
              "&:hover fieldset": {
                borderColor: (theme) =>
                  theme.palette.mode === "dark" ? "#8c9bab" : "#999",
              },
              "&.Mui-focused fieldset": {
                borderColor: (theme) => theme.palette.primary.main,
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: (theme) =>
                    theme.palette.mode === "dark" ? "#fff" : "#738496", // border khi focus
                },
              },
            }}
          />
        </Box>
        <Button
          variant="contained"
          type="submit"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#fff" : "black",
            color: (theme) =>
              theme.palette.mode === "dark" ? "black" : "#fff",
          }}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default Profiles;
