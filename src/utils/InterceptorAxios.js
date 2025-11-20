import axios from "axios";
import { loadingManager } from "./LoadingManager";
import { toast } from "react-toastify";
const instance = axios.create();
// instance.defaults.withCredentials = true;
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
    toast.error(error.response.data.message);
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    loadingManager.set(false);
    return Promise.reject(error);
  }
);
export default instance;
