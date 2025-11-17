import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
const App = lazy(() => import("~/App"));
import HomePage from "~/page/HomePage";

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
        </Routes>
      </Suspense>
    </>
  );
};

export default Index;
