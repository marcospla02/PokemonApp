import { Pokemons } from "@/models/Pokemons";
import { configureStore } from "@reduxjs/toolkit";
import { favoritesSlice } from "../states/favorites";
import { pokemonsSlice } from "../states/pokemons";
import { byNameSlice } from "../states/pokemonsByName";

export interface AppStore {
  pokemons: Pokemons[];
  favorites: Pokemons[];
  byName: Pokemons[];
}

export const store = configureStore<AppStore>({
  reducer: {
    favorites: favoritesSlice.reducer,
    pokemons: pokemonsSlice.reducer,
    byName: byNameSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
