import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, Typography, Zoom } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { findAccountByAuth0IdOrEmail } from "~/apis";
import LoadingPage from "~/Components/LoadingPage/LoadingPage";
import {
  createAccountRedux,
  LoginAccountRedux,
  updateAccountRedux,
  updateCurrentAccount,
} from "~/utils/Redux/AccountSlice";

const VerifyAccount = () => {
  const {
    loginWithRedirect,
    logout,
    isAuthenticated,
    user,
    isLoading,
    getAccessTokenSilently,
  } = useAuth0();
  let [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("🚀 ~ Boards ~ isAuthenticated:", isAuthenticated);
  console.log("🚀 ~ Boards ~ isLoading:", isLoading);
  console.log("🚀 ~ Boards ~ user:", user);
  const handleLogin = async () => {
    if (isAuthenticated && user && user.email_verified) {
      const res = await dispatch(
        LoginAccountRedux({ email: user.email, auth0Id: user.sub })
      );
      if (!res.payload?.data?.email || !res.payload?.data?.auth0Id) {
        await dispatch(
          updateAccountRedux({ email: user?.email, auth0Id: user?.sub })
        );
        navigate("/boards");
      } else {
        dispatch(updateCurrentAccount(res?.payload?.data));
        navigate("/boards");
      }
      if (!res?.payload?.data) {
        // 1. Lấy token để bảo mật API (Backend sẽ check token này)
        const token = await getAccessTokenSilently();
        dispatch(
          createAccountRedux({
            email: user.email,
            username: user.nickname || user.given_name,
            auth0Id: user.sub,
            avatar: user.picture,
            token,
          })
        );
        navigate("/boards");
        return;
      }
    }
  };
  useEffect(() => {
    handleLogin();
  }, [isAuthenticated, user, isLoading]);
  if (isLoading) {
    return <LoadingPage></LoadingPage>;
  } else {
    return (
      <>
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Zoom in={true} style={{ transitionDelay: "200ms" }}>
            {isAuthenticated && user && user.email_verified ? (
              <Box
                sx={{
                  width: "500px",
                  height: "300px",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                  backgroundColor: "#fff",
                  color: "black",
                  borderRadius: "10px",
                  gap: "10px",
                }}
              >
                <Typography>VerifiedAccount</Typography>
              </Box>
            ) : (
              <Box
                sx={{
                  width: "500px",
                  height: "300px",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                  backgroundColor: "#fff",
                  color: "black",
                  borderRadius: "10px",
                  gap: "10px",
                }}
              >
                <Typography>{searchParams.get("error")}</Typography>
                <Typography>{searchParams.get("error_description")}</Typography>
                <Typography>
                  Sau khi xác thực với email của bạn xong, hãy thoát khỏi trang
                  hoặc làm mới trang và đăng nhập lại
                </Typography>
                <Link
                  style={{
                    padding: "5px 25px",
                    color: "black",
                    border: "1px solid black",
                    borderRadius: "5px",
                  }}
                  to={"https://mail.google.com/mail/u/0/#inbox"}
                >
                  Go to my email
                </Link>
                <Button
                  onClick={() => {
                    logout();
                  }}
                  sx={{
                    padding: "5px 25px",
                    color: "#fff",
                  }}
                  variant="contained"
                >
                  Back to home page
                </Button>
              </Box>
            )}
          </Zoom>
        </Box>
      </>
    );
  }
};

export default VerifyAccount;
