import ColumnItem from "./ColumnItem";
import Column from "../../models/column";

const ColumnList: React.FC<{ columns: Column[] }> = (props) => {
  return (
    <ul className="flex gap-6">
      {props.columns.map((column) => (
        <ColumnItem key={column.id} column={column} />
      ))}
      <h1 className="mt-8 flex w-[280px] items-center justify-center rounded-lg bg-[#E9EFFA] text-medium-gray">
        + New Column
      </h1>
    </ul>
  );
};

export default ColumnList;
