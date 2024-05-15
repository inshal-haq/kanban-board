import { useAppSelector } from "../../store/hooks";

import Button from "../UI/Button";
import ColumnList from "../Column/ColumnList";

import DUMMY_DATA from "../../dummy-data.json";

const BOARDS = DUMMY_DATA.boards;

const BoardItem: React.FC = () => {
  const isBoardEmpty = BOARDS.length === 0;

  const activeBoardId = useAppSelector((state) => state.board.activeBoardId);

  const board = BOARDS.find((board) => board.id === activeBoardId);

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
            onClick={() => {
              console.log("todo");
            }}
          />
        </div>
      )}
      {!isBoardEmpty && <ColumnList board={board!} />}
    </>
  );
};

export default BoardItem;
