import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authApi } from "../api/api";

const initialState = {
  token: {},
};

export const fetchAuth = createAsyncThunk("Auth/fetchAuth", async (values) => {
  return authApi.authentication(values).then(console.log);
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAuth.fulfilled, (state, action) => {
      console.log(action);
    });
  },
});

export default authSlice.reducer;
