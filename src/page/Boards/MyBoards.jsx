import {
  Box,
  Button,
  Pagination,
  Typography,
  IconButton,
  Divider,
  Grid,
} from "@mui/material";
import React, { lazy, Suspense, useEffect, useState } from "react";
import BoardCard from "~/Components/BoardCard/BoardCard";
import { getMyBoards } from "~/apis";
// Import Icons
import EditIcon from "@mui/icons-material/Edit"; // Icon cái bút
import LockIcon from "@mui/icons-material/Lock"; // Icon ổ khóa
import PersonOutlineIcon from "@mui/icons-material/PersonOutline"; // Icon người
import { IoIosAddCircle } from "react-icons/io";

import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import {
  LogoutAccountRedux,
  updateCurrentAccount,
} from "~/utils/Redux/AccountSlice";
import GlobalLoading from "~/Components/LoadingPage/GlobalLoading";

const ModalAddBoard = lazy(() => import("./ModalAddBoard"));
const MyBoards = () => {
  const [ListBoard, setListBoard] = useState([]);
  const [totalBoard, setTotalBoard] = useState(0);
  const [currPage, setCurrPage] = useState(
    +localStorage.getItem("currPage") || 1
  );
  const [totalPage, setTotalPage] = useState(0);

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const { logout } = useAuth0();
  const dispatch = useDispatch();

  const handleGetAllBoard = async (isUseLoading = false) => {
    if (isUseLoading) {
      setLoading(true);
    }

    await getMyBoards(currPage)
      .then((res) => {
        setTotalBoard(res?.data?.totalBoard);
        setListBoard(res?.data?.result);
        setTotalPage(res?.data?.totalPage);
      })
      .catch((err) => {
        if (err?.status === 401) {
          dispatch(LogoutAccountRedux());
          dispatch(updateCurrentAccount(null));
          logout();
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const handleChange = async (event, value) => {
    localStorage.setItem("currPage", value);
    setCurrPage(value);
  };
  useEffect(() => {
    handleGetAllBoard(true);
  }, [currPage]);

  return (
    <Box
      sx={{
        width: "100%",
        px: 5,
      }}
    >
      <Suspense>
        {/* --- Phần 1: Thông tin Workspace (Icon + Tên) --- */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {/* Logo chữ T (Gradient xanh) */}
            <Box
              sx={{
                width: 64,
                height: 64,
                borderRadius: 1.5, // Bo góc mềm mại
                background:
                  "linear-gradient(to bottom right, #4bce97, #216e4e)", // Gradient xanh lá đặc trưng Trello
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: 36,
                fontWeight: "bold",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              T
            </Box>

            {/* Cột thông tin bên cạnh */}
            <Box>
              {/* Dòng 1: Tên + Nút sửa */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ lineHeight: 1.2 }}
                >
                  Trello Workspace
                </Typography>
                <IconButton size="small" sx={{ p: 0.5 }}>
                  <EditIcon sx={{ fontSize: 18, color: "text.secondary" }} />
                </IconButton>
              </Box>

              {/* Dòng 2: Private + Icon khóa */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  mt: 0.5,
                }}
              >
                <LockIcon sx={{ fontSize: 14, color: "text.secondary" }} />
                <Typography
                  variant="caption"
                  sx={{ color: "text.secondary", fontSize: 12 }}
                >
                  Private
                </Typography>
              </Box>
            </Box>
          </Box>
          <Button
            variant="contained"
            startIcon={<IoIosAddCircle />}
            onClick={() => handleOpen()}
          >
            Create new
          </Button>
        </Box>

        {/* --- Phần 2: Đường gạch ngang --- */}
        <Divider sx={{ my: 3, borderColor: "divider" }} />

        {/* --- Phần 3: Tiêu đề "Your boards" --- */}
        {loading ? (
          <GlobalLoading isLoading={loading}></GlobalLoading>
        ) : (
          <Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
              <PersonOutlineIcon sx={{ color: "text.primary" }} />
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ fontSize: "18px" }}
              >
                Your boards ({totalBoard})
              </Typography>
            </Box>
            {ListBoard && ListBoard?.length > 0 && (
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "center",
                  flexDirection: "column",
                  gap: "15px",
                }}
              >
                <Grid container spacing={2}>
                  {ListBoard.map((board) => (
                    <Grid
                      item
                      key={board?._id}
                      size={{
                        xs: 12,
                        sm: 6,
                        xl: 3,
                      }}
                    >
                      <BoardCard
                        title={board?.title}
                        key={board?._id}
                        boardId={board?._id}
                        pinned={board?.pinned}
                      />
                    </Grid>
                  ))}
                </Grid>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    gap: "10px",
                    mt: "10px",
                  }}
                >
                  <Typography>Page: {currPage}</Typography>
                  <Pagination
                    component="div"
                    count={totalPage}
                    page={currPage}
                    onChange={handleChange}
                  />
                </Box>
              </Box>
            )}

            {ListBoard && ListBoard?.length === 0 && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <Typography>you dont have any board, create one...</Typography>
                <Button
                  variant="contained"
                  startIcon={<IoIosAddCircle />}
                  onClick={() => handleOpen()}
                >
                  Create new
                </Button>
              </Box>
            )}
          </Box>
        )}

        <ModalAddBoard
          setOpen={setOpen}
          open={open}
          handleGetAllBoard={handleGetAllBoard}
        ></ModalAddBoard>
      </Suspense>
    </Box>
  );
};

export default MyBoards;
