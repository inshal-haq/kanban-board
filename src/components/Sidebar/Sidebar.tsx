import Logo from "../UI/Logo";
import { FiSun, FiMoon, FiEyeOff } from "react-icons/fi";

const Sidebar = () => {
  return (
    <aside className="border-r-lines-light flex flex-none basis-56 flex-col items-start justify-between border-r-2 bg-white">
      <nav>
        <Logo />
        <div>ALL BOARDS</div>
        <ul>
          <li>Platform Launch</li>
          <li>Platform Launch</li>
          <li>Platform Launch</li>
          <li>+ Create New Board</li>
        </ul>
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
