import { useEffect, useRef, useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import { createPortal } from "react-dom";

import Task from "../../models/task";
import TaskFormModal from "./TaskFormModal";
import DeleteTaskModal from "./DeleteTaskModal";

const TaskOptionsDropdown: React.FC<{ task: Task }> = (props) => {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState<number>(0);
  const [top, setTop] = useState<number>(0);
  const [left, setLeft] = useState<number>(0);

  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const handleOpenEditModal = () => {
    setOpen(false);
    setEditModalOpen(true);
  };
  const handleCloseEditModal = () => {
    setEditModalOpen(false);
  };

  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const handleOpenDeleteModal = () => {
    setOpen(false);
    setDeleteModalOpen(true);
  };
  const handleCloseDeleteModal = () => {
    setDeleteModalOpen(false);
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setOpen((prevState) => !prevState);
    setHeight(event.currentTarget.clientHeight);
    setTop(event.currentTarget.getBoundingClientRect().top);
    setLeft(event.currentTarget.getBoundingClientRect().left);
  };

  const portalModalContainer = useRef<HTMLElement | null>(null);
  useEffect(() => {
    portalModalContainer.current = document.querySelector(
      ".MuiDialog-container",
    );

    if (!portalModalContainer) {
      throw new Error("Portal modal container element not found in the DOM.");
    }
  }, []);

  return (
    <>
      <TaskFormModal
        open={isEditModalOpen}
        onClose={handleCloseEditModal}
        task={props.task}
      />
      <DeleteTaskModal
        open={isDeleteModalOpen}
        onClose={handleCloseDeleteModal}
        taskTitle={props.task.title}
      />
      <h2 className="cursor-pointer" onClick={handleClick}>
        <FiMoreVertical className="text-medium-gray" />
      </h2>
      {open &&
        createPortal(
          <div
            className={`absolute flex w-[192px] flex-col gap-2 rounded-lg bg-white p-4 text-medium-gray dark:bg-very-dark-gray`}
            style={{ top: top + height + 20, left: left - 96 }}
          >
            <div className="cursor-pointer" onClick={handleOpenEditModal}>
              Edit Task
            </div>
            <div
              className="cursor-pointer text-red"
              onClick={handleOpenDeleteModal}
            >
              Delete Task
            </div>
          </div>,
          portalModalContainer.current || document.body,
        )}
    </>
  );
};

export default TaskOptionsDropdown;
