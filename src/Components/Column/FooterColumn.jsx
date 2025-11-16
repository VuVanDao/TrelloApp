import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { IoAddSharp } from "react-icons/io5";
import { PiImagesLight } from "react-icons/pi";
import BoxIconCover from "../BoxIconCover";
import { MdOutlineClose } from "react-icons/md";
import { LuLightbulb } from "react-icons/lu";
import { toast } from "react-toastify";
import { createNewCard } from "~/apis";
const FooterColumn = ({ columnID, boardId, handleGetBoardDetail }) => {
  const [openAddCard, SetOpenAddCard] = useState(false);
  const [cardTitle, setCardTitle] = useState("");
  const toggleSetOpenFormAddCard = () => {
    SetOpenAddCard(!openAddCard);
  };
  const handleCreateCard = async () => {
    if (!cardTitle) {
      toast.warning("Missing data");
      return;
    }

    await createNewCard({
      title: cardTitle,
      boardIds: boardId,
      columnIds: columnID,
    })
      .then((res) => {
        console.log("🚀 ~ handleCreateCard ~ res:", res);
        handleGetBoardDetail();
        toggleSetOpenFormAddCard();
      })
      .catch((err) => {
        console.log("🚀 ~ handleCreateCard ~ err:", err);
      });
  };
  if (!openAddCard) {
    return (
      <>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "5px",
            p: "0px 10px 10px 7px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              p: "7px 10px",
              borderRadius: "5px",
              width: "90%",
              gap: "5px",
              "&:hover": {
                backgroundColor: "#d1d3d4",
              },
            }}
            className="cursor_pointer"
            onClick={toggleSetOpenFormAddCard}
          >
            <IoAddSharp />
            <Typography fontSize={"15px"}>Add a card</Typography>
          </Box>
          <BoxIconCover hoverColor={"#d1d3d4"}>
            <PiImagesLight style={{ fontSize: "15px" }} />
          </BoxIconCover>
        </Box>
      </>
    );
  } else {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          p: "0px 10px 10px 7px",
        }}
      >
        <TextField
          placeholder="Enter title or paste a link"
          autoFocus
          data-no-dnd="true"
          onChange={(e) => {
            setCardTitle(e.target.value);
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
            onClick={handleCreateCard}
          >
            Add card
          </Button>
          <Button
            sx={{
              backgroundColor: "unset",
              color: "black",
              textTransform: "none",
              height: "30px",
            }}
            variant="contained"
            startIcon={<LuLightbulb style={{ fontSize: "15px" }} />}
          >
            Tips
          </Button>
          <BoxIconCover hoverColor={"#d1d3d4"}>
            <MdOutlineClose
              onClick={() => {
                toggleSetOpenFormAddCard();
              }}
            />
          </BoxIconCover>
        </Box>
      </Box>
    );
  }
};

export default FooterColumn;
