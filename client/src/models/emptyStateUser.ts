import { Pokemons } from "./Pokemons";

export interface User {
  id?: string;
  name: string;
  email: string;
  favorites: Pokemons[];
}

export const EmptyStatesUser: User = {
  id: "",
  name: "",
  email: "",
  favorites: [],
};
