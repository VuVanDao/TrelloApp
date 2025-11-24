import axios from "axios";
import { loadingManager } from "./LoadingManager";
import { toast } from "react-toastify";
import { InjectStore } from "./Redux/ReduxStore";
import { LoginAccountRedux, LogoutAccountRedux } from "./Redux/AccountSlice";
import { refreshTokenApi } from "~/apis";
const instance = axios.create();
// thời gian chờ tối đa 1 request (10p)
instance.defaults.timeout = 1000 * 60 * 10;
instance.defaults.withCredentials = true;

export let isCallingApi = false;
// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // console.log("🚀 ~ config:", config);
    const { method, url } = config;
    if (method === "get" && url.includes(`?loading`)) {
      const loadingValue = url.split("?");
      if (loadingValue[1]?.includes("true")) {
        loadingManager.set(true);
        return config;
      }
    }
    loadingManager.set(false);
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    loadingManager.set(true);
    return Promise.reject(error);
  }
);
let refreshTokenPromise = null;
// Add a response interceptor
instance.interceptors.response.use(
  function onFulfilled(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    loadingManager.set(false);
    return response;
  },
  function onRejected(error) {
    console.log("🚀 ~ onRejected ~ error:", error);
    if (error.response?.status !== 410) {
      // toast.error(error.response.data.message);
    }
    if (error.response?.status === 401) {
      // toast.error(error.response.data.message);
      InjectStore.dispatch(LogoutAccountRedux());
    }
    // logic auto refresh token: https://gemini.google.com/app/49b2366ee2e813da?hl=vi
    const originalRequest = error.config;
    if (error.response?.status === 410 && !originalRequest._retry) {
      // !originalRequest._retry: Đây là cái "chốt chặn".
      // Nó kiểm tra xem request này đã từng được retry chưa.
      // Nếu chưa thì mới làm, để tránh trường hợp vòng lặp vô tận (Lỗi -> Retry -> Vẫn lỗi -> Retry tiếp -> ... treo trình duyệt).
      originalRequest._retry = true;
      if (!refreshTokenPromise) {
        // Nếu không có dòng if này: Trình duyệt sẽ gọi  API refresh_token nhiều lần lên server.
        // Server sẽ bị spam và có thể trả về lỗi vì token bị refresh loạn xạ
        refreshTokenPromise = refreshTokenApi()
          .then((data) => {
            return data?.data?.accessToken;
          })
          .catch((error) => {
            InjectStore.dispatch(LoginAccountRedux());
            return Promise.reject(error);
          })
          .finally(() => {
            refreshTokenPromise = null;
          });
      }
      return refreshTokenPromise.then((accessToken) => {
        return instance(originalRequest);
      });
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    loadingManager.set(false);
    return Promise.reject(error);
  }
);
export default instance;
