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
  updateMoveCardFromDifferentColumn,
} from "~/apis";
import { LoadingContext } from "~/page/LoadingProvider";
import { registerLoadingSetter } from "~/utils/LoadingManager";
import { cloneDeep, isEmpty } from "lodash";
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
    // setBoard((prev) => {
    //   const columnHaveCardsChange = cloneDeep(prev);
    //   // tìm column mà card đang kéo thả
    //   const targetColumn = columnHaveCardsChange.columns.find(
    //     (column) => column._id === columnIds
    //   );
    //   targetColumn.cards = ArrayCards;
    //   targetColumn.cardOrderIds = ArrayCards.map((card) => card._id);
    //   return columnHaveCardsChange;
    // });
    await updateCardOrderIds(
      columnIds,
      ArrayCards.map((card) => card?._id)
    )
      .then((res) => {
        // console.log("🚀 ~ moveCardSameColumnApi ~ res:", res);
      })
      .catch((error) => {
        console.log("🚀 ~ moveCardSameColumnApi ~ error:", error);
      });
  };
  const moveCardDifferentColumnApi = async (
    nextOverColumn,
    ActiveDraggingCardId,
    OldColumnWhenDraggingCard,
    nextColumn
  ) => {
    const newBoard = cloneDeep(board);
    newBoard.columns = nextColumn;
    newBoard.columnOrderIds = nextColumn.map((column) => column?._id);
    setBoard(newBoard);

    const preCardOrderIds = nextColumn.find(
      (column) => column._id === OldColumnWhenDraggingCard._id
    );

    const nextCardOrderIds = nextColumn.find(
      (column) => column._id === nextOverColumn._id
    );
    const checkEmptyColumn =
      preCardOrderIds.cardOrderIds.length === 1 &&
      preCardOrderIds.cardOrderIds[0].includes("-placeholder-card");
    await updateMoveCardFromDifferentColumn(
      ActiveDraggingCardId,
      nextOverColumn._id,
      nextCardOrderIds.cardOrderIds,
      OldColumnWhenDraggingCard._id,
      checkEmptyColumn ? [] : preCardOrderIds.cardOrderIds
    );
  };
  const handleGetBoardDetail = async (loading = true) => {
    if (boardId) {
      await getDetailBoardAPI(boardId, loading)
        .then((res) => {
          setBoard(() => {
            const newColumn = res.data.columns.filter((column) =>
              isEmpty(column.cardOrderIds)
            );

            if (newColumn) {
              newColumn.forEach((column) => {
                column.cards = [generatePlaceholderCard(column)];
                column.cardOrderIds = column.cards.map((card) => card._id);
              });
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
          {board && board?.columns && (
            <BoardContent
              board={board}
              handleGetBoardDetail={handleGetBoardDetail}
              moveCardSameColumnApi={moveCardSameColumnApi}
              moveColumnApi={moveColumnApi}
              moveCardDifferentColumnApi={moveCardDifferentColumnApi}
            />
          )}
        </>
      )}

      {/* <FakeBoardContent board={board}></FakeBoardContent> */}
    </>
  );
};

export default Board;
