import { Actions } from "@/models";
import { Pokemons } from "@/models/Pokemons";
import { getLocalStorage, setLocalStorage } from "@/utility";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Pokemons[] = [];

// se pone el nombre con slice por convencion, para distinguir que es un pedazo de estado
export const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState: getLocalStorage(Actions.GET_POKEMONS)
    ? JSON.parse(getLocalStorage(Actions.GET_POKEMONS) as string)
    : initialState,
  reducers: {
    getPokemons: (state, action: PayloadAction<Pokemons[]>) => {
      if (
        state.length === 0 ||
        state.filter((poke: Pokemons) =>
          action.payload.find((a) => poke.name === a.name)
        ).length === 0
      )
        setLocalStorage(Actions.GET_POKEMONS, action.payload);
      return [...action.payload];
    },
  },
});

export const { getPokemons } = pokemonsSlice.actions;
