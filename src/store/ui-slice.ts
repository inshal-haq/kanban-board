import { createSlice } from "@reduxjs/toolkit";

const initialState = { isMobile: false, sidebarActive: false };

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
