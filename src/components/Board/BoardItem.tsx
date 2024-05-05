import { useAppSelector } from "../../store/hooks";

import Button from "../UI/Button";
import ColumnList from "../Column/ColumnList";

import DUMMY_DATA from "../../dummy-data.json";

const BOARDS = DUMMY_DATA.boards;

const BoardItem: React.FC = () => {
  const isBoardEmpty = BOARDS.length === 0;

  const activeBoardId = useAppSelector((state) => state.board.activeBoardId);
  const index = BOARDS.findIndex((board) => board.id === activeBoardId);
  const columns = BOARDS[index].columns;

  return (
    <>
      {isBoardEmpty && (
        <div className="mt-80 flex flex-col items-center justify-center gap-8">
          <h2 className="text-center text-medium-gray">
            The board is empty. Create a new column to get started.
          </h2>
          <Button
            title="+ Add New Column"
            className="bg-main-purple text-white"
          />
        </div>
      )}
      {!isBoardEmpty && <ColumnList columns={columns} />}
    </>
  );
};

export default BoardItem;
