import { useState } from "react";
import ColumnItem from "./ColumnItem";
import BoardFormModal from "../Board/BoardFormModal";
import { useAppSelector } from "../../store/hooks";

const ColumnList: React.FC = () => {
  const [isEditBoardModalOpen, setEditBoardModalOpen] = useState(false);

  // to force a re-render when BoardFormModal opens to properly update task status
  const [modalKey, setModalKey] = useState(0);

  const handleOpenEditBoardModal = () => {
    setModalKey((prevKey) => prevKey + 1);
    setEditBoardModalOpen(true);
  };
  const handleCloseEditBoardModal = () => {
    setEditBoardModalOpen(false);
  };

  const boards = useAppSelector((state) => state.board.boards);
  const activeBoardIndex = useAppSelector(
    (state) => state.board.activeBoardIndex,
  );
  const activeBoard = boards[activeBoardIndex];

  return (
    <>
      <BoardFormModal
        key={modalKey}
        open={isEditBoardModalOpen}
        onClose={handleCloseEditBoardModal}
        isEditing
      />
      <ul className="flex gap-6">
        {activeBoard.columns.map((column, index) => (
          <ColumnItem key={column.id} column={column} index={index} />
        ))}
        <h1
          className="mt-8 flex w-[280px] cursor-pointer items-center justify-center rounded-lg bg-[#E9EFFA] text-medium-gray hover:text-main-purple dark:bg-[#2B2C37] dark:bg-opacity-25"
          onClick={handleOpenEditBoardModal}
        >
          + New Column
        </h1>
      </ul>
    </>
  );
};

export default ColumnList;
