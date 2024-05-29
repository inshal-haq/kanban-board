import { createSlice } from "@reduxjs/toolkit";

interface uiState {
  isMobile: boolean;
  isDarkMode: boolean;
  isSidebarOpen: boolean;
}

const initialState: uiState = {
  isMobile: false,
  isDarkMode: true,
  isSidebarOpen: false,
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

    setLightMode(state) {
      state.isDarkMode = false;
    },
    setDarkMode(state) {
      state.isDarkMode = true;
    },

    openSidebar(state) {
      state.isSidebarOpen = true;
    },
    closeSidebar(state) {
      state.isSidebarOpen = false;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
