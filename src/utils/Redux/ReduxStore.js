import { configureStore } from "@reduxjs/toolkit";
import { activeBoardSlice } from "./ActiveBoardSlice";
import { accountSlice } from "./AccountSlice";

export default configureStore({
  reducer: {
    activeBoardReducer: activeBoardSlice.reducer,
    accountReducer: accountSlice.reducer,
  },
});
