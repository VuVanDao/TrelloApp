import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { createBoard } from "~/apis";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const ModalAddBoard = ({ open, setOpen, handleGetAllBoard }) => {
  const [type, setType] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const handleClose = () => {
    reset();
    setType("");
    setOpen(false);
  };

  const handleChange = (event) => {
    setType(event.target.value);
  };
  const onSubmit = (data) => {
    if (type === "") {
      toast.warn("Missing type of board");
      return;
    }
    const formData = { type, title: data.title, description: data.description };
    createBoard(formData)
      .then((res) => {
        reset();
        setType("");
        handleClose();
        handleGetAllBoard();
      })
      .catch((err) => {
        console.log("🚀 ~ onSubmit ~ err:", err);
      });
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            component={"form"}
            onSubmit={handleSubmit(onSubmit)}
            sx={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <TextField
              placeholder="Board title"
              id="outlined-basic"
              variant="outlined"
              sx={{
                "& .MuiInputBase-root": {
                  height: "40px", // custom height
                  color: (theme) =>
                    theme.palette.mode === "dark" ? "white" : "black", // text mặc định
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "gray", // border mặc định
                  },
                  "&:hover fieldset": {
                    borderColor: (theme) =>
                      theme.palette.mode === "dark" ? "white" : "black", // border khi hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: (theme) =>
                      theme.palette.mode === "dark" ? "white" : "black", // border khi focus
                  },
                  "&.Mui-focused .MuiInputBase-input": {
                    color: (theme) =>
                      theme.palette.mode === "dark" ? "white" : "black", // text color khi focus
                  },
                },
              }}
              {...register("title", {
                required: "required title",
                minLength: { value: 3, message: "at least 3 character" },
              })}
            />
            {errors.title && (
              <Typography color="warning">{errors.title.message}</Typography>
            )}

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type}
                label="Type"
                onChange={handleChange}
              >
                <MenuItem value={"public"}>Public</MenuItem>
                <MenuItem value={"private"}>Private</MenuItem>
              </Select>
            </FormControl>

            <TextField
              placeholder="Board title"
              id="outlined-basic"
              variant="outlined"
              multiline
              rows={4}
              sx={{
                "& .MuiInputBase-root": {
                  color: (theme) =>
                    theme.palette.mode === "dark" ? "white" : "black", // text mặc định
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "gray", // border mặc định
                  },
                  "&:hover fieldset": {
                    borderColor: (theme) =>
                      theme.palette.mode === "dark" ? "white" : "black", // border khi hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: (theme) =>
                      theme.palette.mode === "dark" ? "white" : "black", // border khi focus
                  },
                  "&.Mui-focused .MuiInputBase-input": {
                    color: (theme) =>
                      theme.palette.mode === "dark" ? "white" : "black", // text color khi focus
                  },
                },
              }}
              {...register("description")}
            />
            <Button
              type="submit"
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#dcdfe4" : "primary.main",
                color: (theme) =>
                  theme.palette.mode === "dark" ? "black" : "white",
              }}
            >
              Confirm
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default ModalAddBoard;
