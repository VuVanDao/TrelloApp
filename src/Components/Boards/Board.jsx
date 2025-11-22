import React, { useContext, useEffect, useState } from "react";
import Header from "../Header/Header";
import BoardBar from "./BoardBar";
import BoardContent from "./BoardContent";
import FakeBoardContent from "./FakeBoardContent";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { LoadingContext } from "~/page/LoadingProvider";
import { registerLoadingSetter } from "~/utils/LoadingManager";
import { cloneDeep, isEmpty } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import {
  getDetailBoardReduxAPI,
  updateCardOrderIdsRedux,
  updateColumnOrderIdsRedux,
  updateCurrentActiveBoard,
  updateMoveCardFromDifferentColumnRedux,
} from "~/utils/Redux/ActiveBoardSlice";
import LoadingPage from "../LoadingPage/LoadingPage";

const Board = () => {
  let { boardId } = useParams();
  const { isCallingApi, setIsCallingApi } = useContext(LoadingContext);
  const [board, setBoard] = useState([]);
  const activeBoard = useSelector((state) => {
    return state.activeBoardReducer.activeBoardState;
  });

  const dispatch = useDispatch();
  // const location = useLocation();
  // let [searchParams] = useSearchParams();
  // console.log("🚀 ~ Board ~ searchParams:", searchParams[0]);
  // searchParams.forEach((i) => {
  //   console.log("🚀 ~ Board ~ i:", i);
  //   return i;
  // });
  // console.log("🚀 ~ Board ~ location:", location);
  const moveColumnApi = async (ArrayColumns) => {
    const boardClone = cloneDeep(activeBoard);
    const columnOrderIds = ArrayColumns.map((column) => column?._id);
    boardClone.columns = ArrayColumns;
    boardClone.columnOrderIds = columnOrderIds;
    dispatch(updateCurrentActiveBoard(boardClone)); // error khi để dispatch ở trước setBoard, tính bất biến của redux
    dispatch(updateColumnOrderIdsRedux({ boardId, columnOrderIds }));
  };
  const moveCardSameColumnApi = async (columnIds, ArrayCards) => {
    const boardClone = cloneDeep(activeBoard);
    // tìm column mà card đang kéo thả
    const targetColumn = boardClone.columns.find(
      (column) => column._id === columnIds
    );
    targetColumn.cards = ArrayCards;
    targetColumn.cardOrderIds = ArrayCards.map((card) => card._id);
    dispatch(updateCurrentActiveBoard(boardClone));
    dispatch(
      updateCardOrderIdsRedux({
        columnIds,
        ArrayCards: targetColumn.cardOrderIds,
      })
    );
  };
  const moveCardDifferentColumnApi = async (
    nextOverColumn,
    ActiveDraggingCardId,
    OldColumnWhenDraggingCard,
    nextColumn
  ) => {
    const newBoard = cloneDeep(activeBoard);
    newBoard.columns = nextColumn;
    newBoard.columnOrderIds = nextColumn.map((column) => column?._id);
    dispatch(updateCurrentActiveBoard(newBoard));

    // tìm column active (column co card chuyển sang column khác) để lấy cardOrderIds
    const preCardOrderIds = nextColumn.find(
      (column) => column._id === OldColumnWhenDraggingCard._id
    );

    // tìm column over (column co card chuyển đến từ column khác) để lấy cardOrderIds
    const nextCardOrderIds = nextColumn.find(
      (column) => column._id === nextOverColumn._id
    );
    // check xem column active có empty không
    const checkEmptyColumn =
      preCardOrderIds.cardOrderIds.length === 1 &&
      preCardOrderIds.cardOrderIds[0].includes("-placeholder-card");
    dispatch(
      updateMoveCardFromDifferentColumnRedux({
        activeCardId: ActiveDraggingCardId,
        nextColumnId: nextOverColumn._id,
        nextCardOrderIds: nextCardOrderIds.cardOrderIds,
        preColumn: OldColumnWhenDraggingCard._id,
        preCardOrderIds: checkEmptyColumn ? [] : preCardOrderIds.cardOrderIds,
      })
    );
  };
  const handleGetBoardDetail = async (loading = true) => {
    if (boardId) {
      dispatch(getDetailBoardReduxAPI({ boardId, loading }));
    }
  };
  useEffect(() => {
    registerLoadingSetter(setIsCallingApi);
    handleGetBoardDetail();
  }, []);
  return (
    <>
      {isCallingApi ? (
        <LoadingPage></LoadingPage>
      ) : (
        <>
          <BoardBar boardTitle={activeBoard?.title} />
          <BoardContent
            board={activeBoard}
            handleGetBoardDetail={handleGetBoardDetail}
            moveCardSameColumnApi={moveCardSameColumnApi}
            moveColumnApi={moveColumnApi}
            moveCardDifferentColumnApi={moveCardDifferentColumnApi}
          />
        </>
      )}

      {/* <FakeBoardContent board={board}></FakeBoardContent> */}
    </>
  );
};
export default Board;
