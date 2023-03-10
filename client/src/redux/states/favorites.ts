import { Actions } from "@/models/types";
import { Pokemons } from "@/models/Pokemons";
import {
  getLocalStorage,
  setLocalStorage,
} from "@/utility/localStorage.utility";
import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";

const initialState: Pokemons[] = [];

// exporto el slice
export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: getLocalStorage(Actions.FAVORITES)
    ? JSON.parse(getLocalStorage(Actions.FAVORITES) as string)
    : initialState,
  reducers: {
    addFavorites: (state, action: PayloadAction<Pokemons>) => {
      const fav = [...state, action.payload];
      setLocalStorage(Actions.FAVORITES, fav);
      return fav;
    },
    removeFavorites: (state, action) => {
      // current(state); si no ponia el current state me traia el state con un proxy y no podia manejarlo. (buscar el stack overflow (si no me acuerdo porque era esto))
      const filteredState = current(state).filter(
        (fav: Pokemons) => fav.id !== action.payload
      );
      setLocalStorage(Actions.FAVORITES, filteredState);
      return filteredState;
    },
    addFavoritesArray: (state, action: PayloadAction<Pokemons[]>) => {
      console.log("soy action", action.payload);
      const allFav: any = getLocalStorage(Actions.FAVORITES);
      const favoriteParse = JSON.parse(allFav);
      return [...favoriteParse, ...action.payload];
    },
  },
});

export const { addFavorites, removeFavorites, addFavoritesArray } =
  favoritesSlice.actions;
