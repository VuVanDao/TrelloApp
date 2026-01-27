import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import InterceptorAxios from "~/utils/InterceptorAxios";
import { apiBackend, apiVersion, generatePlaceholderCard } from "../constant";
import { isEmpty } from "lodash";
export const getDetailBoardReduxAPI = createAsyncThunk(
  // redux DetailBoardAPI :https://gemini.google.com/app/48d179cf17ed9880?hl=vi
  "activeBoard/getDetailBoardReduxAPI",
  async ({ boardId, loading = true }, thunkAPI) => {
    const response = await InterceptorAxios.get(
      `${apiBackend}/${apiVersion}/api/boards/${boardId}?loading=${loading}`,
    );
    return response.data;
  },
);
export const updateColumnOrderIdsRedux = createAsyncThunk(
  "activeBoard/updateColumnOrderIdsRedux",
  async ({ boardId, columnOrderIds }, thunkAPI) => {
    const response = await InterceptorAxios.put(
      `${apiBackend}/${apiVersion}/api/boards/${boardId}`,
      { columnOrderIds },
    );
    return response.data;
  },
);
export const updateCardOrderIdsRedux = createAsyncThunk(
  "activeBoard/updateCardOrderIdsRedux",
  async ({ columnIds, ArrayCards }, thunkAPI) => {
    const response = await InterceptorAxios.put(
      `${apiBackend}/${apiVersion}/api/columns/${columnIds}`,
      { cardOrderIds: ArrayCards },
    );
    return response.data;
  },
);
export const updateMoveCardFromDifferentColumnRedux = createAsyncThunk(
  "activeBoard/updateMoveCardFromDifferentColumnRedux",
  async (
    {
      activeCardId, // id của cái card sẽ thay đổi columnID
      nextColumnId, // cột mới để đổi cardOrderIds
      nextCardOrderIds,
      preColumn, // cái cột cũ, cx sẽ thay đổi cardOrderIds
      preCardOrderIds,
    },
    thunkAPI,
  ) => {
    const response = await InterceptorAxios.put(
      `${apiBackend}/${apiVersion}/api/columns/move_card_different_column/${nextColumnId}`,
      {
        activeCardId,
        nextCardOrderIds,
        preColumn,
        preCardOrderIds,
      },
    );
    return response.data;
  },
);
export const activeBoardSlice = createSlice({
  name: "activeBoard",
  initialState: {
    activeBoardState: null,
  },
  reducers: {
    updateCurrentActiveBoard: (state, action) => {
      state.activeBoardState = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getDetailBoardReduxAPI.fulfilled, (state, action) => {
      const res = action.payload.data;
      const newColumn = res.columns.filter((column) =>
        isEmpty(column?.cardOrderIds),
      );

      if (newColumn) {
        newColumn.forEach((column) => {
          column.cards = [generatePlaceholderCard(column)];
          column.cardOrderIds = column.cards.map((card) => card._id);
        });
      }
      state.activeBoardState = res;
    });
    builder.addCase(updateColumnOrderIdsRedux.fulfilled, (state, action) => {
      //   state.activeBoardState = res;
    });
    builder.addCase(updateCardOrderIdsRedux.fulfilled, (state, action) => {
      //   state.activeBoardState = res;
    });
    builder.addCase(
      updateMoveCardFromDifferentColumnRedux.fulfilled,
      (state, action) => {
        //   state.activeBoardState = res;
      },
    );
  },
});

// Action creators are generated for each case reducer function
export const { updateCurrentActiveBoard } = activeBoardSlice.actions;
