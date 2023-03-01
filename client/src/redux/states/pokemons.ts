import { Pokemons } from "@/models/Pokemons";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Pokemons[] = [];

// se pone el nombre con slice por convencion, para distinguir que es un pedazo de estado
export const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    getPokemons: (state, action: PayloadAction<Pokemons>) => {
      console.log("soy action.payload", action.payload);

      state.push(action.payload);
    },
  },
});

export const { getPokemons } = pokemonsSlice.actions;
