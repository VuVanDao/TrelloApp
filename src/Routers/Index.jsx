import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const App = lazy(() => import("~/App"));
const HomePage = lazy(() => import("~/page/HomePage"));
const LoginPage = lazy(() => import("~/page/Auth/LoginPage"));

const Index = () => {
  const HandleRedirectToTrello = () => {
    return <Navigate to={"/vi"} />;
  };
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<HandleRedirectToTrello />}></Route>
          <Route path="/vi" element={<HomePage />} />
          <Route path="/boards/:boardId" element={<App />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default Index;
