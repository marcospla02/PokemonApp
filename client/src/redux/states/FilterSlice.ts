import { Actions, ActionTypes } from "@/models";
import { getLocalStorage } from "@/utility";
import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { pokemonsSlice } from "./pokemons";

export const FiltereSlice = createSlice({
  name: "filter",
  initialState: getLocalStorage(Actions.GET_POKEMONS)
    ? JSON.parse(getLocalStorage(Actions.GET_POKEMONS) as string)
    : [],
  reducers: {
    orderByAttack: (state: any, action: PayloadAction<ActionTypes>) => {
      const stateCopy = [...current(state)];

      const actionType =
        action.payload.type === "Defense" ? "Defense" : "Attack";

      const order: any =
        action.payload.payload === "max"
          ? stateCopy.sort((poke1: any, poke2: any) => {
              if (poke1[actionType] > poke2[actionType]) return -1;
              if (poke1[actionType] < poke2[actionType]) return 1;
              return 0;
            })
          : stateCopy.sort((poke1: any, poke2: any) => {
              if (poke1[actionType] > poke2[actionType]) return 1;
              if (poke1[actionType] < poke2[actionType]) return -1;
              return 0;
            });
      return order;
    },

    filterByTypes: (state, action: PayloadAction<string>) => {
      const stateCopy = [...state];

      const filter = stateCopy.filter((poke) =>
        !poke.types.length
          ? poke.typesApi.includes(action.payload)
          : poke.typesApi.includes(action.payload) &&
            poke.types.includes(action.payload)
      );
      return filter;
    },

    resetFilters: () => {
      return (
        getLocalStorage(Actions.GET_POKEMONS) &&
        JSON.parse(getLocalStorage(Actions.GET_POKEMONS) as string)
      );
    },
  },
});

export const { orderByAttack, resetFilters, filterByTypes } =
  FiltereSlice.actions;
