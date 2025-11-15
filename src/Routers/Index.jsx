import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "~/App";

const Index = () => {
  return (
    <>
      <Routes>
        <Route path="/boards/:boardId" element={<App />} />
      </Routes>
    </>
  );
};

export default Index;
