import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import HeaderColumn from "./HeaderColumn";
import FooterColumn from "./FooterColumn";
import ListTrelloCards from "../ListTrelloCards/ListTrelloCards";
import { mapOrder } from "~/utils/sort";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { IoAddSharp } from "react-icons/io5";
import { PiImagesLight } from "react-icons/pi";
import BoxIconCover from "../BoxIconCover";
import { MdOutlineClose } from "react-icons/md";
import { LuLightbulb } from "react-icons/lu";
import { toast } from "react-toastify";
import { createNewCard } from "~/apis";
const Column = ({ column }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column._id,
    data: { ...column },
  });
  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
    height: "100%",
    opacity: isDragging ? 0.5 : 1,
  };
  const orderedCard = mapOrder(column?.cards, column?.cardOrderIds, "_id");
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

    console.log(
      `🚀 ~ handleCreateCard ~ { title: cardTitle, boardIds: column.boardIds }:`,
      { title: cardTitle, boardIds: column.boardIds, columnIds: column._id }
    );
    return;
    await createNewCard({ title: cardTitle, boardIds: column.boardIds })
      .then((res) => {
        console.log("🚀 ~ handleCreateCard ~ res:", res);
      })
      .catch((err) => {
        console.log("🚀 ~ handleCreateCard ~ err:", err);
      });
  };
  return (
    <div ref={setNodeRef} {...attributes} style={style}>
      <Box
        {...listeners}
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "list_background.main",
          px: "5px",
          color: "black",
          borderRadius: "15px",
          minWidth: (theme) => theme.trelloCustom.ColumnWidth,
          maxWidth: (theme) => theme.trelloCustom.ColumnWidth,
          gap: column?.cards?.length > 0 ? "7px" : "0px",
          height: "fit-content",
          maxHeight: (theme) =>
            `calc(100vh - ${
              theme.trelloCustom.boardContentHeight
            }  - ${theme.spacing(5)})`,
        }}
      >
        <HeaderColumn
          title={column.title}
          isDraggingColumn={isDragging}
        ></HeaderColumn>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            overflowY: "auto",
            overflowX: "hidden",
            maxHeight: (theme) =>
              `calc(100vh - ${
                theme.trelloCustom.boardContentHeight
              } - ${theme.spacing(5)} - ${
                theme.trelloCustom.boardContentHeight
              })`,
            "&::-webkit-scrollbar": {
              width: "7px",
              height: "3px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#ced0da",
              borderRadius: "8px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "#bfc2cf",
            },
            p: "3px 7px",
          }}
        >
          <ListTrelloCards cards={orderedCard}></ListTrelloCards>
        </Box>

        <FooterColumn
          columnID={column?._id}
          boardId={column?.boardIds}
        ></FooterColumn>
        {/* {!openAddCard ? (
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
        ) : (
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
        )} */}
      </Box>
    </div>
  );
};

export default Column;
