import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import InterceptorAxios from "~/utils/InterceptorAxios";
import { apiBackend, apiVersion, generatePlaceholderCard } from "../constant";
import { isEmpty } from "lodash";
export const createAccountRedux = createAsyncThunk(
  // redux DetailBoardAPI :https://gemini.google.com/app/48d179cf17ed9880?hl=vi
  "activeBoard/createAccountRedux",
  async ({ email, username, auth0Id, avatar, token }, thunkAPI) => {
    const response = await InterceptorAxios.post(
      `${apiBackend}/${apiVersion}/api/accounts/create_account`,
      {
        email,
        username,
        auth0Id,
        avatar,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  }
);

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    accountState: null,
  },
  reducers: {
    updateCurrentAccount: (state, action) => {
      state.accountState = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(createAccountRedux.fulfilled, (state, action) => {
      const res = action.payload.data;
      state.accountState = res;
    });
  },
});

// Action creators are generated for each case reducer function
export const { updateCurrentAccount } = accountSlice.actions;
