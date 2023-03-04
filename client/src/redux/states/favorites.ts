import { Actions } from "@/models/types";
import { Pokemons } from "@/models/Pokemons";
import {
  getLocalStorage,
  setLocalStorage,
} from "@/utility/localStorage.utility";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Pokemons[] = [];

// exporto el slice
export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: getLocalStorage(Actions.FAVORITES)
    ? JSON.parse(getLocalStorage(Actions.FAVORITES) as string)
    : initialState,
  reducers: {
    addFavorites: (state, action: PayloadAction<Pokemons>) => {
      setLocalStorage(Actions.FAVORITES, state);
      return [...state, action.payload];
    },
  },
});

export const { addFavorites } = favoritesSlice.actions;
