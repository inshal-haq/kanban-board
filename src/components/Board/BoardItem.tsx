import { useState } from "react";
import { useAppSelector } from "../../store/hooks";

import Button from "../UI/Button";
import ColumnList from "../Column/ColumnList";
import BoardFormModal from "./BoardFormModal";

const BoardItem: React.FC = () => {
  const boards = useAppSelector((state) => state.board.boards);
  const isKanbanEmpty = boards.length === 0;

  const activeBoardIndex = useAppSelector(
    (state) => state.board.activeBoardIndex,
  );
  const activeBoard = boards[activeBoardIndex];
  const isBoardEmpty = activeBoard?.columns.length === 0;

  const [isAddBoardModalOpen, setAddBoardModalOpen] = useState(false);
  const handleOpenNewTaskModal = () => {
    setAddBoardModalOpen(true);
  };
  const handleCloseNewTaskModal = () => {
    setAddBoardModalOpen(false);
  };

  const [isEditBoardModalOpen, setEditBoardModalOpen] = useState(false);
  const handleOpenEditBoardModal = () => {
    setEditBoardModalOpen(true);
  };
  const handleCloseEditBoardModal = () => {
    setEditBoardModalOpen(false);
  };

  return (
    <>
      <BoardFormModal
        open={isAddBoardModalOpen}
        onClose={handleCloseNewTaskModal}
      />
      <BoardFormModal
        open={isEditBoardModalOpen}
        onClose={handleCloseEditBoardModal}
        isEditing
      />
      {isKanbanEmpty && (
        <div className="flex flex-1 flex-col items-center justify-center gap-8">
          <h2 className="text-center text-medium-gray">
            You have no boards. Create a new board to get started.
          </h2>
          <Button
            title="+ Create New Board"
            className="bg-main-purple text-white hover:bg-main-purple-hover"
            onClick={handleOpenNewTaskModal}
          />
        </div>
      )}
      {!isKanbanEmpty && isBoardEmpty && (
        <div className="flex flex-1 flex-col items-center justify-center gap-8">
          <h2 className="text-center text-medium-gray">
            The board is empty. Create a new column to get started.
          </h2>
          <Button
            title="+ Add New Column"
            className="bg-main-purple text-white hover:bg-main-purple-hover"
            onClick={handleOpenEditBoardModal}
          />
        </div>
      )}
      {!isKanbanEmpty && !isBoardEmpty && <ColumnList />}
    </>
  );
};

export default BoardItem;
