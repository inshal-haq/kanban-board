import { useState } from "react";

import NavButton from "../UI/NavButton";
import BoardName from "./BoardName";
import { FiColumns } from "react-icons/fi";
import BoardFormModal from "./BoardFormModal";
import { useAppSelector } from "../../store/hooks";

const BoardList: React.FC = () => {
  const boards = useAppSelector((state) => state.board.boards);
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
        ALL BOARDS ({boards.length})
      </h4>
      <ul>
        {boards.map((board, index) => (
          <BoardName key={board.id} name={board.name} index={index} />
        ))}
        <NavButton
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
