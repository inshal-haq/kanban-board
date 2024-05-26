import { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";

import BoardFormModal from "./BoardFormModal";
import DeleteBoardModal from "./DeleteBoardModal";

const BoardOptionsDropdown: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState<number>(0);
  const [top, setTop] = useState<number>(0);
  const [left, setLeft] = useState<number>(0);

  const [isEditBoardModalOpen, setEditBoardModalOpen] = useState(false);

  // to force a re-render when BoardFormModal opens to properly update task status
  const [modalKey, setModalKey] = useState(0);

  const handleOpenEditBoardModal = () => {
    setModalKey((prevKey) => prevKey + 1);
    setOpen(false);
    setEditBoardModalOpen(true);
  };
  const handleCloseEditBoardModal = () => {
    setEditBoardModalOpen(false);
  };

  const [isDeleteBoardModalOpen, setDeleteBoardModalOpen] = useState(false);
  const handleOpenDeleteBoardModal = () => {
    setOpen(false);
    setDeleteBoardModalOpen(true);
  };
  const handleCloseDeleteBoardModal = () => {
    setDeleteBoardModalOpen(false);
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setOpen((prevState) => !prevState);
    setHeight(event.currentTarget.clientHeight);
    setTop(event.currentTarget.getBoundingClientRect().top);
    setLeft(event.currentTarget.getBoundingClientRect().left);
  };

  return (
    <>
      <BoardFormModal
        key={modalKey}
        open={isEditBoardModalOpen}
        onClose={handleCloseEditBoardModal}
        isEditing
      />
      <DeleteBoardModal
        open={isDeleteBoardModalOpen}
        onClose={handleCloseDeleteBoardModal}
      />
      <h2 className="cursor-pointer" onClick={handleClick}>
        <FiMoreVertical className="text-2xl text-medium-gray" />
      </h2>
      {open && (
        <div
          className={`absolute flex w-[192px] flex-col gap-2 rounded-lg bg-white p-4 text-medium-gray dark:bg-very-dark-gray`}
          style={{ top: top + height + 20, left: left - 176 }}
        >
          <div className="cursor-pointer" onClick={handleOpenEditBoardModal}>
            Edit Board
          </div>
          <div
            className="cursor-pointer text-red"
            onClick={handleOpenDeleteBoardModal}
          >
            Delete Board
          </div>
        </div>
      )}
    </>
  );
};

export default BoardOptionsDropdown;
