import InterceptorAxios from "~/utils/InterceptorAxios";
import { apiBackend, apiVersion } from "~/utils/constant";
export const getAllPinnedBoardApi = async (accountId) => {
  if (accountId) {
    const res = await InterceptorAxios.get(
      `${apiBackend}/${apiVersion}/api/pinned_boards/${accountId}`,
    );
    return res.data;
  }
};
