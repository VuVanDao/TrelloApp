import { configureStore } from "@reduxjs/toolkit";
import { activeBoardSlice } from "./ActiveBoardSlice";

export default configureStore({
  reducer: {
    activeBoardReducer: activeBoardSlice.reducer,
  },
});
