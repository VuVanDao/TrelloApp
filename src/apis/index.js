import InterceptorAxios from "~/utils/InterceptorAxios";
import { apiBackend, apiVersion } from "~/utils/constant";
//board
export const getDetailBoardAPI = async (boardId) => {
  if (boardId) {
    const res = await InterceptorAxios.get(
      `${apiBackend}/${apiVersion}/api/boards/${boardId}`
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
