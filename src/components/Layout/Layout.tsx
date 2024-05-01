import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";

import Sidebar from "../Sidebar/Sidebar";
import MainHeader from "./MainHeader";
import { FiEye } from "react-icons/fi";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  const dispatch = useDispatch();
  const sidebarActive = useSelector((state) => state.ui.sidebarActive);
  const isMobile = useSelector((state) => state.ui.isMobile);

  const openSidebarHandler = () => {
    dispatch(uiActions.openSidebar());
  };

  return (
    <>
      {!isMobile && sidebarActive && (
        <div className="flex h-screen">
          <Sidebar />
          <main className="flex-1">
            <MainHeader />
            <div
              className="overflow-y-auto p-4"
              style={{ maxHeight: "calc(100vh - 8rem)" }}
            >
              {props.children}
            </div>
          </main>
        </div>
      )}
      {(isMobile || !sidebarActive) && (
        <>
          <main className="flex h-screen flex-col">
            <MainHeader />
            <div className="overflow-y-auto p-4">{props.children}</div>
          </main>
          {!isMobile && (
            <h3
              className="fixed bottom-6 left-0 cursor-pointer rounded-br-full rounded-tr-full bg-main-purple py-4 pl-4 pr-5 font-bold text-white hover:bg-main-purple-hover hover:bg-opacity-80"
              onClick={openSidebarHandler}
            >
              <FiEye />
            </h3>
          )}
        </>
      )}
    </>
  );
};

export default Layout;
