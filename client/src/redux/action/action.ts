import axios from "axios";
import { Dispatch } from "@reduxjs/toolkit";
import { getPokemons } from "../states/pokemons";

export const getAllPokemons = () => (dispatch: Dispatch) => {
  axios
    .get("http://localhost:3001/pokemons")
    .then((response) => {
      return dispatch(getPokemons(response.data));
    })
    .catch((error) => console.log(error));
};
