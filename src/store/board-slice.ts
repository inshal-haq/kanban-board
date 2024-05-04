import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import DUMMY_DATA from "../dummy-data.json";

interface boardState {
  activeBoardName: string; // will be treated as unique id
}

const initialState: boardState = {
  activeBoardName: DUMMY_DATA.boards[0].name || "",
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setActiveBoard(state, action: PayloadAction<string>) {
      state.activeBoardName = action.payload;
    },
  },
});

export const boardActions = boardSlice.actions;

export default boardSlice.reducer;
