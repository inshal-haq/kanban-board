import { createSlice } from "@reduxjs/toolkit";
import Board from "../models/board";

import DUMMY_DATA from "../dummy-data.json";

interface boardState {
  activeBoardIndex: number;
  boards: Board[];
}

const initialState: boardState = {
  boards: DUMMY_DATA.boards || [],
  activeBoardIndex: 0,
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setActiveBoard(state, action) {
      state.activeBoardIndex = action.payload;
    },
    addBoard(state, action) {
      state.boards.push(action.payload);
    },
    deleteBoard(state, action) {
      const index = action.payload;
      state.boards.splice(index, 1);
    },
    editBoard(state, action) {
      const boardId = action.payload.currentBoardId;
      const newBoard = action.payload.plainBoard;

      const boardIndex = state.boards.findIndex(
        (board) => board.id === boardId,
      );
      state.boards[boardIndex] = newBoard;
    },
  },
});

export const boardActions = boardSlice.actions;

export default boardSlice.reducer;
