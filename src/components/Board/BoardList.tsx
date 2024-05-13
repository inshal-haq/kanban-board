import { useState } from "react";

import NavButton from "../UI/NavButton";
import BoardName from "./BoardName";
import { FiColumns } from "react-icons/fi";
import DUMMY_DATA from "../../dummy-data.json";
import BoardFormModal from "./BoardFormModal";

const BOARDS = DUMMY_DATA.boards;

const BoardList: React.FC = () => {
  const [isAddBoardModalOpen, setAddBoardModalOpen] = useState(false);
  const handleOpenNewTaskModal = () => {
    setAddBoardModalOpen(true);
  };
  const handleCloseNewTaskModal = () => {
    setAddBoardModalOpen(false);
  };

  return (
    <>
      <BoardFormModal
        open={isAddBoardModalOpen}
        onClose={handleCloseNewTaskModal}
      />
      <h4 className="px-6 py-3 text-medium-gray">
        ALL BOARDS ({BOARDS.length})
      </h4>
      <ul>
        {BOARDS.map((board) => (
          <BoardName key={board.id} id={board.id} name={board.name} />
        ))}
        <NavButton
          active={false}
          textColor="text-main-purple"
          onClick={handleOpenNewTaskModal}
        >
          <FiColumns />
          <div>+ Create New Board</div>
        </NavButton>
      </ul>
    </>
  );
};

export default BoardList;
