import { useState } from "react";
import Task from "../../models/task";
import ViewTaskModal from "./ViewTaskModal";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { boardActions } from "../../store/board-slice";

const TaskItem: React.FC<{ task: Task; columnIndex: number }> = (props) => {
  const { id, title, subtasks } = props.task;

  const dispatch = useAppDispatch();
  const boards = useAppSelector((state) => state.board.boards);
  const activeBoardIndex = useAppSelector(
    (state) => state.board.activeBoardIndex,
  );
  const activeBoard = boards[activeBoardIndex];

  const [isViewTaskModalOpen, setViewTaskModalOpen] = useState(false);
  const handleOpenViewTaskModal = () => {
    const taskIndex = activeBoard.columns[props.columnIndex].tasks.findIndex(
      (task) => task.id === id,
    );
    dispatch(boardActions.setActiveColumn(props.columnIndex));
    dispatch(boardActions.setActiveTask(taskIndex));

    setViewTaskModalOpen(true);
  };
  const handleCloseViewTaskModal = () => {
    setViewTaskModalOpen(false);
  };

  const numOfCompletedSubtasks = subtasks.filter(
    (subtask) => subtask.isCompleted,
  ).length;

  const subtaskText =
    subtasks.length > 0
      ? `${numOfCompletedSubtasks} of ${subtasks.length} subtask${subtasks.length > 1 ? "s" : ""}`
      : "";

  return (
    <>
      <ViewTaskModal
        task={props.task}
        open={isViewTaskModalOpen}
        onClose={handleCloseViewTaskModal}
      />
      <div
        className="item flex w-[280px] cursor-pointer flex-col justify-center gap-2 rounded-lg bg-white px-4 py-6 shadow-md hover:text-main-purple dark:bg-dark-gray dark:text-white dark:hover:text-main-purple"
        onClick={handleOpenViewTaskModal}
      >
        <h3>{title}</h3>
        <p className="text-medium-gray">{subtaskText}</p>
      </div>
    </>
  );
};

export default TaskItem;
