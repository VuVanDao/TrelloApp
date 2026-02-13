import { createSlice } from "@reduxjs/toolkit";

export const CardAndColumnDisableSlice = createSlice({
  name: "CardAndColumnDisable",
  initialState: {
    CardDisable: false,
    ColumnDisable: false,
  },
  reducers: {
    updateCurrentCardDisable: (state, action) => {
      state.CardDisable = action.payload;
    },
    updateCurrentColumnDisable: (state, action) => {
      state.ColumnDisable = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateCurrentCardDisable, updateCurrentColumnDisable } =
  CardAndColumnDisableSlice.actions;
