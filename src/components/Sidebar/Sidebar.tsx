import { useAppDispatch, useAppSelector } from "../../store/hooks";
import BoardList from "../Board/BoardList";
import LightSwitch from "../UI/LightSwitch";
import Logo from "../UI/Logo";
import NavButton from "../UI/NavButton";

import { FiEyeOff } from "react-icons/fi";
import { uiActions } from "../../store/ui-slice";

const Sidebar: React.FC = () => {
  const dispatch = useAppDispatch();
  const isMobile = useAppSelector((state) => state.ui.isMobile);
  const sidebarActive = useAppSelector((state) => state.ui.sidebarActive);

  function handleHideSidebar() {
    dispatch(uiActions.closeSidebar());
  }

  return (
    <>
      {!isMobile && (
        <aside className="flex h-full flex-col border-r-2 border-r-lines-light bg-white py-6 dark:border-r-lines-dark dark:bg-dark-gray">
          <nav className="mb-auto w-full pr-6">
            <Logo />
            <BoardList />
          </nav>

          <div className="w-full pr-6">
            <div className="mb-2 pl-6">
              <LightSwitch />
            </div>
            <NavButton
              active={false}
              textColor="text-medium-gray"
              onClick={handleHideSidebar}
            >
              <FiEyeOff />
              Hide Sidebar
            </NavButton>
          </div>
        </aside>
      )}
      {isMobile && (
        <div
          className={`fixed z-10 ml-20 mt-24 w-72 rounded-lg  bg-white dark:bg-dark-gray ${sidebarActive ? "block" : "hidden"} `}
        >
          <nav className="mt-2 w-full pr-6">
            <BoardList />
          </nav>

          <div className="mt-4 w-full px-6 pb-6">
            <LightSwitch />
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
