import { User } from "@/models";
import { Pokemons } from "@/models/Pokemons";
import { configureStore } from "@reduxjs/toolkit";
import {
  favoritesSlice,
  pokemonsSlice,
  byNameSlice,
  detailSlice,
  errorSlice,
  allUsersSlice,
  userSlice,
} from "../states";

export interface AppStore {
  pokemons: Pokemons[];
  favorites: Pokemons[];
  byName: Pokemons[];
  detail: Pokemons;
  error: string;
  user: User;
  users: User[];
}

export const store = configureStore<AppStore>({
  reducer: {
    favorites: favoritesSlice.reducer,
    pokemons: pokemonsSlice.reducer,
    byName: byNameSlice.reducer,
    detail: detailSlice.reducer,
    error: errorSlice.reducer,
    users: allUsersSlice.reducer,
    user: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
