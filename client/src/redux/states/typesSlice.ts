import { Type } from "@/models";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Type[] = [];

export const typesSlice = createSlice({
  name: "types",
  initialState,
  reducers: {
    getTypeDb: (state, action) => {
      return action.payload;
    },
  },
});

export const { getTypeDb } = typesSlice.actions;
