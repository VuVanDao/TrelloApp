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
