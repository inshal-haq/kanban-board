import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { uiActions } from "../../store/ui-slice";

import {
  FiChevronDown,
  FiChevronUp,
  FiMoreVertical,
  FiPlus,
} from "react-icons/fi";
import Button from "../UI/Button";
import Logo from "../UI/Logo";
import kanbanIcon from "../../assets/kanban-fill-purple.svg";
import Sidebar from "../Sidebar/Sidebar";
import TaskFormModal from "../Task/TaskFormModal";
import BoardOptionsDropdown from "../Board/BoardOptionsDropdown";

const MainHeader: React.FC = () => {
  const boards = useAppSelector((state) => state.board.boards);
  const activeBoardId = useAppSelector((state) => state.board.activeBoardId);
  const board = boards.find((board) => board.id === activeBoardId);

  const isKanbanEmpty = boards.length === 0;
  const isBoardEmpty = board?.columns.length === 0;

  const [isNewTaskModalOpen, setNewTaskModalOpen] = useState(false);
  const handleOpenNewTaskModal = () => {
    setNewTaskModalOpen(true);
  };
  const handleCloseNewTaskModal = () => {
    setNewTaskModalOpen(false);
  };

  const dispatch = useAppDispatch();
  const sidebarActive = useAppSelector((state) => state.ui.sidebarActive);
  const isMobile = useAppSelector((state) => state.ui.isMobile);

  function toggleSidebarModal() {
    if (sidebarActive) {
      dispatch(uiActions.closeSidebar());
    } else {
      dispatch(uiActions.openSidebar());
    }
  }

  return (
    <>
      <TaskFormModal
        open={isNewTaskModalOpen}
        onClose={handleCloseNewTaskModal}
      />
      {!isMobile && (
        <header className="flex select-none border-b-2 border-b-lines-light bg-white dark:border-b-lines-dark dark:bg-dark-gray">
          {!sidebarActive && <Logo />}
          <div className="flex flex-1 items-center justify-between px-7 py-5">
            <div className="text-2xl font-bold leading-8 dark:text-white">
              {board?.name}
            </div>
            <div className="flex items-center gap-4">
              {(isKanbanEmpty || isBoardEmpty) && (
                <>
                  <Button
                    title="+ Add New Task"
                    className="cursor-not-allowed bg-main-purple bg-opacity-25 text-white"
                  />
                  <h2 className="cursor-not-allowed">
                    <FiMoreVertical className="text-2xl text-medium-gray" />
                  </h2>
                </>
              )}
              {!isKanbanEmpty && !isBoardEmpty && (
                <>
                  <Button
                    title="+ Add New Task"
                    className="bg-main-purple text-white hover:bg-main-purple-hover"
                    onClick={handleOpenNewTaskModal}
                  />
                  <BoardOptionsDropdown board={board!} />
                </>
              )}
            </div>
          </div>
        </header>
      )}
      {isMobile && (
        <>
          <Sidebar />
          <header className="flex select-none items-center justify-between bg-white px-7 py-5 dark:bg-dark-gray dark:text-white">
            <div className="flex items-center gap-4">
              <img src={kanbanIcon} alt="kanban icon" width={36} />
              <div
                className="flex cursor-pointer items-center gap-2"
                onClick={toggleSidebarModal}
              >
                <div className="text-2xl font-bold leading-8">
                  {board?.name}
                </div>
                {sidebarActive ? (
                  <FiChevronUp className="mt-1 text-lg text-main-purple" />
                ) : (
                  <FiChevronDown className="mt-1 text-lg text-main-purple" />
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              {(isKanbanEmpty || isBoardEmpty) && (
                <>
                  <button className="cursor-not-allowed rounded-full bg-main-purple bg-opacity-25 px-4 py-2 text-xl font-bold text-white">
                    <FiPlus />
                  </button>
                  <h2 className="cursor-not-allowed">
                    <FiMoreVertical className="text-2xl text-medium-gray" />
                  </h2>
                </>
              )}
              {!isKanbanEmpty && !isBoardEmpty && (
                <>
                  <button
                    className="cursor-pointer rounded-full bg-main-purple px-4 py-2 text-xl font-bold text-white hover:bg-main-purple-hover"
                    onClick={handleOpenNewTaskModal}
                  >
                    <FiPlus />
                  </button>
                  <BoardOptionsDropdown board={board!} />
                </>
              )}
            </div>
          </header>
        </>
      )}
    </>
  );
};

export default MainHeader;
