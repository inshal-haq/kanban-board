import Task from "../../models/task";

const TaskItem: React.FC<{ task: Task }> = (props) => {
  const { title, description, status, subtasks } = props.task;

  const numOfCompletedSubtasks = subtasks.filter(
    (subtask) => subtask.isCompleted,
  ).length;

  return (
    <div className="item flex w-[280px] flex-col justify-center gap-2 rounded-lg bg-white px-4 py-6 shadow-md">
      <h3>{title}</h3>
      <p className="text-medium-gray">
        {numOfCompletedSubtasks} of {subtasks.length} subtask
        {subtasks.length > 1 && "s"}
      </p>
    </div>
  );
};

export default TaskItem;
