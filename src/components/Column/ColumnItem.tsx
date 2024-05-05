import TaskList from "../Task/TaskList";
import Column from "../../models/column";

const ColumnItem: React.FC<{ column: Column }> = (props) => {
  const { name, tasks } = props.column;

  return (
    <div className="h-max w-[280px] bg-medium-gray">
      <div>{name}</div>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default ColumnItem;
