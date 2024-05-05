import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import Board from "../models/board";

import DUMMY_DATA from "../dummy-data.json";

interface boardState {
  activeBoardName: string;
  boards: Board[];
}

const initialState: boardState = {
  activeBoardName: DUMMY_DATA.boards[0].name || "",
  boards: [],
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setActiveBoard(state, action: PayloadAction<string>) {
      state.activeBoardName = action.payload;
    },
    addBoard(state, action) {
      const { name, columns } = action.payload;
      const newBoard = new Board(name, columns);
      state.boards.push(newBoard);
    },
  },
});

export const boardActions = boardSlice.actions;

export default boardSlice.reducer;
