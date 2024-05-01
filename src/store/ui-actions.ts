import { uiActions } from "./ui-slice";

export const toggleMobileView = () => {
  return (dispatch) => {
    const checkIsMobile = () => {
      return window.innerWidth <= 640;
    };

    // Set initial state
    if (checkIsMobile()) {
      dispatch(uiActions.setMobileViewOn());
    } else {
      dispatch(uiActions.setMobileViewOff());
    }

    // Add resize event listener with debouncing
    let timeoutId: number;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (checkIsMobile()) {
          dispatch(uiActions.setMobileViewOn());
        } else {
          dispatch(uiActions.setMobileViewOff());
        }
      }, 300);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  };
};
