import axios from "axios";
import { Dispatch } from "@reduxjs/toolkit";
import { getPokemons } from "../states/pokemons";
import { getByName } from "../states/pokemonsByName";

export const getAllPokemons = () => (dispatch: Dispatch) => {
  axios
    .get("http://localhost:3001/pokemons")
    .then((response) => {
      return dispatch(getPokemons(response.data));
    })
    .catch((error) => console.log(error));
};

export const getPokemonByName = (name: string) => (dispatch: Dispatch) => {
  axios
    .get(`http://localhost:3001/pokemons/${name}`)
    .then((response) => {
      return dispatch(getByName(response.data));
    })
    .catch((error) => console.error(error));
};
