import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const VerifyAccount = lazy(() => import("~/page/Auth/VerifyAccount"));
const Boards = lazy(() => import("~/page/Boards/Boards"));
const App = lazy(() => import("~/App"));
const HomePage = lazy(() => import("~/page/HomePage"));
const LoginPage = lazy(() => import("~/page/Auth/LoginPage"));
const LoginPasswordPage = lazy(() => import("~/page/Auth/LoginPasswordPage"));

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
            <Route path="step_2" element={<LoginPasswordPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default Index;
