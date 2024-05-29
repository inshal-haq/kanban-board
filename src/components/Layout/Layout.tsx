import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { uiActions } from "../../store/ui-slice";

import Sidebar from "../Sidebar/Sidebar";
import MainHeader from "./MainHeader";
import { FiEye } from "react-icons/fi";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  const dispatch = useAppDispatch();
  const isSidebarOpen = useAppSelector((state) => state.ui.isSidebarOpen);
  const isMobile = useAppSelector((state) => state.ui.isMobile);

  const openSidebarHandler = () => {
    dispatch(uiActions.openSidebar());
  };
  const closeSidebarHandler = () => {
    dispatch(uiActions.closeSidebar());
  };

  return (
    <>
      {!isMobile && isSidebarOpen && (
        <div className="flex min-h-screen">
          <div className="fixed top-0 z-10 h-[86px] w-full bg-white pl-[260px] dark:bg-dark-gray lg:pl-[300px]">
            <MainHeader />
          </div>
          <div className="fixed left-0 top-0 z-10 h-full w-[260px] lg:w-[300px]">
            <Sidebar />
          </div>
          <main className="flex w-full overflow-auto bg-light-gray pb-[24px] pl-[284px] pr-[24px] pt-[110px] dark:bg-very-dark-gray lg:pl-[324px]">
            {props.children}
          </main>
        </div>
      )}
      {(isMobile || !isSidebarOpen) && (
        <>
          <main
            className={`flex flex-col ${isMobile && isSidebarOpen && "h-screen"}`}
          >
            <div className="fixed top-0 z-10 h-[86px] w-full bg-white dark:bg-dark-gray">
              <MainHeader />
            </div>
            {isMobile && isSidebarOpen && (
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
              className="bg-main-green hover:bg-main-green-hover fixed bottom-6 left-0 cursor-pointer rounded-br-full rounded-tr-full py-4 pl-4 pr-5 font-bold text-white hover:bg-opacity-80"
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
