import React, { useContext, useEffect, useState } from "react";
import Header from "../Header/Header";
import BoardBar from "./BoardBar";
import BoardContent from "./BoardContent";
import FakeBoardContent from "./FakeBoardContent";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import {
  getDetailBoardAPI,
  updateCardOrderIds,
  updateColumnOrderIds,
} from "~/apis";
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
  const moveColumnApi = async (ArrayColumns) => {
    const columnsOrderIds = ArrayColumns.map((column) => column?._id);
    board.columns = ArrayColumns;
    board.columnOrderIds = columnsOrderIds;
    await updateColumnOrderIds(boardId, columnsOrderIds)
      .then((res) => {
        console.log("🚀 ~ moveColumnApi ~ res:", res);
      })
      .catch((error) => {
        console.log("🚀 ~ moveColumnApi ~ error:", error);
      });
  };
  const moveCardSameColumnApi = async (columnIds, ArrayCards) => {
    const targetColumn = board.columns.find(
      (column) => column._id === columnIds
    );
    const orderCardIds = ArrayCards.map((card) => card?._id);
    targetColumn.cards = ArrayCards;
    targetColumn.cardOrderIds = orderCardIds;
    await updateCardOrderIds(columnIds, orderCardIds)
      .then((res) => {
        console.log("🚀 ~ moveCardSameColumnApi ~ res:", res);
      })
      .catch((error) => {
        console.log("🚀 ~ moveCardSameColumnApi ~ error:", error);
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
            moveCardSameColumnApi={moveCardSameColumnApi}
          />
        </>
      )}

      {/* <FakeBoardContent board={board}></FakeBoardContent> */}
    </>
  );
};

export default Board;
