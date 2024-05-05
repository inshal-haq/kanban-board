import Task from "../../models/task";

const TaskItem: React.FC<{ task: Task }> = (props) => {
  const { title, description, status, subtasks } = props.task;

  return <div className="h-[200px]">TaskItem</div>;
};

export default TaskItem;
