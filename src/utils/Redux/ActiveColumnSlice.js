import { createSlice } from "@reduxjs/toolkit";

export const activeColumnSlice = createSlice({
  name: "activeColumn",
  initialState: {
    openColumnFooter: false,
    columnId: null,
  },
  reducers: {
    updateFooterColumn: (state, action) => {
      state.openColumnFooter = action.payload?.openColumnFooter;
      state.columnId = action.payload?.columnId;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    // builder.addCase(updateColumnOrderIdsRedux.fulfilled, (state, action) => {
    //   //   state.activeBoardState = res;
    // });
  },
});

// Action creators are generated for each case reducer function
export const { updateFooterColumn } = activeColumnSlice.actions;
