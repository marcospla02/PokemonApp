import { Pokemons } from "@/models/Pokemons";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Pokemons[] = [];

// se pone el nombre con slice por convencion, para distinguir que es un pedazo de estado
export const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    getPokemons: (state, action: PayloadAction<Pokemons>) => {
      if (
        state.length === 0 ||
        state.filter((poke) => poke.id === action.payload.id).length === 0
      )
        return [...state, action.payload];
    },
    // getByName: (state, action: PayloadAction<Pokemons>) => {
    //   return [action.payload];
    // },
  },
});

export const { getPokemons } = pokemonsSlice.actions;
