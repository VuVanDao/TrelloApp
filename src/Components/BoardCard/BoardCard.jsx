import React from "react";
import { Box, Typography, Card, CardActionArea, Chip } from "@mui/material";

const BoardCard = ({ title, bg, isTemplate }) => {
  return (
    <>
      <Card
        sx={{
          height: 100,
          //   width: "215px",
          //   maxWidth: "215px",
          borderRadius: 1,
          position: "relative",
          bgcolor: "transparent",
          boxShadow: "none",
          "&:hover": { opacity: 0.9 },
        }}
      >
        <CardActionArea sx={{ height: "100%", borderRadius: 1 }}>
          <Box
            sx={{
              height: "100%",
              width: "100%",
              background:
                bg.includes("url") || bg.includes("gradient") ? bg : bg,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor:
                !bg.includes("url") && !bg.includes("gradient")
                  ? bg
                  : undefined, // Fallback color
              p: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: isTemplate ? "space-between" : "flex-start",
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
