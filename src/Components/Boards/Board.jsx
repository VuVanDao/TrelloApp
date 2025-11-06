import React from "react";
import Header from "../Header/Header";
import BoardBar from "./BoardBar";
import BoardContent from "./BoardContent";

const Board = ({ board }) => {
  return (
    <>
      <Header />
      <BoardBar boardTitle={board.title} />
      <BoardContent board={board} />
    </>
  );
};

export default Board;
