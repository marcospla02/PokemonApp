import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = "";

export const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    messageError: (state, action: PayloadAction) => {
      console.log("soy action payload error:", action.payload);
      return action.payload;
    },
  },
});

export const { messageError } = errorSlice.actions;
