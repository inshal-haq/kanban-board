import { useAppSelector } from "../../store/hooks";
import Column from "./Column";

import DUMMY_DATA from "../../dummy-data.json";
const BOARDS = DUMMY_DATA.boards;

const ColumnList: React.FC = () => {
  const activeBoardName = useAppSelector(
    (state) => state.board.activeBoardName,
  );
  const index = BOARDS.findIndex((board) => board.name === activeBoardName);
  const columns = BOARDS[index].columns;

  return (
    <div>
      <ul>
        {columns.map((column) => (
          <Column key={column.name} />
        ))}
      </ul>
    </div>
  );
};

export default ColumnList;
