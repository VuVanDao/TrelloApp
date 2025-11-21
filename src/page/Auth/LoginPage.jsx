import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Link,
  Stack,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import {
  FaGoogle,
  FaMicrosoft,
  FaApple,
  FaSlack,
  FaTrello,
} from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useAuth0 } from "@auth0/auth0-react";

// Màu chủ đạo của Trello/Atlassian
const TRELLO_BLUE = "#0052CC";
const BG_COLOR = "#F9FAFC";

const LoginPage = () => {
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: BG_COLOR,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden", // Ẩn thanh cuộn nếu ảnh nền quá to
        py: "50px",
      }}
    >
      {/* --- Hình nền minh họa (Trái & Phải) --- */}
      {/* Bạn thay thế 'src' bằng đường dẫn ảnh thật của bạn */}
      <Box
        component="img"
        src="https://images.ctfassets.net/rz1oowkt5gyp/7pYji9lyMKmiu9uJ8a1b8/1f5833069746d4f603404e6054030e2c/left.svg"
        alt="Left Illustration"
        sx={{
          position: "fixed",
          left: 0,
          bottom: 0,
          width: { xs: "0px", md: "250px", lg: "350px" }, // Ẩn trên mobile
          zIndex: 0,
        }}
      />
      <Box
        component="img"
        src="https://images.ctfassets.net/rz1oowkt5gyp/5QIzYxue6b7raOnZK95c0/5426873d3c43e16879d1492226b057a8/right.svg"
        alt="Right Illustration"
        sx={{
          position: "fixed",
          right: 0,
          bottom: 0,
          width: { xs: "0px", md: "250px", lg: "350px" }, // Ẩn trên mobile
          zIndex: 0,
        }}
      />

      {/* --- Khung đăng nhập chính (Card) --- */}
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          maxWidth: "400px",
          padding: "32px 40px",
          zIndex: 1,
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 10px",
          borderRadius: "3px",
        }}
      >
        {/* Logo Trello */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 2,
            alignItems: "center",
            gap: 1,
          }}
        >
          {/* Đây là icon giả lập, bạn có thể thay bằng file SVG logo Trello */}
          <FaTrello size={24} color={TRELLO_BLUE} />
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "#253858",
              fontFamily: "sans-serif",
            }}
          >
            Trello
          </Typography>
        </Box>
        <Typography
          variant="h6"
          align="center"
          sx={{ mb: 3, fontSize: "16px", fontWeight: 600, color: "#172B4D" }}
        >
          Log in to continue
        </Typography>
        {/* Form nhập Email */}
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth
            placeholder="Enter your email"
            variant="outlined"
            size="small"
            {...register("example", { required: true })}
          />

          <Typography
            variant="caption"
            color="error"
            display="block"
            gutterBottom
          >
            {errors.example && <span>This field is required</span>}
            {/* Khu vực hiển thị lỗi nếu có */}
          </Typography>

          {/* Checkbox Remember me */}
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  sx={{
                    color: "#DFE1E6",
                    "&.Mui-checked": { color: TRELLO_BLUE },
                  }}
                />
              }
              label={
                <Typography sx={{ fontSize: "14px", color: "#5E6C84" }}>
                  Remember me
                </Typography>
              }
            />
          </Box>

          {/* Nút Continue */}
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#0052CC", // Màu xanh Trello cũ, dùng '#0065FF' cho màu mới hơn
              textTransform: "none",
              fontWeight: "bold",
              padding: "8px",
              "&:hover": {
                backgroundColor: "#0065FF",
              },
              mb: 3,
            }}
            type="submit"
          >
            Continue
          </Button>

          {/* Divider */}
          <Divider sx={{ color: "#5E6C84", fontSize: "12px", mb: 3 }}>
            Or continue with:
          </Divider>

          {/* Các nút Social Login */}
          <Stack spacing={1.5}>
            <Box onClick={() => loginWithRedirect()}>
              <SocialButton icon={<FaGoogle color="#DB4437" />} text="Google" />
            </Box>
            <Box onClick={() => loginWithRedirect()}>
              <SocialButton
                icon={<FaMicrosoft color="#F25022" />}
                text="Microsoft"
                onMouseDown={() => loginWithRedirect()}
              />
            </Box>
            <Box onClick={() => loginWithRedirect()}>
              <SocialButton
                icon={<FaApple color="black" />}
                text="Apple"
                onMouseDown={() => loginWithRedirect()}
              />
            </Box>
            <Box onClick={() => loginWithRedirect()}>
              <SocialButton
                icon={<FaSlack color="#4A154B" />}
                text="Slack"
                onMouseDown={() => loginWithRedirect()}
              />
            </Box>
          </Stack>

          {/* Footer Links */}
          <Box
            sx={{
              mt: 3,
              display: "flex",
              justifyContent: "center",
              gap: 2,
              fontSize: "14px",
            }}
          >
            <Link href="#" underline="hover" sx={{ color: TRELLO_BLUE }}>
              Can't log in?
            </Link>
            <Typography color="textSecondary">•</Typography>
            <Link href="#" underline="hover" sx={{ color: TRELLO_BLUE }}>
              Create an account
            </Link>
          </Box>
        </Box>
        <Divider></Divider>
        <Box sx={{ mt: 4, textAlign: "center", zIndex: 1 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              mb: 1,
              opacity: 0.6,
            }}
          >
            {/* Logo Atlassian (Giả lập bằng text/icon) */}
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", letterSpacing: 1, fontSize: "12px" }}
            >
              ▲ ATLASSIAN
            </Typography>
          </Box>

          <Typography
            variant="caption"
            display="block"
            sx={{ color: "#5E6C84", mb: 1 }}
          >
            One account for Trello, Jira, Confluence and{" "}
            <Link href="#" underline="hover">
              more
            </Link>
            .
          </Typography>

          <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
            <Link
              href="#"
              variant="caption"
              underline="hover"
              color="textSecondary"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              variant="caption"
              underline="hover"
              color="textSecondary"
            >
              User Notice
            </Link>
          </Box>

          {/* Dòng Recaptcha nhỏ xíu ở dưới cùng */}
          <Typography
            variant="caption"
            sx={{
              display: "block",
              mt: 2,
              color: "#97A0AF",
              fontSize: "10px",
              maxWidth: "300px",
            }}
          >
            This site is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply.
          </Typography>
        </Box>
      </Paper>

      {/* --- Footer Atlassian --- */}
    </Box>
  );
};

// Component con để tái sử dụng cho các nút Social
const SocialButton = ({ icon, text }) => (
  <Button
    fullWidth
    variant="outlined"
    startIcon={icon}
    sx={{
      color: "#172B4D",
      borderColor: "#DFE1E6", // Màu viền xám nhạt
      textTransform: "none",
      fontWeight: "bold",
      justifyContent: "center", // Để icon và text canh giữa nhưng icon lệch trái một chút
      "& .MuiButton-startIcon": {
        position: "absolute",
        left: "16px",
      },
      "&:hover": {
        backgroundColor: "#F4F5F7",
        borderColor: "#DFE1E6",
      },
    }}
  >
    {text}
  </Button>
);

export default LoginPage;
