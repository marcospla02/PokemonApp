import { EmptyStatesUser, User } from "@/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: EmptyStatesUser,
  reducers: {
    getUserId: (state, action) => {
      return action.payload;
    },
  },
});

export const { getUserId } = userSlice.actions;
