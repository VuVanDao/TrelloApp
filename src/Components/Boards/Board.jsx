import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import BoardBar from "./BoardBar";
import BoardContent from "./BoardContent";
import FakeBoardContent from "./FakeBoardContent";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { getDetailBoardAPI } from "~/apis";

const Board = () => {
  let { boardId } = useParams();
  const location = useLocation();
  let [searchParams] = useSearchParams();
  searchParams.forEach((i) => {
    console.log("🚀 ~ Board ~ i:", i);
    return i;
  });

  console.log("🚀 ~ Board ~ location:", location);
  const [board, setBoard] = useState([]);
  const handleGetBoardDetail = async () => {
    if (boardId) {
      await getDetailBoardAPI(boardId)
        .then((res) => {
          console.log("🚀 ~ handleGetBoardDetail ~ res:", res);
          setBoard(res.data);
        })
        .catch((err) => {
          console.log("🚀 ~ handleGetBoardDetail ~ err:", err);
        });
    }
  };
  useEffect(() => {
    handleGetBoardDetail();
  }, []);
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
