import React, { useContext, useEffect, useState } from "react";
import Header from "../Header/Header";
import BoardBar from "./BoardBar";
import BoardContent from "./BoardContent";
import FakeBoardContent from "./FakeBoardContent";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { getDetailBoardAPI, updateColumnOrderIds } from "~/apis";
import { LoadingContext } from "~/page/LoadingProvider";
import { registerLoadingSetter } from "~/utils/LoadingManager";
import { isEmpty } from "lodash";
import { generatePlaceholderCard } from "~/utils/constant";

const Board = () => {
  let { boardId } = useParams();
  const { isCallingApi, setIsCallingApi } = useContext(LoadingContext);
  const [board, setBoard] = useState([]);
  // const location = useLocation();
  // let [searchParams] = useSearchParams();
  // searchParams.forEach((i) => {
  //   console.log("🚀 ~ Board ~ i:", i);
  //   return i;
  // });
  // console.log("🚀 ~ Board ~ location:", location);
  const moveCardApi = async (ArrayColumns) => {
    const columnsOrderIds = ArrayColumns.map((column) => column?._id);
    board.columns = ArrayColumns;
    board.columnOrderIds = columnsOrderIds;
    await updateColumnOrderIds(boardId, columnsOrderIds)
      .then((res) => {
        console.log("🚀 ~ moveCardApi ~ res:", res);
      })
      .catch((error) => {
        console.log("🚀 ~ moveCardApi ~ error:", error);
      });
  };
  const handleGetBoardDetail = async (loading = true) => {
    if (boardId) {
      await getDetailBoardAPI(boardId, loading)
        .then((res) => {
          setBoard(() => {
            const newColumn = res.data.columns.find((column) =>
              isEmpty(column.cardOrderIds)
            );
            if (newColumn) {
              newColumn.cards = [generatePlaceholderCard(newColumn)];
              newColumn.cardOrderIds = newColumn.cards.map((card) => card._id);
            }

            return res.data;
          });
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
            moveCardApi={moveCardApi}
          />
        </>
      )}

      {/* <FakeBoardContent board={board}></FakeBoardContent> */}
    </>
  );
};

export default Board;
