import axios from "axios";
import { Dispatch } from "@reduxjs/toolkit";
import { getPokemons } from "../states/pokemons";
import { getByName } from "../states/pokemonsByName";
import { getDetail } from "../states/detail";

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

export const pokemonsDetail =
  (id: string | undefined) => (dispatch: Dispatch) => {
    axios
      .get(`http://localhost:3001/pokemonId/${id}`)
      .then((res) => {
        return dispatch(getDetail(res.data));
      })
      .catch((err) => console.error(err));
  };
