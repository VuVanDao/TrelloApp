import React, { useEffect, useState } from "react";
import {
  Box,
  Collapse,
  Divider,
  List,
  ListSubheader,
  Menu,
  MenuItem,
  Typography,
  useColorScheme,
} from "@mui/material";
import { IoMdClose } from "react-icons/io";
import BoxIconCover from "../BoxIconCover";
import { LuArrowUpRight } from "react-icons/lu";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { useConfirm } from "material-ui-confirm";
import { ArchiveColumn } from "~/apis";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateFooterColumn } from "~/utils/Redux/ActiveColumnSlice";
import {
  getDetailBoardReduxAPI,
  updateCurrentActiveBoard,
} from "~/utils/Redux/ActiveBoardSlice";
import _ from "lodash";

const commonFontsize = "14px";
const MenuHeaderColumn = ({
  anchorEl,
  setAnchorEl,
  isDraggingColumn,
  columnId, // thuc ra day la thong tin cua 1 column
}) => {
  const open = Boolean(anchorEl);
  const { mode } = useColorScheme();
  let { boardId } = useParams();
  const confirm = useConfirm();
  const dispatch = useDispatch();
  const activeBoard = useSelector((state) => {
    return state.activeBoardReducer.activeBoardState;
  });

  const handleArchie = async () => {
    const { confirmed } = await confirm({
      description: `This will  delete ${columnId.title}.`,
      allowClose: false,
      title: "Archive this column",
    });

    if (confirmed) {
      const activeBoardClone = _.cloneDeep(activeBoard);
      activeBoardClone.columns = activeBoardClone.columns?.filter(
        (column) => column?._id !== columnId?._id,
      );
      dispatch(updateCurrentActiveBoard(activeBoardClone));
      await ArchiveColumn(columnId?._id, boardId)
        .then((res) => {
          dispatch(getDetailBoardReduxAPI({ boardId, loading: false }));
          console.log("🚀 ~ handleArchie ~ res:", res);
        })
        .catch((error) => {
          console.log("🚀 ~ handleArchie ~ error:", error);
        });
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [openList, setOpenList] = useState(false);

  const handleClick = () => {
    setOpenList(!openList);
  };
  useEffect(() => {
    if (isDraggingColumn) {
      handleClose(); // Nếu component cha đang bị kéo, đóng menu lại
    }
  }, [isDraggingColumn]);
  return (
    <>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
          },
        }}
        // autoFocus="false"
      >
        <ListSubheader
          sx={{
            minWidth: "300px",
            maxWidth: "300px",
            backgroundColor: mode === "light" ? "#fff" : "#2e2e2e",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box sx={{ opacity: 0 }}>a</Box>
            <Typography
              fontSize={"15px"}
              color={mode === "light" ? "#44546f" : "white"}
            >
              List actions
            </Typography>
            <BoxIconCover hoverColor={"#d1d3d4"}>
              <IoMdClose
                style={{
                  color: mode === "light" ? "#44546f" : "white",
                  fontSize: "15px",
                }}
                onMouseDown={handleClose}
              />
            </BoxIconCover>
          </Box>
        </ListSubheader>
        <MenuItem onClick={handleClose}>
          <Typography
            fontSize={commonFontsize}
            onClick={() => {
              dispatch(
                updateFooterColumn({
                  columnId: columnId?._id,
                  openColumnFooter: true,
                }),
              );
            }}
          >
            Add card
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography fontSize={commonFontsize}>Copy list</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography fontSize={commonFontsize}>Move list</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography fontSize={commonFontsize}>
            Move all cards in this list
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography fontSize={commonFontsize}>Sort by...</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography fontSize={commonFontsize}>Watch</Typography>
        </MenuItem>
        <Divider></Divider>
        <MenuItem onClick={handleClose}>
          <LuArrowUpRight />
          <Typography fontSize={commonFontsize} ml={1}>
            Add list from Jira work items
          </Typography>
        </MenuItem>
        <Divider></Divider>
        <MenuItem
          onClick={handleClick}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            pr: "20px",
          }}
        >
          <Typography
            fontSize={commonFontsize}
            color={mode === "light" ? "#44546f" : "white"}
          >
            Automation
          </Typography>
          {openList ? (
            <MdOutlineKeyboardArrowUp
              style={{ color: mode === "light" ? "#44546f" : "white" }}
            />
          ) : (
            <MdOutlineKeyboardArrowDown
              style={{ color: mode === "light" ? "#44546f" : "white" }}
            />
          )}
        </MenuItem>

        <Collapse in={openList} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <MenuItem>
              <Typography fontSize={commonFontsize}>
                When a card is added to the list...
              </Typography>
            </MenuItem>
            <MenuItem>
              <Typography fontSize={commonFontsize}>
                Every day, sort by list...
              </Typography>
            </MenuItem>
            <MenuItem>
              <Typography fontSize={commonFontsize}>
                Every Monday, sort by list...
              </Typography>
            </MenuItem>
            <MenuItem>
              <Typography fontSize={commonFontsize}>Create a rule</Typography>
            </MenuItem>
          </List>
        </Collapse>
        <Divider></Divider>
        <MenuItem onClick={handleArchie}>
          <Typography fontSize={commonFontsize}>Archive this list</Typography>
        </MenuItem>
        <MenuItem>
          <Typography fontSize={commonFontsize}>
            Archive all cards in this list
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default MenuHeaderColumn;
