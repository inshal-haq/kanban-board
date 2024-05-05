import TaskList from "../Task/TaskList";
import Column from "../../models/column";

const ColumnItem: React.FC<{ column: Column }> = (props) => {
  const { name, tasks } = props.column;

  return (
    <div className="h-max w-[280px]">
      <div className="mb-4 flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-black"></div>
        <h4 className="text-medium-gray">
          {name.toUpperCase()} ({tasks.length})
        </h4>
      </div>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default ColumnItem;
