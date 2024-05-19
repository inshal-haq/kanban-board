import { createSlice } from "@reduxjs/toolkit";
import Board from "../models/board";

// import DUMMY_DATA from "../dummy-data.json";

interface boardState {
  activeBoardId: string;
  boards: Board[];
}

const initialState: boardState = {
  boards: [], // DUMMY_DATA.boards || [],
  activeBoardId: "", // DUMMY_DATA.boards[0].id || "",
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setActiveBoard(state, action) {
      state.activeBoardId = action.payload;
    },
    addBoard(state, action) {
      state.boards.push(action.payload);
    },
    removeBoard(state, action) {
      const id = action.payload;
      state.boards = state.boards.filter((board) => board.id !== id);
    },
  },
});

export const boardActions = boardSlice.actions;

export default boardSlice.reducer;
