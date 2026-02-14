import {
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { BiFolderOpen } from "react-icons/bi";
import { FaUser, FaArchive } from "react-icons/fa";
import { FaRegImage, FaArrowRightLong } from "react-icons/fa6";
import { MdContentCopy } from "react-icons/md";
import React from "react";
import { useConfirm } from "material-ui-confirm";
import { ArchiveCard } from "~/apis";
import { useDispatch, useSelector } from "react-redux";
import {
  getDetailBoardReduxAPI,
  updateCurrentActiveBoard,
} from "~/utils/Redux/ActiveBoardSlice";
import { useParams } from "react-router-dom";
import _ from "lodash";

const MenuTrelloCard = ({ anchorEl, setAnchorEl, card }) => {
  const confirm = useConfirm();
  const dispatch = useDispatch();
  let { boardId } = useParams();
  const activeBoard = useSelector((state) => {
    return state.activeBoardReducer.activeBoardState;
  });
  const handleDelete = async () => {
    const { confirmed } = await confirm({
      description: `This will  delete ${card.title}.`,
      allowClose: false,
      title: "Archive this card",
    });

    if (confirmed) {
      const activeBoardClone = _.cloneDeep(activeBoard);
      let currColumn = activeBoardClone.columns.find(
        (column) => column._id === card?.columnIds,
      );
      currColumn.cards = currColumn.cards.filter((c) => c._id !== card?._id);
      dispatch(updateCurrentActiveBoard(activeBoardClone));
      await ArchiveCard(card?._id, card?.columnIds)
        .then((res) => {
          console.log("🚀 ~ handleDelete ~ res:", res);
        })
        .catch((error) => {
          console.log("🚀 ~ handleDelete ~ error:", error);
        })
        .finally(() => {
          dispatch(getDetailBoardReduxAPI({ boardId, loading: false }));
        });
    }
  };
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <BiFolderOpen />
          </ListItemIcon>
          <ListItemText>
            <Typography sx={{ fontSize: "15px" }}>Open card</Typography>
          </ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <FaUser />
          </ListItemIcon>
          <ListItemText>
            <Typography sx={{ fontSize: "15px" }}>Change member</Typography>
          </ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <FaRegImage />
          </ListItemIcon>
          <ListItemText>
            <Typography sx={{ fontSize: "15px" }}>Change cover</Typography>
          </ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <FaArrowRightLong />
          </ListItemIcon>
          <ListItemText>
            <Typography sx={{ fontSize: "15px" }}>Move</Typography>
          </ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <MdContentCopy />
          </ListItemIcon>
          <ListItemText>
            <Typography sx={{ fontSize: "15px" }}>Copy</Typography>
          </ListItemText>
        </MenuItem>
        <MenuItem onClick={handleDelete}>
          <ListItemIcon>
            <FaArchive />
          </ListItemIcon>
          <ListItemText>
            <Typography sx={{ fontSize: "15px" }}>Archive</Typography>
          </ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
};

export default MenuTrelloCard;
