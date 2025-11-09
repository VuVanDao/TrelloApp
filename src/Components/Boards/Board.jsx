import React from "react";
import Header from "../Header/Header";
import BoardBar from "./BoardBar";
import BoardContent from "./BoardContent";
import FakeBoardContent from "./FakeBoardContent";

const Board = ({ board }) => {
  return (
    <>
      <Header />
      <BoardBar boardTitle={board.title} />
      <BoardContent board={board} />
      {/* <FakeBoardContent board={board}></FakeBoardContent> */}
    </>
  );
};

export default Board;
