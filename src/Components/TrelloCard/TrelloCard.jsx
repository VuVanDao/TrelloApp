import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Tooltip,
  Typography,
  useColorScheme,
} from "@mui/material";
import { FaUserFriends, FaCommentAlt } from "react-icons/fa";
import { GrAttachment } from "react-icons/gr";
import React, { lazy, Suspense, useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { FiEdit } from "react-icons/fi";
// import MenuTrelloCard from "./MenuTrelloCard";
const MenuTrelloCard = lazy(() => import("./MenuTrelloCard"));
const TrelloCard = ({ card }) => {
  const { mode } = useColorScheme();
  const [hoverCard, setHoverCard] = useState(false);
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: card._id,
    data: { ...card },
  });
  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    border: isDragging ? "1px solid black" : undefined,
    borderRadius: isDragging ? "4px" : undefined,
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <div ref={setNodeRef} {...attributes} {...listeners} style={style}>
      <Card
        sx={{
          minWidth: (theme) => theme.trelloCustom.CardWidth,
          "& .MuiCardContent-root": {
            p: "8px 10px",
          },
          "& .MuiCardActions-root": {
            p: "0px 5px",
          },
          cursor: "pointer",
          overflow: "unset",
          display: card?.FE_placeholder_card ? "none" : "block",
          border: "2px solid transparent",
          ":hover": {
            borderColor: mode === "light" ? "#4688ec" : "#ceb8b8",
          },
        }}
        onMouseOver={() => setHoverCard(true)}
        onMouseLeave={() => setHoverCard(false)}
      >
        {card?.cover && (
          <CardMedia
            component={"img"}
            alt="image"
            image={card?.cover}
            sx={{
              maxWith: "246px",
              minWidth: "246px",
              maxHeight: "257px",
              borderTopLeftRadius: "4px",
              borderTopRightRadius: "4px",
            }}
          ></CardMedia>
        )}

        <CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography fontSize={"15px"}>{card?.title}</Typography>
            {hoverCard && (
              <Tooltip title="Edit">
                <Box
                  sx={{
                    width: "23px",
                    height: "23px",
                    borderRadius: "5px",
                    "&:hover": {
                      backgroundColor: "#d1d3d4",
                    },
                    textAlign: "center",
                  }}
                  onClick={handleClick}
                >
                  <FiEdit style={{ fontSize: "13px" }} />
                </Box>
              </Tooltip>
            )}
          </Box>
        </CardContent>
        <CardActions>
          {card?.memberIds && card?.memberIds?.length > 0 && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                px: "5px",
                pb: "10px",
                pt: 0,
              }}
            >
              <FaUserFriends style={{ fontSize: "15px" }} />
              <Typography>{card?.memberIds?.length}</Typography>
            </Box>
          )}
          {card?.memberIds && card?.memberIds?.length > 0 && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                px: "5px",
                pb: "10px",
                pt: 0,
              }}
            >
              <FaCommentAlt style={{ fontSize: "12px" }} />
              <Typography>{card?.memberIds?.length}</Typography>
            </Box>
          )}
          {card?.memberIds && card?.memberIds?.length > 0 && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                px: "5px",
                pb: "10px",
                pt: 0,
              }}
            >
              <GrAttachment style={{ fontSize: "12px" }} />
              <Typography>{card?.memberIds?.length}</Typography>
            </Box>
          )}
        </CardActions>
      </Card>
      <Suspense>
        <MenuTrelloCard
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          card={card}
        ></MenuTrelloCard>
      </Suspense>
    </div>
  );
};

export default TrelloCard;
