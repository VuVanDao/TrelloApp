import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoadingPage from "~/Components/LoadingPage/LoadingPage";

const LoginPage = () => {
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();

  const handleLogin = async () => {
    if (!isAuthenticated && !user) loginWithRedirect();
  };
  useEffect(() => {
    handleLogin();
  }, [user, isAuthenticated]);
  return (
    <>
      <LoadingPage></LoadingPage>
    </>
  );
};

export default LoginPage;
