import { FiMoreVertical } from "react-icons/fi";

import Button from "../UI/Button";
import Logo from "../UI/Logo";

const MainHeader = () => {
  const sidebarActive = false;

  return (
    <header className="p5 border-b-lines-light flex border-b-2 bg-white">
      {!sidebarActive && <Logo />}
      <div className="flex flex-1 items-center justify-between px-7 py-5">
        <div className="text-2xl font-bold leading-8">Platform Launch</div>
        <div className="flex items-center gap-4">
          <Button title="Add New Task" className="bg-main-purple text-white" />
          <FiMoreVertical className="text-medium-gray text-2xl" />
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
