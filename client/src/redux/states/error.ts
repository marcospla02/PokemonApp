import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = "";

export const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    messageError: (state, action: PayloadAction) => {
      return action.payload;
    },
    deleteMessageError: (state, action: PayloadAction) => {
      return "";
    },
  },
});

export const { messageError, deleteMessageError } = errorSlice.actions;
