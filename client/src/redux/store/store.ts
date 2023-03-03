import { Pokemons } from "@/models/Pokemons";
import { configureStore } from "@reduxjs/toolkit";
import { detailSlice } from "../states/detail";
import { errorSlice } from "../states/error";
import { favoritesSlice } from "../states/favorites";
import { pokemonsSlice } from "../states/pokemons";
import { byNameSlice } from "../states/pokemonsByName";

export interface AppStore {
  pokemons: Pokemons[];
  favorites: Pokemons[];
  byName: Pokemons[];
  detail: Pokemons;
  error: string;
}

export const store = configureStore<AppStore>({
  reducer: {
    favorites: favoritesSlice.reducer,
    pokemons: pokemonsSlice.reducer,
    byName: byNameSlice.reducer,
    detail: detailSlice.reducer,
    error: errorSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
