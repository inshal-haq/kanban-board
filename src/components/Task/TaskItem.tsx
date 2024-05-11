import { useState } from "react";
import Task from "../../models/task";
import ViewTaskModal from "./ViewTaskModal";

const TaskItem: React.FC<{ task: Task }> = (props) => {
  const { title, description, status, subtasks } = props.task;

  const [isModalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const numOfCompletedSubtasks = subtasks.filter(
    (subtask) => subtask.isCompleted,
  ).length;

  return (
    <>
      <ViewTaskModal
        task={props.task}
        open={isModalOpen}
        setOpen={setModalOpen}
      />
      <div
        className="item flex w-[280px] cursor-pointer flex-col justify-center gap-2 rounded-lg bg-white px-4 py-6 shadow-md"
        onClick={handleOpenModal}
      >
        <h3>{title}</h3>
        <p className="text-medium-gray">
          {numOfCompletedSubtasks} of {subtasks.length} subtask
          {subtasks.length > 1 && "s"}
        </p>
      </div>
    </>
  );
};

export default TaskItem;
