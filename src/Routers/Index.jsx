import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Boards from "~/page/Boards/Boards";
import HomePage from "~/page/HomePage";

const VerifyAccount = lazy(() => import("~/page/Auth/VerifyAccount"));
const App = lazy(() => import("~/App"));
const LoginPage = lazy(() => import("~/page/Auth/LoginPage"));

const Index = () => {
  const HandleRedirectToTrello = () => {
    return <Navigate to={"/boards"} />;
  };
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<HandleRedirectToTrello />}></Route>
          <Route path="/vi" element={<HomePage />} />
          <Route path="/verify_account" element={<VerifyAccount />} />
          <Route path="/boards" element={<Boards />}>
            <Route path=":boardId" element={<App />} />
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
