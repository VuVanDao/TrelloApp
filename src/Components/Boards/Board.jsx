import React, { useContext, useEffect, useState } from "react";
import Header from "../Header/Header";
import BoardBar from "./BoardBar";
import BoardContent from "./BoardContent";
import FakeBoardContent from "./FakeBoardContent";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { getDetailBoardAPI } from "~/apis";
import { LoadingContext } from "~/page/LoadingProvider";
import { registerLoadingSetter } from "~/utils/LoadingManager";

const Board = () => {
  let { boardId } = useParams();
  const { isCallingApi, setIsCallingApi } = useContext(LoadingContext);
  // const location = useLocation();
  // let [searchParams] = useSearchParams();
  // searchParams.forEach((i) => {
  //   console.log("🚀 ~ Board ~ i:", i);
  //   return i;
  // });
  // console.log("🚀 ~ Board ~ location:", location);
  const [board, setBoard] = useState([]);
  const handleGetBoardDetail = async () => {
    if (boardId) {
      await getDetailBoardAPI(boardId)
        .then((res) => {
          setBoard(res.data);
        })
        .catch((err) => {
          console.log("🚀 ~ handleGetBoardDetail ~ err:", err);
        });
    }
  };
  useEffect(() => {
    registerLoadingSetter(setIsCallingApi);
    handleGetBoardDetail();
  }, []);
  return (
    <>
      <Header />
      {isCallingApi ? (
        <h1>Loading</h1>
      ) : (
        <>
          <BoardBar boardTitle={board.title} />
          <BoardContent
            board={board}
            handleGetBoardDetail={handleGetBoardDetail}
          />
        </>
      )}
      {/* <FakeBoardContent board={board}></FakeBoardContent> */}
    </>
  );
};

export default Board;
