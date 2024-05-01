import BoardList from "../Board/BoardList";
import LightSwitch from "../UI/LightSwitch";
import Logo from "../UI/Logo";
import NavButton from "../UI/NavButton";

import { FiEyeOff } from "react-icons/fi";

const Sidebar = () => {
  return (
    <aside className="flex flex-none basis-80 flex-col items-start justify-between border-r-2 border-r-lines-light bg-white py-6">
      <nav className="w-full pr-6">
        <Logo />
        <BoardList />
      </nav>

      <div className="w-full pr-6">
        <div className="mb-2 pl-6">
          <LightSwitch />
        </div>
        <NavButton active={false} textColor="text-medium-gray">
          <FiEyeOff />
          Hide Sidebar
        </NavButton>
      </div>
    </aside>
  );
};

export default Sidebar;
