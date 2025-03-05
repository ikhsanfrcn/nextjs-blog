/* eslint-disable @typescript-eslint/no-explicit-any */
import { Middleware } from "@reduxjs/toolkit";
import axios from "axios";
import { login, logout } from "./userSlice";

export const userMiddleware: Middleware = (store) => (next) => async (action: any) => {
  if (action.type == "user/init") {
    try {
      const { data } = await axios.get("/api/auth/me");
      store.dispatch(login(data));
    } catch (err) {
      console.log(err);
      store.dispatch(logout());
    }
  }

  return next(action);
};
