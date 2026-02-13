import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  IconButton,
  Select,
  MenuItem,
} from "@mui/material";

// Import Icons
import DashboardIcon from "@mui/icons-material/Dashboard"; // Icon Boards
import TableChartIcon from "@mui/icons-material/TableChart"; // Icon Templates
import SettingsIcon from "@mui/icons-material/Settings";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CloseIcon from "@mui/icons-material/Close";
import AccessTimeIcon from "@mui/icons-material/AccessTime"; // Icon Recently viewed
import BusinessIcon from "@mui/icons-material/Business"; // Icon Workspace
import { recentBoards, templates } from "~/utils/constant";
import BoardCard from "~/Components/BoardCard/BoardCard";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  getAllPinnedBoardApi,
  getRecentlyViewedBoardApi,
} from "~/apis/boardApi";
import { TiPinOutline } from "react-icons/ti";
import _ from "lodash";
// path: /boards/board_dashboard
const ListBoard = () => {
  const navigate = useNavigate();
  const currAccount = useSelector((state) => state.accountReducer.accountState);

  const [listPinnedBoard, setListPinnedBoard] = useState([]);
  const [listRecentViewedBoard, setListRecentViewedBoard] = useState([]);
  const [changeUI, setChangeUI] = useState(false);
  const getAllPinnedBoard = async () => {
    await getAllPinnedBoardApi(currAccount?._id).then((res) => {
      setListPinnedBoard(res?.data?.pinnedBoards);
    });
  };
  const getAllRecentlyViewedBoard = async () => {
    await getRecentlyViewedBoardApi(currAccount?._id).then((res) => {
      setListRecentViewedBoard(res?.data?.boards);
    });
  };
  const updateUIBoard = (boardId, statusPin) => {
    let listPinnedBoardClone = _.cloneDeep(listPinnedBoard);
    let listRecentViewClone = _.cloneDeep(listRecentViewedBoard);

    if (statusPin) {
      // truong hop an pin tren recent view ( chi co o recent view thi statusPin = true)
      if (listPinnedBoardClone.length < 5) {
        // tim cai recent board để thêm vào cái pinned board
        const currBoardPinned = listRecentViewClone.find((boards) => {
          return boards?.board?._id === boardId;
        });
        // thay đổi trạng thái pin của board
        currBoardPinned.board.pinned = !currBoardPinned.board.pinned;
        // thêm vào pinned board
        listPinnedBoardClone.push(currBoardPinned.board);
        setChangeUI(!changeUI);
        // ham nay de update ui cua board, se doi mau ki hieu pin cua board
        setListPinnedBoard(listPinnedBoardClone);
        setListRecentViewedBoard(listRecentViewClone);
      }
    } else {
      // pinned board
      // bỏ pin cái board được chọn đi
      const currPinnedBoard = listPinnedBoardClone.filter(
        (board) => board._id !== boardId,
      );
      // recent view
      // trong trường hợp board này có trong viewed thì đổi trạng thái pin của nó
      const currBoardPinned = listRecentViewClone.find((boards) => {
        return boards?.board?._id === boardId;
      });
      if (currBoardPinned)
        currBoardPinned.board.pinned = !currBoardPinned.board.pinned;
      setChangeUI(!changeUI);
      // ham nay de update ui cua board, se doi mau ki hieu pin cua board
      setListPinnedBoard(currPinnedBoard);
      setListRecentViewedBoard(listRecentViewClone);
    }
  };
  useEffect(() => {
    getAllPinnedBoard();
    getAllRecentlyViewedBoard();
  }, []);
  useEffect(() => {}, [changeUI]);
  return (
    <>
      <Box
        sx={{
          py: 1,
          px: 5,
          width: "100%",
        }}
      >
        {/* --- RECENTLY VIEWED BOARD --- */}
        <Box sx={{ mb: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <AccessTimeIcon sx={{ mr: 1, color: "text.secondary" }} />
            <Typography fontWeight="bold">Recently viewed</Typography>
          </Box>

          <Grid container spacing={2}>
            {listRecentViewedBoard?.map((item, index) => (
              <Grid
                item
                key={index}
                size={{
                  xs: 12,
                  sm: 6,
                  xl: 3,
                }}
              >
                <BoardCard
                  title={item.board.title}
                  bg={item.board.bg}
                  boardId={item?.board?._id}
                  pinned={item?.board?.pinned}
                  handleGetAllBoard={getAllRecentlyViewedBoard}
                  updateUIBoard={updateUIBoard}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        {/* Pinned board */}
        <Box sx={{ mb: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <TiPinOutline
              style={{
                marginRight: 5,
                color: "text.secondary",
                fontSize: "20px",
              }}
            />
            <Typography fontWeight="bold">Your pinned board</Typography>
          </Box>
          <Grid container spacing={2}>
            {listPinnedBoard?.length === 0 && (
              <Typography>You have not pinned any board</Typography>
            )}
            {listPinnedBoard?.map((item, index) => (
              <Grid
                item
                key={index}
                size={{
                  xs: 12,
                  sm: 6,
                  xl: 3,
                }}
              >
                <BoardCard
                  title={item.title}
                  bg={item.bg}
                  boardId={item?._id}
                  pinned={item?.pinned}
                  handleGetAllBoard={getAllPinnedBoard}
                  updateUIBoard={updateUIBoard}
                />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* --- YOUR WORKSPACES SECTION --- */}
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Typography
              fontWeight="bold"
              sx={{
                color: "text.secondary",
                textTransform: "uppercase",
                fontSize: "14px",
              }}
            >
              YOUR WORKSPACES
            </Typography>
          </Box>

          {/* Workspace Header Info */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 2,
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  bgcolor: "green",
                  width: 32,
                  height: 32,
                  borderRadius: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mr: 1.5,
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                T
              </Box>
              <Typography variant="h6" fontWeight="bold">
                Trello Workspace
              </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              <Button
                startIcon={<DashboardIcon />}
                size="small"
                color="inherit"
                onClick={() => navigate("/boards/board_dashboard/my_boards")}
              >
                Boards
              </Button>
              <Button
                startIcon={<PersonOutlineIcon />}
                size="small"
                color="inherit"
              >
                Members
              </Button>
              <Button
                startIcon={<SettingsIcon />}
                size="small"
                color="inherit"
                onClick={() => navigate(`/Settings`)}
              >
                Settings
              </Button>
              <Button
                startIcon={<BusinessIcon />}
                size="small"
                sx={{ color: "#9c27b0", bgcolor: "rgba(156, 39, 176, 0.1)" }}
              >
                Upgrade
              </Button>
            </Box>
          </Box>

          {/* Boards in Workspace */}
          <Grid container spacing={2}>
            {/* Board cards */}
            {recentBoards?.slice(0, 2).map((item, index) => (
              <Grid
                item
                size={{
                  xs: 12,
                  sm: 6,
                  xl: 3,
                }}
                key={index}
              >
                <BoardCard title={item.title} bg={item.bg} />
              </Grid>
            ))}
            {/* "Create new board" placeholder */}
            <Grid
              item
              size={{
                xs: 12,
                sm: 6,
                xl: 3,
              }}
            >
              <Card
                sx={{
                  height: 100,
                  bgcolor: "background.paper",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <Typography variant="body2">Create new board</Typography>
              </Card>
            </Grid>
            <Grid
              item
              size={{
                xs: 12,
                sm: 6,
                xl: 3,
              }}
            >
              <Card
                sx={{
                  height: 100,
                  bgcolor: "background.paper",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <Typography variant="body2">All boards</Typography>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default ListBoard;
