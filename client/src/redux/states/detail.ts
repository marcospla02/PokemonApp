import { Pokemons } from "@/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Pokemons = {
  id: "",
  idPoke: 0,
  name: "",
  life: 0,
  height: "",
  weight: "",
  Attack: 0,
  Defense: 0,
  Speed: 0,
  img: "",
  typesApi: [],
  types: [],
};

export const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {
    getDetail: (state, action: PayloadAction<Pokemons>) => {
      return action.payload;
    },
  },
});

export const { getDetail } = detailSlice.actions;
