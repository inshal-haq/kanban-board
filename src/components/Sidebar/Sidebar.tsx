import BoardList from "../Board/BoardList";
import Logo from "../UI/Logo";

import { FiSun, FiMoon, FiEyeOff } from "react-icons/fi";

const Sidebar = () => {
  return (
    <aside className="flex flex-none basis-80 flex-col items-start justify-between border-r-2 border-r-lines-light bg-white">
      <nav className="w-full pr-6">
        <Logo />
        <BoardList />
      </nav>
      <div>
        <div className="flex items-center justify-center">
          <FiSun />
          <button>switch</button>
          <FiMoon />
        </div>
        <div className="flex items-center justify-start">
          <FiEyeOff />
          Hide Sidebar
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
