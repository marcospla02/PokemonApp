import { Pokemons } from "@/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Pokemons[] = [];

export const byNameSlice = createSlice({
  name: "byName",
  initialState,
  reducers: {
    getByName: (state, action: PayloadAction<Pokemons>) => {
      return [...state, action.payload];
    },
  },
});

export const { getByName } = byNameSlice.actions;
