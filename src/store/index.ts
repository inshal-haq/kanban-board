import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./ui-slice";
import boardReducer from "./board-slice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    board: boardReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
