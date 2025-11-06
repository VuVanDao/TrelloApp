import React, { lazy, Suspense, useState } from "react";
import { Box, Tooltip, Typography } from "@mui/material";
import { HiDotsHorizontal } from "react-icons/hi";
import BoxIconCover from "../BoxIconCover";
const MenuHeaderColumn = lazy(() => import("./MenuHeaderColumn"));

const HeaderColumn = ({ title }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          pl: "20px",
          pr: "10px",
          pt: "12px",
          pb: "0px",
        }}
      >
        <Typography fontWeight={700} fontSize={"15px"}>
          {title}
        </Typography>

        <BoxIconCover hoverColor={"#d1d3d4"}>
          <Tooltip title="List actions" onClick={handleClick}>
            <HiDotsHorizontal style={{ fontSize: "15px" }} />
          </Tooltip>
        </BoxIconCover>
        <Suspense>
          <MenuHeaderColumn
            anchorEl={anchorEl}
            setAnchorEl={setAnchorEl}
          ></MenuHeaderColumn>
        </Suspense>
      </Box>
    </>
  );
};

export default HeaderColumn;
