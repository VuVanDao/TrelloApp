import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import InterceptorAxios from "~/utils/InterceptorAxios";
import { apiBackend, apiVersion, generatePlaceholderCard } from "../constant";
import { isEmpty } from "lodash";
import { toast } from "react-toastify";
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
export const updateAuth0IdAccountRedux = createAsyncThunk(
  // redux DetailBoardAPI :https://gemini.google.com/app/48d179cf17ed9880?hl=vi
  "activeBoard/updateAuth0IdAccountRedux",
  async ({ email, auth0Id, id }, thunkAPI) => {
    const response = await InterceptorAxios.put(
      `${apiBackend}/${apiVersion}/api/accounts/${id}`,
      {
        email,
        auth0Id,
      }
    );
    return response.data;
  }
);
export const updateAccountInfoRedux = createAsyncThunk(
  // redux DetailBoardAPI :https://gemini.google.com/app/48d179cf17ed9880?hl=vi
  "activeBoard/updateAccountInfoRedux",
  async ({ data, id }, thunkAPI) => {
    const response = await InterceptorAxios.put(
      `${apiBackend}/${apiVersion}/api/accounts/${id}`,
      {
        ...data,
      }
    );
    return response.data;
  }
);
export const LoginAccountRedux = createAsyncThunk(
  // redux DetailBoardAPI :https://gemini.google.com/app/48d179cf17ed9880?hl=vi
  "activeBoard/LoginAccountRedux",
  async ({ email, auth0Id, token }, thunkAPI) => {
    const response = await InterceptorAxios.post(
      `${apiBackend}/${apiVersion}/api/accounts/login`,
      {
        email,
        auth0Id,
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
export const LogoutAccountRedux = createAsyncThunk(
  "activeBoard/LogoutAccountRedux",
  async (data, thunkAPI) => {
    const response = await InterceptorAxios.get(
      `${apiBackend}/${apiVersion}/api/accounts/logout`
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
    builder.addCase(updateAuth0IdAccountRedux.fulfilled, (state, action) => {
      const res = action.payload.data;
      state.accountState = res;
    });
    builder.addCase(LoginAccountRedux.fulfilled, (state, action) => {
      // const res = action.payload.data;
      // state.accountState = res;
    });
    builder.addCase(LogoutAccountRedux.fulfilled, (state, action) => {
      state.accountState = null;
    });
    builder.addCase(updateAccountInfoRedux.fulfilled, (state, action) => {
      const res = action.payload.data;
      toast.success("update info account complete");
      state.accountState = res;
    });
  },
});

// Action creators are generated for each case reducer function
export const { updateCurrentAccount } = accountSlice.actions;
