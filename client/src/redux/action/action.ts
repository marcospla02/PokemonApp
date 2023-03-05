import axios from "axios";
import { Dispatch } from "@reduxjs/toolkit";
import { getPokemons, getByName, messageError, getDetail } from "../states";

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
    .catch((error) => dispatch(messageError(error.response.data)));
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
