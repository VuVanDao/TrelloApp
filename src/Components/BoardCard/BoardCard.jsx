import React from "react";
import { Box, Typography, Card, CardActionArea, Chip } from "@mui/material";
import randomColor from "randomcolor";
import { FaRegStar } from "react-icons/fa";

const BoardCard = ({ title, bg, isTemplate }) => {
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
                  backgroundColor: "transparent",
                  p: "5px",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "25px",
                  height: "25px",
                  "&:hover  .pin_icon": {
                    transform: "scale(1.25)",
                    transition: "all 0.5s",
                  },
                }}
              >
                <FaRegStar style={{ color: "white" }} className="pin_icon" />
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
