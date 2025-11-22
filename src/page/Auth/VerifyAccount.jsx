import { useAuth0 } from "@auth0/auth0-react";
import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import LoadingPage from "~/Components/LoadingPage/LoadingPage";
import { createAccountRedux } from "~/utils/Redux/AccountSlice";

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
    console.log("hi");

    if (isAuthenticated && user && user.email_verified) {
      console.log("ha");
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
    }
  };
  useEffect(() => {
    handleLogin();
  }, [isAuthenticated, user, isLoading]);
  if (isLoading) {
    return <LoadingPage></LoadingPage>;
  }
  if (isAuthenticated && user && user.email_verified) {
    return <>VerifiedAccount</>;
  } else {
    return (
      <>
        <Box>
          <Typography>{searchParams.get("error")}</Typography>
        </Box>
      </>
    );
  }
};

export default VerifyAccount;
