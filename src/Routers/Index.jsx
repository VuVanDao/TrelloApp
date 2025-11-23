import React, { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Boards from "~/page/Boards/Boards";
import HomePage from "~/page/HomePage";

const VerifyAccount = lazy(() => import("~/page/Auth/VerifyAccount"));
const App = lazy(() => import("~/App"));
const LoginPage = lazy(() => import("~/page/Auth/LoginPage"));

const Index = () => {
  const account = useSelector((state) => {
    return state.accountReducer.accountState;
  });

  const HandleRedirectToTrello = () => {
    return <Navigate to={"/boards"} />;
  };
  const HandleCheckSignIn = () => {
    if (!account || !account?.auth0Id) {
      return <Navigate to={"/login"} />;
    }
    return <Outlet />;
  };
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<HandleRedirectToTrello />}></Route>
          <Route path="/vi" element={<HomePage />} />
          <Route path="/verify_account" element={<VerifyAccount />} />
          <Route element={<HandleCheckSignIn />}>
            <Route path="/boards" element={<Boards />}>
              <Route path=":boardId" element={<App />} />
            </Route>
          </Route>
          <Route path="/login">
            <Route index element={<LoginPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default Index;
