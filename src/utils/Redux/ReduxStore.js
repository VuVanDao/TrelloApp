import { configureStore, combineReducers, createStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { activeBoardSlice } from "./ActiveBoardSlice";
import { accountSlice } from "./AccountSlice";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
} from "redux-persist";
// 1. Cấu hình persist
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["accountReducer", "activeBoardReducer"],
};
const rootReducer = combineReducers({
  activeBoardReducer: activeBoardSlice.reducer,
  accountReducer: accountSlice.reducer,
});
// 2. Tạo persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const InjectStore = createStore(persistedReducer);
export const persistor = persistStore(store);
