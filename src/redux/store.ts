import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import { userMiddleware } from "./userMiddleware";

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userMiddleware),
});

store.dispatch({ type: "user/init" });
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
