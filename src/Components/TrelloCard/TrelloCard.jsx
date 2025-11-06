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

const TrelloCard = ({ card }) => {
  return (
    <>
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
    </>
  );
};

export default TrelloCard;
