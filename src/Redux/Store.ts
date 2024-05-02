import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./slice/UserSlice";

export const store = configureStore({
  reducer: {
    user: UserReducer.reducer,
  },

  middleware: (def) =>
    def({
      serializableCheck: false,
    }),
});
