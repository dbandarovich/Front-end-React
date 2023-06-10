import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authApi } from "../api/api";

const initialState = {
  token: {},
};

export const fetchRegistration = createAsyncThunk(
  "registration/fetchRegistration",
  async (values) => {
    return authApi.registration(values).then(console.log);
  }
);

export const RegistrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRegistration.fulfilled, (state, action) => {
      console.log(action);
    });
  },
});

export default RegistrationSlice.reducer;
