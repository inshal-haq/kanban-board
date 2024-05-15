import ColumnItem from "./ColumnItem";
import Column from "../../models/column";

const ColumnList: React.FC<{ columns: Column[] }> = (props) => {
  return (
    <ul className="flex gap-6">
      {props.columns.map((column, index) => (
        <ColumnItem key={column.id} column={column} index={index} />
      ))}
      <h1 className="mt-8 flex w-[280px] cursor-pointer items-center justify-center rounded-lg bg-[#E9EFFA] text-medium-gray dark:bg-[#2B2C37] dark:bg-opacity-25">
        + New Column
      </h1>
    </ul>
  );
};

export default ColumnList;
