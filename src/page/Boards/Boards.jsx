import React, { use, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "~/Components/Header/Header";

const Boards = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Boards;
