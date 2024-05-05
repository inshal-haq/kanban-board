import TaskItem from "./TaskItem";
import Task from "../../models/task";

const TaskList: React.FC<{ tasks: Task[] }> = (props) => {
  return (
    <ul>
      {props.tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
