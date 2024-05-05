import TaskList from "../Task/TaskList";
import Column from "../../models/column";

const ColumnItem: React.FC<{ column: Column; index: number }> = (props) => {
  const { name, tasks } = props.column;

  let color = "";
  switch ((props.index + 1) % 5) {
    case 0:
      color = "bg-[#49C4E5]";
      break;
    case 1:
      color = "bg-[#8471F2]";
      break;
    case 2:
      color = "bg-[#67E2AE]";
      break;
    case 3:
      color = "bg-[#CE4760]";
      break;
    case 4:
      color = "bg-[#FAFF7F]";
      break;

    default:
      color = "bg-[#49C4E5]";
      break;
  }

  return (
    <div className="h-max w-[280px]">
      <div className="mb-4 flex items-center gap-2">
        <div className={`h-3 w-3 rounded-full ${color}`}></div>
        <h4 className="text-medium-gray">
          {name.toUpperCase()} ({tasks.length})
        </h4>
      </div>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default ColumnItem;
