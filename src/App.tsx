import { useEffect } from "react";
import { useAppDispatch } from "./store/hooks";
import { toggleMobileView } from "./store/ui-actions";

import Layout from "./components/Layout/Layout";
import Board from "./components/Board/Board";

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(toggleMobileView());
  }, [dispatch]);

  return (
    <Layout>
      <Board />
    </Layout>
  );
};

export default App;
