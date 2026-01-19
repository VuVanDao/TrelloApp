import React, { lazy, Suspense, useState } from "react";
import {
  Toolbar,
  Typography,
  Button,
  Box,
  Link,
  Container,
  Grid,
  Stack,
  Paper,
  useMediaQuery,
  Divider,
  AppBar,
} from "@mui/material";

import { IoMdArrowDroprightCircle } from "react-icons/io";
import { AiOutlineAppstore } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
const ModalWatchVideo = lazy(() => import("./ModalWatchVideo"));
import { features } from "~/utils/constant";
import { useAuth0 } from "@auth0/auth0-react";
const HomePage = () => {
  const { loginWithRedirect } = useAuth0();
  const LinkSXCommon = {
    margin: "0 12px",
    textDecoration: "none",
    color: "text_common.main",
    display: "flex",
    alignItems: "center",
    "&:hover": {
      color: "rgba(0,101,255,1)",
    },
  };
  const BoxInFooter = ({ children }) => (
    <Link
      href="#"
      variant="body2"
      sx={{
        color: "grey.400",
        textDecoration: "none",
        "&:hover": { backgroundColor: "rgb(52, 69, 99)" },
        display: "block",
        mb: 1.5,
        p: "15px",
      }}
    >
      {children}
    </Link>
  );
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [itemSelect, setItemSelect] = useState(features[0]);
  const isMd = useMediaQuery("(min-width: 1000px)"); // false < 1000px < true : nhỏ hơn 1000px là false , ngược lại là true

  return (
    <>
      {/* AppBar */}
      <AppBar
        position="static"
        color="default"
        elevation={1}
        sx={{ backgroundColor: "white" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center", gap: "30px" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <AiOutlineAppstore
                style={{ fontSize: "20px", color: "secondary.main" }}
              />
              <Typography
                variant="h6"
                sx={{ color: "#0052CC", fontWeight: "700", fontSize: "25px" }}
              >
                Trello
              </Typography>
            </Box>

            {/* Các link điều hướng */}
            <Box
              sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
            >
              <Link href="#" sx={LinkSXCommon}>
                Tính năng
                <MdKeyboardArrowDown />
              </Link>
              <Link href="#" sx={LinkSXCommon}>
                Giải pháp
                <MdKeyboardArrowDown />
              </Link>
              <Link href="#" sx={LinkSXCommon}>
                Gói
                <MdKeyboardArrowDown />
              </Link>
              <Link href="#" sx={LinkSXCommon}>
                Biểu phí
              </Link>
              <Link href="#" sx={LinkSXCommon}>
                Tài liệu
                <MdKeyboardArrowDown />
              </Link>
            </Box>
          </Box>

          {/* Nút đăng nhập/đăng ký */}
          <Box>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#0052CC",
                textTransform: "none",
                height: "100%",
              }}
              onClick={() => loginWithRedirect()}
            >
              Đến bảng của bạn
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* hero section */}
      <Box sx={{ backgroundColor: "rgb(244, 245, 247)" }}>
        <Container maxWidth="xl" sx={{ py: " 70px" }}>
          <Grid container spacing={1}>
            {/* Cột bên trái (Văn bản) */}
            <Grid size={{ md: 6, xs: 12 }}>
              <Typography
                variant="h3"
                sx={{ fontWeight: "bold", mb: 2, color: "rgba(0,101,255,1)" }}
              >
                Ghi lại, sắp xếp và giải quyết việc cần làm từ bất cứ đâu.
              </Typography>
              <Typography
                variant="h6"
                sx={{ mb: 4, color: "text_common.main" }}
              >
                Thoát khỏi tình trạng lộn xộn và hỗn loạn – giải phóng năng suất
                của bạn bằng Trello.
              </Typography>
              <Box
                sx={{ display: "flex", gap: 1, flexDirection: "column", mb: 4 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: "#0052CC",
                    textTransform: "none",
                    padding: "12px 24px",
                    width: {
                      xs: "100%",
                      md: "50%",
                    },
                  }}
                  onClick={() => loginWithRedirect()}
                >
                  Bắt đầu trải nghiệm
                </Button>
              </Box>

              <Typography mb={4} sx={{ color: "text_common.main" }}>
                Khi nhập email của mình, tôi thừa nhận{" "}
                <Link sx={{ cursor: "pointer", color: "#1868db" }}>
                  Chính sách quyền riêng tư của Atlassian
                </Link>
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignContent: "center",
                  gap: "5px",
                }}
                className="cursor_pointer"
                onClick={handleOpen}
              >
                <Typography
                  sx={{
                    textDecoration: "underline",
                    color: "rgba(0,101,255,1)",
                  }}
                >
                  Xem video
                </Typography>
                <IoMdArrowDroprightCircle
                  style={{
                    fontSize: "25px",
                    color: "rgba(0,101,255,1)",
                  }}
                />
              </Box>
            </Grid>

            {/* Cột bên phải (Hình ảnh) */}
            <Grid size={{ md: 6, xs: 12 }}>
              <video style={{ width: "100%" }}>
                <source
                  src="https://videos.ctfassets.net/rz1oowkt5gyp/4AJBdHGUKUIDo7Po3f2kWJ/3923727607407f50f70ccf34ab3e9d90/updatedhero-mobile-final.mp4"
                  type="video/mp4"
                ></source>
              </video>
            </Grid>
          </Grid>
        </Container>
        <Suspense>
          <ModalWatchVideo
            open={open}
            handleClose={handleClose}
          ></ModalWatchVideo>
        </Suspense>
      </Box>

      <Box sx={{ width: "100%", py: 3, backgroundColor: "#ffffff" }}>
        <Container maxWidth="xl">
          <Typography
            variant="h6"
            component="h2"
            fontWeight="bold"
            gutterBottom
            textTransform={"uppercase"}
            sx={{ mb: 2, color: "text_common.main" }}
          >
            Thông tin cơ bản về Trello
          </Typography>
          {/* === TIÊU ĐỀ CHÍNH === */}
          <Typography
            variant="h4"
            component="h2"
            fontWeight="bold"
            gutterBottom
            sx={{ mb: 2, color: "text_common.main" }}
          >
            Công cụ thúc đẩy năng suất của bạn
          </Typography>
          {/* === ĐOẠN MÔ TẢ === */}
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: "800px", color: "text_common.main" }} // Giới hạn chiều rộng cho dễ đọc
          >
            Luôn sắp xếp khoa học và hiệu quả nhờ Hộp thư đến, Bảng và Công cụ
            lập kế hoạch. Mọi việc cần làm, ý tưởng hay trách nhiệm – dù lớn hay
            nhỏ – đều có vị trí phù hợp, giúp bạn luôn dẫn đầu trong công việc.
          </Typography>
          {/* === LAYOUT GRID 2 CỘT === */}
          <Grid container spacing={5} alignItems="center">
            {/* CỘT BÊN TRÁI: NỘI DUNG VĂN BẢN */}
            <Grid
              size={{
                xs: 12,
                md: 5,
              }}
            >
              <Stack spacing={4}>
                {features.map((feature) => {
                  if (feature.id === itemSelect.id) {
                    return (
                      <Box
                        key={feature.id}
                        sx={{
                          backgroundColor: "rgb(255,255,255)",
                          boxShadow: "rgba(9,30,66,0.15) 0px 0.5rem 1rem 0px",
                          borderRadius: "5px",
                          p: "15px",
                          borderLeft: "10px solid rgba(0,199,229,1)",
                          cursor: "pointer",
                          color: "text_common.main",
                        }}
                      >
                        <Typography
                          variant="h6"
                          component="h3"
                          fontWeight="bold"
                          gutterBottom
                        >
                          {feature.title}
                        </Typography>
                        <Typography variant="body2" color="text_common.main">
                          {feature.description}
                        </Typography>
                      </Box>
                    );
                  }
                  return (
                    <Box
                      key={feature.id}
                      sx={{
                        borderRadius: "5px",
                        p: "15px",
                        cursor: "pointer",
                        color: "text_common.main",
                      }}
                      onClick={() => setItemSelect(feature)}
                    >
                      <Typography
                        variant="h6"
                        component="h3"
                        fontWeight="bold"
                        gutterBottom
                      >
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" color="text_common.main">
                        {feature.description}
                      </Typography>
                    </Box>
                  );
                })}
              </Stack>
            </Grid>

            {/* CỘT BÊN PHẢI: HÌNH ẢNH */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Box
                component="img"
                src={itemSelect.image} // <-- Sử dụng đường dẫn ảnh ở đây
                alt="Giao diện Trello"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "12px", // Bo góc
                  boxShadow: "0 8px 24px rgba(0,0,0,0.1)", // Đổ bóng
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          backgroundColor: "#0052cc", // Màu nền xanh chính
          color: "white",
          py: { xs: 6, md: 10 }, // Padding trên/dưới
          px: { xs: 2, md: 4 }, // Padding trái/phải
        }}
      >
        <Container maxWidth="xl">
          {/* === KHỐI TIÊU ĐỀ === */}
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Từ thư đến hành động
            </Typography>
            <Typography
              variant="h6"
              component="p"
              sx={{
                maxWidth: "800px",
                mx: "auto", // Căn giữa
                opacity: 0.9, // Chữ mờ hơn một chút
                lineHeight: 1.6,
              }}
            >
              Nhanh chóng biến thông tin liên lạc từ các ứng dụng bạn yêu thích
              thành việc cần làm, sắp xếp tất cả các cuộc thảo luận và nhiệm vụ
              của bạn ở một nơi.
            </Typography>
          </Box>

          {/* === THẺ TÍNH NĂNG 1: EMAIL === */}
          <Paper sx={{ p: { xs: 3, md: 5 }, mb: 4 }}>
            <Grid container spacing={5} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                {/* THAY THẾ BOX NÀY BẰNG HÌNH ẢNH CỦA BẠN  */}
                <Box
                  component="img"
                  src="https://images.ctfassets.net/rz1oowkt5gyp/2QvggeQ9nzUdaDnhJCSUwA/3ef97067e1aa3d0a5e6a04b5780fd751/email-todos.png?w=1110&fm=webp"
                  alt="Biến email thành việc"
                  sx={{ width: "100%", borderRadius: 2, boxShadow: 3 }}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box sx={{ color: "text.primary" }}>
                  <Box display="flex" alignItems="center" mb={1.5}>
                    {/* <AutoAwesomeIcon color="primary" sx={{ mr: 1 }} /> */}
                    <Typography
                      variant="overline"
                      color="text.secondary"
                      sx={{ fontWeight: "bold" }}
                    >
                      ĐIỀU KỲ DIỆU VỚI EMAIL
                    </Typography>
                  </Box>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}
                  >
                    Dễ dàng biến email thành việc cần làm. Chỉ cần chuyển tiếp
                    email tới hộp thư đến Trello và Atlassian Intelligence (AI)
                    sẽ chuyển những email này thành việc cần làm được sắp xếp
                    khoa học kèm theo mọi liên kết bạn cần.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>

          {/* === THẺ TÍNH NĂNG 2: CHAT === */}
          <Paper sx={{ p: { xs: 3, md: 5 } }}>
            <Grid container spacing={5} alignItems="center">
              {/* Thứ tự cột được đảo ngược trên desktop (md) 
              và xếp chồng đúng thứ tự trên mobile (xs) 
            */}
              <Grid item size={{ xs: 12, md: 6 }} order={{ xs: 2, md: 1 }}>
                <Box sx={{ color: "text.primary" }}>
                  <Box display="flex" alignItems="center" mb={1.5}>
                    {/* <ChatIcon color="primary" sx={{ mr: 1 }} /> */}
                    <Typography
                      variant="overline"
                      color="text.secondary"
                      sx={{ fontWeight: "bold" }}
                    >
                      PHÉP MÀU CỦA CÁC CÔNG CỤ CỘNG TÁC TRÒ CHUYỆN
                    </Typography>
                  </Box>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}
                  >
                    Bạn cần theo dõi tin nhắn từ Slack hoặc Microsoft Teams? Hãy
                    giữ thông tin ngắn đến hòm. Trello! Giao diện ứng dụng yêu
                    thích, cho phép bạn lưu trữ, đề xuất hiện trong hộp thư đến
                    Trello nhờ các liên kết và bản tóm tắt do AI tạo.
                  </Typography>
                </Box>
              </Grid>
              <Grid item size={{ xs: 12, md: 6 }} order={{ xs: 1, md: 2 }}>
                <Box
                  component="img"
                  src="https://images.ctfassets.net/rz1oowkt5gyp/3r1BvsfEsj4THe6YwpBOVy/2b1befa1e5e3522a2b0daae0dd3f3de0/slackteams-to-inbox.png?w=1110&fm=webp"
                  alt="Biến chat thành việc"
                  sx={{ width: "100%", borderRadius: 2, boxShadow: 3 }}
                />
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6 }, backgroundColor: "white" }}>
        <Container maxWidth="xl">
          {/* === KHỐI TIÊU ĐỀ === */}
          <Box sx={{ textAlign: "left", mb: 5 }}>
            <Typography
              color="text.secondary"
              sx={{
                fontWeight: "bold",
                fontSize: "15px",
                mb: "10px",
                color: "text_common.main",
              }}
            >
              LÀM VIỆC THÔNG MINH HƠN
            </Typography>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold", color: "text_common.main" }}
            >
              Trello giúp bạn làm được nhiều việc hơn
            </Typography>
            <Typography
              variant="h6"
              component="p"
              sx={{
                maxWidth: "800px",
                lineHeight: 1.6,
                textAlign: "left",
                color: "text_common.main",
              }}
            >
              Tùy chỉnh cách bạn sắp xếp nhờ các phân tích hợp, tự động hóa để
              sử dụng và tính năng phân chiếu việc cần làm trên nhiều vị trí.
            </Typography>
          </Box>

          {/* === KHỐI 3 CỘT TÍNH NĂNG === */}
          <Grid container spacing={4}>
            {/* CỘT 1: TIỆN ÍCH TÍCH HỢP */}
            <Grid item size={{ xs: 12, md: 4 }}>
              <Paper
                variant="elevation"
                elevation={0} // Tắt shadow nếu muốn
                sx={{
                  p: 4,
                  bgcolor: "rgb(250, 251, 252)", // Màu nền xám/tím rất nhạt
                  borderRadius: 4,
                  height: "100%", // Giúp các thẻ cao bằng nhau
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between", // Đẩy button xuống dưới
                }}
              >
                <Box>
                  {/* THAY ICON NÀY BẰNG HÌNH ẢNH CỦA BẠN */}
                  {/* <ExtensionIcon
                    sx={{ fontSize: 48, color: "primary.main", mb: 2 }}
                  /> */}
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontWeight: "bold",
                      mb: 1.5,
                      color: "text_common.main",
                    }}
                  >
                    Tiện ích tích hợp
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      color: "text_common.main",
                    }}
                  >
                    Kết nối các ứng dụng bạn đã sử dụng vào quy trình làm việc
                    Trello hoặc thêm Tiện ích bổ sung giúp điều chỉnh một số nhu
                    cầu cụ thể.
                  </Typography>
                </Box>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ alignSelf: "flex-start", fontWeight: "bold" }}
                >
                  Duyệt xem các Tiện ích tích hợp
                </Button>
              </Paper>
            </Grid>

            {/* CỘT 2: TỰ ĐỘNG */}
            <Grid item size={{ xs: 12, md: 4 }}>
              <Paper
                variant="elevation"
                elevation={0}
                sx={{
                  p: 4,
                  bgcolor: "rgb(250, 251, 252)",
                  borderRadius: 4,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  {/* THAY ICON NÀY BẰNG HÌNH ẢNH CỦA BẠN */}
                  {/* <AutoAwesomeIcon
                    sx={{ fontSize: 48, color: "primary.main", mb: 2 }}
                  /> */}
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontWeight: "bold",
                      mb: 1.5,
                      color: "text_common.main",
                    }}
                  >
                    tự động
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      color: "text_common.main",
                    }}
                  >
                    Mọi bảng Trello đều tích hợp tính năng tự động hóa không cần
                    mã. Bạn có thể tập trung vào công việc quan trọng nhất, phần
                    còn lại để robot lo.
                  </Typography>
                </Box>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ alignSelf: "flex-start", fontWeight: "bold" }}
                >
                  Tìm hiểu tính năng Tự động hóa
                </Button>
              </Paper>
            </Grid>

            {/* CỘT 3: PHÂN CHIẾU THẺ */}
            <Grid item size={{ xs: 12, md: 4 }}>
              <Paper
                variant="elevation"
                elevation={0}
                sx={{
                  p: 4,
                  bgcolor: "rgb(250, 251, 252)",
                  borderRadius: 4,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  {/* THAY ICON NÀY BẰNG HÌNH ẢNH CỦA BẠN */}
                  {/* <ViewKanbanIcon
                    sx={{ fontSize: 48, color: "primary.main", mb: 2 }}
                  /> */}
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontWeight: "bold",
                      mb: 1.5,
                      color: "text_common.main",
                    }}
                  >
                    Phân chiếu thẻ
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      color: "text_common.main",
                    }}
                  >
                    Xem tất cả việc cần làm từ nhiều bảng ở cùng một nơi. Phân
                    chiếu thẻ để theo dõi công việc ở bất kỳ đâu mà bạn cần.
                  </Typography>
                </Box>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ alignSelf: "flex-start", fontWeight: "bold" }}
                >
                  So sánh các gói
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 5 }, backgroundColor: "#fff" }}>
        <Container maxWidth="lg" sx={{ textAlign: "center" }}>
          <Typography
            variant="h6"
            align="center"
            sx={{ maxWidth: 550, mx: "auto", mb: 5 }}
          >
            Tham gia cộng đồng hàng triệu người dùng toàn cầu đang sử dụng
            Trello để hoàn thành nhiều công việc hơn.
          </Typography>
          <Box
            component={"img"}
            src={
              isMd
                ? "https://images.ctfassets.net/rz1oowkt5gyp/19rAABnbk8KNNuh3zJzsmr/210fb8ee51dea14595462f844b7c9beb/logos-horizontal-visa-coinbase-john-deere-zoom-grand-hyatt-fender.svg"
                : "https://images.ctfassets.net/rz1oowkt5gyp/35UfB6LGcl6cd3y8K7VB3b/0748eb81ae166a7fb35288e6c413dabc/logos-3x3-visa-coinbase-john-deere-zoom-grand-hyatt-fender.svg"
            }
          ></Box>
        </Container>
      </Box>

      <Box
        sx={{
          py: 6,
          textAlign: "center",
          backgroundColor: "rgba(244,245,247,1)",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h5"
            component="h2"
            sx={{ fontWeight: "bold", color: "text_common.main", mb: 4 }}
          >
            Bắt đầu sử dụng Trello ngay hôm nay
          </Typography>

          {/* Form Email */}
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "center",
              gap: 1,
              maxWidth: "600px",
              mx: "auto",
            }}
            noValidate
            autoComplete="off"
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                py: "14px", // Làm cho nút cao bằng textfield
                px: 4,
                fontWeight: "bold",
                borderRadius: { xs: 2, sm: "8px" }, // Bo góc
                boxShadow: "none",
                color: "#fff",
                "&:hover": {
                  boxShadow: "none",
                },
              }}
              onClick={() => loginWithRedirect()}
            >
              Bắt đầu trải nghiệm
            </Button>
          </Box>

          {/* Disclaimer Text */}
          <Typography
            variant="caption"
            sx={{
              display: "block",
              mt: 2,
              px: 2,
              color: "text_common.main",
            }}
          >
            Khi nhấp email của mình, tôi thừa nhận{" "}
            <Link href="#" underline="hover" sx={{ color: "#1868db" }}>
              Chính sách quyền riêng tư
            </Link>{" "}
            của Atlassian
          </Typography>
        </Container>
      </Box>

      <Box sx={{ backgroundColor: "rgba(23,43,77,1)", py: "20px" }}>
        <Container maxWidth="xl">
          {/* Hàng logo và các cột link */}
          <Grid container spacing={4} sx={{ mb: 4 }}>
            {/* Cột 2: Tìm hiểu về Trello */}
            <Grid
              item
              size={{
                xs: 6,
                sm: 4,
                md: 2.25,
              }}
            >
              <BoxInFooter>
                <Typography variant="h6" sx={{ fontSize: "15px" }}>
                  Tìm hiểu về Trello
                </Typography>
                <Typography sx={{ fontSize: "15px" }}>
                  Công nghệ liên tảng
                </Typography>
              </BoxInFooter>
            </Grid>

            {/* Cột 3: Việc làm */}
            <Grid
              item
              size={{
                xs: 6,
                sm: 4,
                md: 2.25,
              }}
            >
              <BoxInFooter sx={{ fontSize: "15px" }}>
                <Typography variant="h6" sx={{ fontSize: "15px" }}>
                  Việc làm
                </Typography>
                Tìm hiểu về các vai trò và các nhóm Trello
              </BoxInFooter>
            </Grid>

            {/* Cột 4: Ứng dụng */}
            <Grid
              item
              size={{
                xs: 6,
                sm: 4,
                md: 2.25,
              }}
            >
              <BoxInFooter>
                <Typography variant="h6" sx={{ fontSize: "15px" }}>
                  Ứng dụng
                </Typography>
                Tải xuống ứng dụng Trello cho Máy tính hoặc Thiết bị di động.
              </BoxInFooter>
            </Grid>

            {/* Cột 5: Liên hệ */}
            <Grid item xs={6} sm={4} md={2.25}>
              <BoxInFooter>
                <Typography variant="h6" sx={{ fontSize: "15px" }}>
                  Liên hệ với chúng tôi
                </Typography>
                Bạn cần trợ giúp? Hãy liên lạc để chúng tôi có thể trợ giúp.
              </BoxInFooter>
            </Grid>
          </Grid>

          <Divider sx={{ borderColor: "grey.700", my: 3 }} />

          {/* Hàng Copyright và Social */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column-reverse", md: "row" },
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
            }}
          >
            {/* Copyright & Legal */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                color: "grey.400",
                fontSize: "0.8rem",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Link href="#" color="inherit" underline="hover">
                Chính sách Riêng tư
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Thuật ngữ
              </Link>
              <Typography variant="caption" sx={{ color: "grey.500" }}>
                Bản quyền © 2023 Atlassian
              </Typography>
            </Box>

            {/* Social Icons */}
            {/* <Box sx={{ display: "flex", gap: 1 }}>
              {[
                <InstagramIcon />,
                <FacebookIcon />,
                <LinkedInIcon />,
                <TwitterIcon />,
                <YouTubeIcon />,
              ].map((icon, index) => (
                <IconButton key={index} sx={{ color: "white" }}>
                  {icon}
                </IconButton>
              ))}
            </Box> */}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default HomePage;
