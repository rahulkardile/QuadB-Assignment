import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../TypeScript/Interface";

type InitialState = {
  user: User | null;
};

const initialState: InitialState = {
  user: null,
};

const UserReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
  },
});

export default UserReducer;
export const { addUser, removeUser } = UserReducer.actions