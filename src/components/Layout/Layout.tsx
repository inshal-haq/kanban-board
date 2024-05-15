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
  const closeSidebarHandler = () => {
    dispatch(uiActions.closeSidebar());
  };

  return (
    <>
      {!isMobile && sidebarActive && (
        <div className="flex min-h-screen">
          <div className="fixed top-0 z-10 h-[86px] w-full bg-white pl-[260px] lg:pl-[300px] dark:bg-dark-gray">
            <MainHeader />
          </div>
          <div className="fixed left-0 top-0 z-10 h-full w-[260px] lg:w-[300px]">
            <Sidebar />
          </div>
          <main className="flex overflow-auto bg-light-gray pb-[24px] pl-[284px] pr-[24px] pt-[110px] lg:pl-[324px] dark:bg-very-dark-gray">
            {props.children}
          </main>
        </div>
      )}
      {(isMobile || !sidebarActive) && (
        <>
          <main
            className={`flex flex-col ${isMobile && sidebarActive && "h-screen"}`}
          >
            <div className="fixed top-0 z-10 h-[86px] w-full bg-white dark:bg-dark-gray">
              <MainHeader />
            </div>
            {isMobile && sidebarActive && (
              <div
                className="fixed bottom-0 w-full bg-black bg-opacity-60"
                style={{ height: "calc(100vh - 86px)" }}
                onClick={closeSidebarHandler}
              ></div>
            )}
            <div className="flex min-h-screen overflow-auto bg-light-gray p-6 pt-[110px] dark:bg-very-dark-gray">
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
