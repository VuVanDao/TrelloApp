import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { FaUserFriends, FaCommentAlt } from "react-icons/fa";
import { GrAttachment } from "react-icons/gr";
import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const TrelloCard = ({ card }) => {
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
        }}
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
          <Typography fontSize={"15px"}>{card?.title}</Typography>
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
    </div>
  );
};

export default TrelloCard;
