import { configureStore, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import uiReducer from "./ui-slice";
import boardReducer from "./board-slice";
import Board from "../models/board";

const serializeMiddleware =
  () => (next: Dispatch) => (action: PayloadAction<Board>) => {
    if (action.payload instanceof Board) {
      const plainPayload = action.payload.toPlainObject();
      return next({ ...action, payload: plainPayload });
    }
    return next(action);
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
