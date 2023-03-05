import { EmptyStates, Pokemons } from "@/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const detailSlice = createSlice({
  name: "detail",
  initialState: EmptyStates,
  reducers: {
    getDetail: (state, action: PayloadAction<Pokemons>) => {
      return action.payload;
    },
  },
});

export const { getDetail } = detailSlice.actions;
