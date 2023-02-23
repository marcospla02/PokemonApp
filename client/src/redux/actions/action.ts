import { GET_POKEMONS } from "./cases";

import axios from "axios";

export const getPokemos = () => async (dispatch: any) => {
  try {
    const pokemonInfo = await axios("http://localhost:3001");
    const pokemons = pokemonInfo.data;

    return dispatch({ type: GET_POKEMONS, payload: pokemons });
  } catch (error: any) {
    console.error(error.message);
  }
};
