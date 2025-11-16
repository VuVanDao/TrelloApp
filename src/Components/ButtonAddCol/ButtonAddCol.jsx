import {
  Box,
  Button,
  TextField,
  Typography,
  useColorScheme,
} from "@mui/material";
import { IoAddSharp } from "react-icons/io5";
import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import BoxIconCover from "../BoxIconCover";
import { toast } from "react-toastify";
import { createNewColumn } from "~/apis";
import { useParams } from "react-router-dom";

const ButtonAddCol = ({ handleGetBoardDetail, test }) => {
  const { mode } = useColorScheme("light");
  let { boardId } = useParams();
  const [openFormAddColumn, SetOpenAddColumn] = useState(false);
  const [columnTitle, SetColumnTitle] = useState("");
  const toggleSetOpenFormAddColumn = () => {
    SetOpenAddColumn(!openFormAddColumn);
  };
  const handleCreateColumn = async () => {
    if (!columnTitle) {
      toast.warning("Missing data");
      return;
    }
    await createNewColumn({ title: columnTitle, boardIds: boardId })
      .then((res) => {
        handleGetBoardDetail(false);
        toggleSetOpenFormAddColumn();
      })
      .catch((err) => {
        console.log("🚀 ~ handleCreateColumn ~ err:", err);
      });
  };
  if (!openFormAddColumn) {
    return (
      <>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            p: "7px 10px",
            borderRadius: "15px",
            gap: "10px",
            minWidth: (theme) => theme.trelloCustom.ColumnWidth,
            maxWidth: (theme) => theme.trelloCustom.ColumnWidth,
            maxHeight: "45px",
            minHeight: "45px",
            color: "white",
            backgroundColor: mode === "light" ? "#55a6de" : "#2e2e31",
            "&:hover": {
              backgroundColor: mode === "light" ? "#4b9fdd" : "#4d4d51",
            },
          }}
          className="cursor_pointer"
          onClick={() => {
            toggleSetOpenFormAddColumn();
          }}
        >
          <IoAddSharp />
          <Typography fontSize={"15px"}>Add another list</Typography>
        </Box>
      </>
    );
  } else {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          backgroundColor: "list_background.main",
          color: "black",
          borderRadius: "15px",
          minWidth: (theme) => theme.trelloCustom.ColumnWidth,
          maxWidth: (theme) => theme.trelloCustom.ColumnWidth,
          height: "98px",
          p: "10px",
        }}
      >
        <TextField
          placeholder="Enter list name"
          autoFocus
          onChange={(e) => {
            SetColumnTitle(e.target.value);
          }}
          sx={{
            "& .MuiInputBase-root": {
              height: "35px", // custom height
              color: "black", // text mặc định
              backgroundColor: "white",
            },
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "white", // border khi focus
                border: "3px solid #4688ec",
              },
              "&.Mui-focused .MuiInputBase-input": {
                color: "black", // text color khi focus
              },
            },
          }}
        />
        <Box
          sx={{
            display: "flex",
            gap: "15px",
            alignItems: "center",
          }}
        >
          <Button
            sx={{
              backgroundColor: "common_color_btn.main",
              textTransform: "none",
              height: "30px",
            }}
            variant="contained"
            onClick={handleCreateColumn}
          >
            Add list
          </Button>
          <Button
            sx={{
              backgroundColor: "unset",
              color: "black",
              textTransform: "none",
              height: "30px",
            }}
            variant="contained"
            endIcon={<IoIosArrowDown style={{ fontSize: "15px" }} />}
          >
            Add from
          </Button>
          <BoxIconCover hoverColor={"#d1d3d4"}>
            <MdOutlineClose
              onClick={() => {
                toggleSetOpenFormAddColumn();
              }}
            />
          </BoxIconCover>
        </Box>
      </Box>
    );
  }
};

export default ButtonAddCol;
