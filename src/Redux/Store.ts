import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./slice/UserSlice";
import storage from "redux-persist/lib/storage";
import persistCombineReducers from "redux-persist/es/persistCombineReducers";
import NoteSlice from "./slice/NoteSlice";

const persistConfige = {
  key: "root",
  version: 1,
  storage
}

const persistedReducer = persistCombineReducers(persistConfige, { user: UserReducer.reducer, notes: NoteSlice.reducer });

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (def) =>
    def({
      serializableCheck: false,
    }),
});

export type UserStates = ReturnType<typeof store.getState>