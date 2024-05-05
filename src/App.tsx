import { useEffect } from "react";
import { useAppDispatch } from "./store/hooks";
import { toggleMobileView } from "./store/ui-actions";

import Layout from "./components/Layout/Layout";
import BoardItem from "./components/Board/BoardItem";

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(toggleMobileView());
  }, [dispatch]);

  return (
    <Layout>
      <BoardItem />
    </Layout>
  );
};

export default App;
