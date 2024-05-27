import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { toggleMobileView } from "./store/ui-actions";

import Layout from "./components/Layout/Layout";
import BoardItem from "./components/Board/BoardItem";
import { uiActions } from "./store/ui-slice";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector((state) => state.ui.isDarkMode);
  const isMobile = useAppSelector((state) => state.ui.isMobile);

  useEffect(() => {
    dispatch(toggleMobileView());
  }, [dispatch]);

  useEffect(() => {
    if (isDarkMode) {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    if (!isMobile) {
      dispatch(uiActions.openSidebar());
    }
  }, [isMobile, dispatch]);

  return (
    <Layout>
      <BoardItem />
    </Layout>
  );
};

export default App;
