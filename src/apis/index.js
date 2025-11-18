import InterceptorAxios from "~/utils/InterceptorAxios";
import { apiBackend, apiVersion } from "~/utils/constant";
//board
export const getDetailBoardAPI = async (boardId, loading = true) => {
  if (boardId) {
    const res = await InterceptorAxios.get(
      `${apiBackend}/${apiVersion}/api/boards/${boardId}?loading=${loading}`
    );
    return res.data;
  }
};
export const updateColumnOrderIds = async (boardId, ArrayColumns) => {
  if (boardId) {
    const res = await InterceptorAxios.put(
      `${apiBackend}/${apiVersion}/api/boards/${boardId}`,
      { columnOrderIds: ArrayColumns }
    );
    return res.data;
  }
};
//column
export const createNewColumn = async (data) => {
  if (data) {
    const res = await InterceptorAxios.post(
      `${apiBackend}/${apiVersion}/api/columns`,
      data
    );
    return res.data;
  }
};
export const updateCardOrderIds = async (columnId, ArrayColumns) => {
  if (columnId) {
    const res = await InterceptorAxios.put(
      `${apiBackend}/${apiVersion}/api/columns/${columnId}`,
      { cardOrderIds: ArrayColumns }
    );
    return res.data;
  }
};
export const updateMoveCardFromDifferentColumn = async (
  activeCardId, // id của cái card sẽ thay đổi columnID
  nextColumnId, // cột mới để đổi cardOrderIds
  nextCardOrderIds,
  preColumn, // cái cột cũ, cx sẽ thay đổi cardOrderIds
  preCardOrderIds
) => {
  const res = await InterceptorAxios.put(
    `${apiBackend}/${apiVersion}/api/columns/move_card_different_column/${nextColumnId}`,
    {
      activeCardId,
      nextCardOrderIds,
      preColumn,
      preCardOrderIds,
    }
  );
  return res.data;
};
export const ArchiveColumn = async (columnId, boardId) => {
  if (columnId) {
    const res = await InterceptorAxios.put(
      `${apiBackend}/${apiVersion}/api/columns/archive_column/${columnId}`,
      { _destroy: true, boardId }
    );
    return res.data;
  }
};
//card
export const createNewCard = async (data) => {
  if (data) {
    const res = await InterceptorAxios.post(
      `${apiBackend}/${apiVersion}/api/cards`,
      data
    );
    return res.data;
  }
};
export const ArchiveCard = async (cardId, columnId) => {
  if (cardId) {
    const res = await InterceptorAxios.put(
      `${apiBackend}/${apiVersion}/api/cards/${cardId}`,
      { data: { _destroy: true }, columnId: columnId }
    );
    return res.data;
  }
};
