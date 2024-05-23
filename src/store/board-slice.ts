import { createSlice } from "@reduxjs/toolkit";
import Board from "../models/board";

import DUMMY_DATA from "../dummy-data.json";

interface boardState {
  boards: Board[];
  activeBoardIndex: number;
  activeColumnIndex: number;
  activeTaskIndex: number;
}

const initialState: boardState = {
  boards: DUMMY_DATA.boards || [],
  activeBoardIndex: 0,
  activeColumnIndex: 0,
  activeTaskIndex: 0,
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    addBoard(state, action) {
      state.boards.push(action.payload);
    },
    deleteBoard(state, action) {
      const index = action.payload;
      state.boards.splice(index, 1);
    },
    editBoard(state, action) {
      const boardIndex = action.payload.activeBoardIndex;
      const newBoard = action.payload.plainBoard;

      state.boards[boardIndex] = newBoard;
    },

    setActiveBoard(state, action) {
      state.activeBoardIndex = action.payload;
    },
    setActiveColumn(state, action) {
      state.activeColumnIndex = action.payload;
    },
    setActiveTask(state, action) {
      state.activeTaskIndex = action.payload;
    },
  },
});

export const boardActions = boardSlice.actions;

export default boardSlice.reducer;
