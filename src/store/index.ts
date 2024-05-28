/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { configureStore, Dispatch, Middleware } from "@reduxjs/toolkit";
import uiReducer from "./ui-slice";
import boardReducer from "./board-slice";
import Board from "../models/board";

// Define a custom action type with a payload
interface ActionWithPayload<T> {
  type: string;
  payload: T;
}

// Define the correct types for the serializeMiddleware
const serializeMiddleware: Middleware<
  {},
  any,
  Dispatch<ActionWithPayload<any>>
> = () => (next) => (action: unknown) => {
  if (
    typeof action === "object" &&
    action !== null &&
    "payload" in action &&
    action.payload instanceof Board
  ) {
    const plainPayload = action.payload.toPlainObject();
    return next({ ...action, payload: plainPayload });
  }
  return next(action as ActionWithPayload<any>);
};

const store = configureStore({
  reducer: {
    ui: uiReducer,
    board: boardReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(serializeMiddleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
