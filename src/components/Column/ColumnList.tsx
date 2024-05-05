import ColumnItem from "./ColumnItem";
import Column from "../../models/column";

const ColumnList: React.FC<{ columns: Column[] }> = (props) => {
  return (
    <ul className="flex gap-6">
      {props.columns.map((column) => (
        <ColumnItem key={column.id} column={column} />
      ))}
      <div className="w-[280px] bg-medium-gray">+ New Column</div>
    </ul>
  );
};

export default ColumnList;
