import { Pokemons, User } from "@/models";
import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { getByName, getDetail, getPokemons, messageError } from "../states";
import { getUser } from "../states/allUsers";
import { getUserId } from "../states/user";

const baseUrl = "http://localhost:3001/";

export const getAllPokemons = () => (dispatch: Dispatch) => {
  axios
    .get(`${baseUrl}pokemons`)
    .then((response) => {
      return dispatch(getPokemons(response.data));
    })
    .catch((error) => console.log(error));
};

export const getPokemonByName = (name: string) => (dispatch: Dispatch) => {
  axios
    .get(`${baseUrl}pokemons/${name}`)
    .then((response) => {
      return dispatch(getByName(response.data));
    })
    .catch((error) => dispatch(messageError(error.response.data)));
};

export const pokemonsDetail =
  (id: string | undefined) => (dispatch: Dispatch) => {
    axios
      .get(`${baseUrl}pokemonId/${id}`)
      .then((res) => {
        return dispatch(getDetail(res.data));
      })
      .catch((err) => console.error(err));
  };

export const getAllUsers = () => (dispatch: Dispatch) => {
  axios
    .get(`${baseUrl}user`)
    .then((res) => dispatch(getUser(res.data)))
    .catch((err) => console.log(err));
};

export const getUserAction = (id: string) => (dispatch: Dispatch) => {
  axios
    .get(`${baseUrl}user/${id}`)
    .then((res) => dispatch(getUserId(res.data)))
    .catch((err) => console.log(err));
};

export const createUserAction = (body: User) => (dispatch: Dispatch) => {
  axios
    .post(`${baseUrl}createUser`, body)
    .then((res) => {
      return dispatch(getUserId(res.data));
    })
    .catch((err) => console.log({ errorInCreate: err }));
};

export const updateUser = (id: string, value: any) => (dispatch: any) => {
  axios
    .put(`${baseUrl}user/update/${id}`, value)
    .then((res) => {
      return dispatch(getUserAction(id));
    })
    .catch((err) => console.log(err));
};
