import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { uiActions } from "../../store/ui-slice";

import Sidebar from "../Sidebar/Sidebar";
import MainHeader from "./MainHeader";
import { FiEye } from "react-icons/fi";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  const dispatch = useAppDispatch();
  const sidebarActive = useAppSelector((state) => state.ui.sidebarActive);
  const isMobile = useAppSelector((state) => state.ui.isMobile);

  const openSidebarHandler = () => {
    dispatch(uiActions.openSidebar());
  };

  return (
    <>
      {!isMobile && sidebarActive && (
        <div className="flex h-screen">
          <Sidebar />
          <main className="relative flex h-screen flex-1 flex-col">
            <MainHeader />
            <div
              className="flex-1 overflow-y-auto bg-light-gray p-4"
              style={{ maxHeight: "calc(100vh - 5rem)" }}
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
            {isMobile && sidebarActive && (
              <div
                className="fixed bottom-0 w-full bg-black bg-opacity-60"
                style={{ height: "calc(100vh - 4.8rem)" }}
              ></div>
            )}
            <div className="flex-1 overflow-y-auto bg-light-gray p-4">
              {props.children}
            </div>
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
