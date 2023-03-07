import { User } from "@/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: User[] = [];

export const allUsersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUser: (state, action: PayloadAction<User[]>) => {
      //falta despachar la action
      return action.payload;
    },
  },
});

export const { getUser } = allUsersSlice.actions;
