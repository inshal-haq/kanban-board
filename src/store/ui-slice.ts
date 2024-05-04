import { createSlice } from "@reduxjs/toolkit";

interface uiState {
  isMobile: boolean;
  sidebarActive: boolean;
}

const initialState: uiState = {
  isMobile: false,
  sidebarActive: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setMobileViewOn(state) {
      state.isMobile = true;
    },
    setMobileViewOff(state) {
      state.isMobile = false;
    },
    openSidebar(state) {
      state.sidebarActive = true;
    },
    closeSidebar(state) {
      state.sidebarActive = false;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
