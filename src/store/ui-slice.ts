import { createSlice } from "@reduxjs/toolkit";

interface uiState {
  isMobile: boolean;
  sidebarActive: boolean;
  isDarkMode: boolean;
}

const initialState: uiState = {
  isMobile: false,
  sidebarActive: false,
  isDarkMode: false,
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
    setLightMode(state) {
      state.isDarkMode = false;
    },
    setDarkMode(state) {
      state.isDarkMode = true;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
