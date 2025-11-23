import InterceptorAxios from "~/utils/InterceptorAxios";
import { apiBackend, apiVersion } from "~/utils/constant";
//board
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
// account
export const findAccountByAuth0IdOrEmail = async (id) => {
  if (id) {
    const res = await InterceptorAxios.get(
      `${apiBackend}/${apiVersion}/api/accounts/${id}`
    );
    return res.data;
  }
};
