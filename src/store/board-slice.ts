import { createSlice } from "@reduxjs/toolkit";
import Board from "../models/board";

// import DUMMY_DATA from "../dummy-data.json";
import { DUMMY_DATA } from "../dummy-data";

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

    addTask(state, action) {
      const boardIndex = action.payload.activeBoardIndex;
      const columnIndex = action.payload.selectedColumnIndex;
      const newTask = action.payload.plainTask;

      state.boards[boardIndex].columns[columnIndex].tasks.push(newTask);
    },
    deleteTask(state, action) {
      const { activeBoardIndex, activeColumnIndex, activeTaskIndex } =
        action.payload;

      state.boards[activeBoardIndex].columns[activeColumnIndex].tasks.splice(
        activeTaskIndex,
        1,
      );
    },
    editTask(state, action) {
      const boardIndex = action.payload.activeBoardIndex;
      const columnIndex = action.payload.activeColumnIndex;
      const taskIndex = action.payload.activeTaskIndex;
      const newTask = action.payload.plainTask;

      state.boards[boardIndex].columns[columnIndex].tasks[taskIndex] = newTask;
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

    updateTask(state, action) {
      const {
        activeBoardIndex,
        activeColumnIndex,
        activeTaskIndex,
        updatedTask,
      } = action.payload;

      state.boards[activeBoardIndex].columns[activeColumnIndex].tasks[
        activeTaskIndex
      ].subtasks = updatedTask.subtasks;

      const currentStatus =
        state.boards[activeBoardIndex].columns[activeColumnIndex].name;

      if (currentStatus !== updatedTask.status) {
        const updatedColumnIndex = state.boards[
          activeBoardIndex
        ].columns.findIndex((column) => column.name === updatedTask.status);

        const movedTask =
          state.boards[activeBoardIndex].columns[activeColumnIndex].tasks[
            activeTaskIndex
          ];

        state.boards[activeBoardIndex].columns[activeColumnIndex].tasks.splice(
          activeTaskIndex,
          1,
        );
        state.boards[activeBoardIndex].columns[updatedColumnIndex].tasks.push(
          movedTask,
        );
      }
    },
  },
});

export const boardActions = boardSlice.actions;

export default boardSlice.reducer;
