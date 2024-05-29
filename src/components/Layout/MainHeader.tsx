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
import kanbanIcon from "../../assets/kanban-fill-green.svg";
import Sidebar from "../Sidebar/Sidebar";
import TaskFormModal from "../Task/TaskFormModal";
import BoardOptionsDropdown from "../Board/BoardOptionsDropdown";

const MainHeader: React.FC = () => {
  const boards = useAppSelector((state) => state.board.boards);
  const activeBoardIndex = useAppSelector(
    (state) => state.board.activeBoardIndex,
  );
  const activeBoard = boards[activeBoardIndex];

  const isKanbanEmpty = boards.length === 0;
  const isBoardEmpty = activeBoard?.columns.length === 0;

  const [isNewTaskModalOpen, setNewTaskModalOpen] = useState(false);

  // to force a re-render when TaskFormModal opens to properly update task status
  const [modalKey, setModalKey] = useState(0);

  const handleOpenNewTaskModal = () => {
    setModalKey((prevKey) => prevKey + 1);
    setNewTaskModalOpen(true);
  };
  const handleCloseNewTaskModal = () => {
    setNewTaskModalOpen(false);
  };

  const dispatch = useAppDispatch();
  const isSidebarOpen = useAppSelector((state) => state.ui.isSidebarOpen);
  const isMobile = useAppSelector((state) => state.ui.isMobile);

  function toggleSidebarModal() {
    if (isSidebarOpen) {
      dispatch(uiActions.closeSidebar());
    } else {
      dispatch(uiActions.openSidebar());
    }
  }

  return (
    <>
      <TaskFormModal
        key={modalKey}
        open={isNewTaskModalOpen}
        onClose={handleCloseNewTaskModal}
      />
      {!isMobile && (
        <header className="flex select-none border-b-2 border-b-lines-light bg-white dark:border-b-lines-dark dark:bg-dark-gray">
          {!isSidebarOpen && <Logo />}
          <div className="flex flex-1 items-center justify-between px-7 py-5">
            <div className="text-2xl font-bold leading-8 dark:text-white">
              {activeBoard?.name}
            </div>
            <div className="flex items-center gap-4">
              {(isKanbanEmpty || isBoardEmpty) && (
                <Button
                  title="+ Add New Task"
                  className="bg-main-green cursor-not-allowed bg-opacity-25 text-white"
                />
              )}
              {isKanbanEmpty && (
                <h2 className="cursor-not-allowed">
                  <FiMoreVertical className="text-2xl text-medium-gray" />
                </h2>
              )}
              {isBoardEmpty && <BoardOptionsDropdown />}
              {!isKanbanEmpty && !isBoardEmpty && (
                <>
                  <Button
                    title="+ Add New Task"
                    className="bg-main-green hover:bg-main-green-hover text-white"
                    onClick={handleOpenNewTaskModal}
                  />
                  <BoardOptionsDropdown />
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
                  {activeBoard?.name}
                </div>
                {isSidebarOpen ? (
                  <FiChevronUp className="text-main-green mt-1 text-lg" />
                ) : (
                  <FiChevronDown className="text-main-green mt-1 text-lg" />
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              {(isKanbanEmpty || isBoardEmpty) && (
                <button className="bg-main-green cursor-not-allowed rounded-full bg-opacity-25 px-4 py-2 text-xl font-bold text-white">
                  <FiPlus />
                </button>
              )}
              {isKanbanEmpty && (
                <h2 className="cursor-not-allowed">
                  <FiMoreVertical className="text-2xl text-medium-gray" />
                </h2>
              )}
              {isBoardEmpty && <BoardOptionsDropdown />}
              {!isKanbanEmpty && !isBoardEmpty && (
                <>
                  <button
                    className="bg-main-green hover:bg-main-green-hover cursor-pointer rounded-full px-4 py-2 text-xl font-bold text-white"
                    onClick={handleOpenNewTaskModal}
                  >
                    <FiPlus />
                  </button>
                  <BoardOptionsDropdown />
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
