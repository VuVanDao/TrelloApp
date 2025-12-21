import InterceptorAxios from "~/utils/InterceptorAxios";
import { apiBackend, apiVersion } from "~/utils/constant";
//board
export const getMyBoards = async (page, limit, sortBy, sortOrder) => {
  const res = await InterceptorAxios.get(
    `${apiBackend}/${apiVersion}/api/boards?limit=${limit || 8}&page=${
      page || 1
    }&sortBy=${sortBy || "createdAt"}&sortOrder=${sortOrder || "asc"}`
  );
  return res.data;
};
export const createBoard = async (data) => {
  const res = await InterceptorAxios.post(
    `${apiBackend}/${apiVersion}/api/boards`,
    { ...data }
  );
  return res.data;
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
export const uploadAvatarApi = async (id, public_id, formData) => {
  if (id) {
    const res = await InterceptorAxios.put(
      `${apiBackend}/${apiVersion}/api/accounts/upload_avatar?accountId=${id}&public_id=${public_id}`,
      formData
    );
    return res.data;
  }
};
export const refreshTokenApi = async () => {
  const res = await InterceptorAxios.get(
    `${apiBackend}/${apiVersion}/api/accounts/refresh_token`
  );
  return res.data;
};
export const AddToRecentViewBoard = async (boardId, accountId) => {
  if (boardId && accountId) {
    const res = await InterceptorAxios.post(
      `${apiBackend}/${apiVersion}/api/board_recent_views/add_to_recent_view`,
      { boardId, accountId }
    );
    return res.data;
  }
};
