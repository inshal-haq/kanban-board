import { useSelector } from "react-redux";

import { FiMoreVertical, FiChevronDown, FiPlus } from "react-icons/fi";
import Button from "../UI/Button";
import Logo from "../UI/Logo";
import kanbanIcon from "../../assets/kanban-fill-purple.svg";

const MainHeader: React.FC = () => {
  const sidebarActive = useSelector((state) => state.ui.sidebarActive);
  const isMobile = useSelector((state) => state.ui.isMobile);

  return (
    <>
      {!isMobile && (
        <header className="flex border-b-2 border-b-lines-light bg-white">
          {!sidebarActive && <Logo />}
          <div className="flex flex-1 items-center justify-between px-7 py-5">
            <div className="text-2xl font-bold leading-8">Platform Launch</div>
            <div className="flex items-center gap-4">
              <Button
                title="Add New Task"
                className="bg-main-purple text-white"
              />
              <FiMoreVertical className="text-2xl text-medium-gray" />
            </div>
          </div>
        </header>
      )}
      {isMobile && (
        <header className="flex flex-1 items-center justify-between border-b-2 border-b-lines-light bg-white px-7 py-5">
          <div className="flex items-center gap-4">
            <img src={kanbanIcon} alt="kanban icon" width={36} />
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold leading-8">
                Platform Launch
              </div>
              <FiChevronDown className="mt-1 text-lg text-main-purple" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="rounded-full bg-main-purple px-4 py-2 text-xl font-bold text-white">
              <FiPlus />
            </button>
            <FiMoreVertical className="text-2xl text-medium-gray" />
          </div>
        </header>
      )}
    </>
  );
};

export default MainHeader;
