import { Pokemons } from "@/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Pokemons[] = [];

export const byNameSlice = createSlice({
  name: "byName",
  initialState,
  reducers: {
    getByName: (state, action: PayloadAction<Pokemons>) => {
      if (state.filter((poke) => poke.id === action.payload.id)) {
        return [...state, action.payload];
      }
    },
  },
});

export const { getByName } = byNameSlice.actions;
