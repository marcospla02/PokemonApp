import { Pokemons } from "@/models/Pokemons";
import { configureStore } from "@reduxjs/toolkit";
import { favoritesSlice } from "../states/favorites";
import { pokemonsSlice } from "../states/pokemons";

export interface AppStore {
  pokemons: Pokemons[];
  favorites: Pokemons[];
}

export const store = configureStore<AppStore>({
  reducer: {
    favorites: favoritesSlice.reducer,
    pokemons: pokemonsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
