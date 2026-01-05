import React from "react";
import { Box, Typography, Card, CardActionArea, Chip } from "@mui/material";
import randomColor from "randomcolor";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
  addPinnedBoard,
  AddToRecentViewBoard,
  removePinnedBoard,
} from "~/apis";
import { useSelector } from "react-redux";

const BoardCard = ({
  title,
  bg,
  isTemplate,
  boardId,
  pinned,
  handleGetAllBoard,
}) => {
  const currAccount = useSelector((state) => state.accountReducer.accountState);
  const navigate = useNavigate();
  const handleAddToRecentView = async () => {
    await AddToRecentViewBoard(boardId, currAccount?._id);
  };
  const handlePinnedBoard = async (statusBoardPinned) => {
    if (statusBoardPinned) {
      await removePinnedBoard(boardId, currAccount?._id);
    } else {
      await addPinnedBoard(boardId, currAccount?._id);
    }
    handleGetAllBoard();
  };
  return (
    <>
      <Card
        sx={{
          height: 100,
          borderRadius: 1,
          position: "relative",
          bgcolor: "transparent",
          boxShadow: "none",
          "&:hover": { opacity: 0.9 },
        }}
        onClick={() => {
          handleAddToRecentView();
          navigate(`/boards/${boardId}`);
        }}
      >
        <CardActionArea sx={{ height: "100%", borderRadius: 1 }}>
          <Box
            sx={{
              height: "100%",
              width: "100%",
              background:
                bg?.includes("url") || bg?.includes("gradient")
                  ? bg
                  : randomColor(),
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor:
                !bg?.includes("url") && !bg?.includes("gradient")
                  ? bg
                  : randomColor(), // Fallback color
              p: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: isTemplate ? "space-between" : "flex-start",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                sx={{
                  color: "#fff",
                  textShadow: "0 1px 2px rgba(0,0,0,0.5)",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {title}
              </Typography>
              <Box
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.6)", // Màu trắng mờ (Glass effect)
                  backdropFilter: "blur(4px)",
                  p: "5px",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "25px",
                  height: "25px",
                  cursor: "pointer",
                  "&:hover  .pin_icon": {
                    transform: "scale(1.25)",
                    transition: "all 0.2s ease-in-out",
                  },
                }}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                {pinned ? (
                  <FaStar
                    style={{ color: "white" }}
                    className="pin_icon"
                    onClick={() => handlePinnedBoard(true)}
                  />
                ) : (
                  <FaRegStar
                    style={{ color: "white" }}
                    className="pin_icon"
                    onClick={() => handlePinnedBoard(false)}
                  />
                )}
              </Box>
            </Box>

            {isTemplate && (
              <Chip
                label="TEMPLATE"
                size="small"
                sx={{
                  alignSelf: "flex-end",
                  bgcolor: "rgba(255,255,255,0.8)",
                  color: "#000",
                  fontSize: "10px",
                  fontWeight: "bold",
                  height: 20,
                }}
              />
            )}
          </Box>
        </CardActionArea>
      </Card>
    </>
  );
};

export default BoardCard;
