import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const TrelloCard = () => {
  return (
    <>
      <Card
        sx={{
          minWidth: (theme) => theme.trelloCustom.CardWidth,
          "& .MuiCardContent-root": {
            p: "10px",
          },
          "& .MuiCardActions-root": {
            p: "0px 5px",
          },
          cursor: "pointer",
          overflow: "unset",
        }}
      >
        <CardMedia
          component={"img"}
          alt="image"
          image="https://i.pinimg.com/originals/e6/62/d2/e662d2ac8495591f1be67b549d9c30a6.gif"
          sx={{ maxWith: "246px", minWidth: "246px", maxHeight: "257px" }}
        ></CardMedia>
        <CardContent>
          <Typography fontSize={"15px"}>well meaning and kindly.</Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>

      <Card
        sx={{
          minWidth: (theme) => theme.trelloCustom.CardWidth,
          "& .MuiCardContent-root": {
            p: "10px",
          },
          "& .MuiCardActions-root": {
            p: "0px 5px",
          },
          cursor: "pointer",
          overflow: "unset",
        }}
      >
        <CardContent>
          <Typography fontSize={"15px"}>well meaning and kindly.</Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>

      <Card
        sx={{
          minWidth: (theme) => theme.trelloCustom.CardWidth,
          "& .MuiCardContent-root": {
            p: "10px",
          },
          "& .MuiCardActions-root": {
            p: "0px 5px",
          },
          cursor: "pointer",
          overflow: "unset",
        }}
      >
        <CardContent>
          <Typography fontSize={"15px"}>well meaning and kindly.</Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>

      <Card
        sx={{
          minWidth: (theme) => theme.trelloCustom.CardWidth,
          "& .MuiCardContent-root": {
            p: "10px",
          },
          "& .MuiCardActions-root": {
            p: "0px 5px",
          },
          cursor: "pointer",
          overflow: "unset",
        }}
      >
        <CardContent>
          <Typography fontSize={"15px"}>well meaning and kindly.</Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>

      <Card
        sx={{
          minWidth: (theme) => theme.trelloCustom.CardWidth,
          "& .MuiCardContent-root": {
            p: "10px",
          },
          "& .MuiCardActions-root": {
            p: "0px 5px",
          },
          cursor: "pointer",
          overflow: "unset",
        }}
      >
        <CardContent>
          <Typography fontSize={"15px"}>well meaning and kindly.</Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>

      <Card
        sx={{
          minWidth: (theme) => theme.trelloCustom.CardWidth,
          "& .MuiCardContent-root": {
            p: "10px",
          },
          "& .MuiCardActions-root": {
            p: "0px 5px",
          },
          cursor: "pointer",
          overflow: "unset",
        }}
      >
        <CardContent>
          <Typography fontSize={"15px"}>well meaning and kindly.</Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>

      <Card
        sx={{
          minWidth: (theme) => theme.trelloCustom.CardWidth,
          "& .MuiCardContent-root": {
            p: "10px",
          },
          "& .MuiCardActions-root": {
            p: "0px 5px",
          },
          cursor: "pointer",
          overflow: "unset",
        }}
      >
        <CardContent>
          <Typography fontSize={"15px"}>well meaning and kindly.</Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>

      <Card
        sx={{
          minWidth: (theme) => theme.trelloCustom.CardWidth,
          "& .MuiCardContent-root": {
            p: "10px",
          },
          "& .MuiCardActions-root": {
            p: "0px 5px",
          },
          cursor: "pointer",
          overflow: "unset",
        }}
      >
        <CardContent>
          <Typography fontSize={"15px"}>well meaning and kindly.</Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </>
  );
};

export default TrelloCard;
