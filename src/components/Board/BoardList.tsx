import NavButton from "../UI/NavButton";
import BoardItem from "./BoardItem";
import { FiColumns } from "react-icons/fi";
import DUMMY_DATA from "../../dummy-data.json";

const BOARDS = DUMMY_DATA.boards;

const BoardList: React.FC = () => {
  return (
    <>
      <h4 className="px-6 py-3 text-medium-gray">
        ALL BOARDS ({BOARDS.length})
      </h4>
      <ul>
        {BOARDS.map((board, index) => (
          <BoardItem key={index} name={board.name} />
        ))}
        <NavButton active={false} textColor="text-main-purple">
          <FiColumns />
          <div>+ Create New Board</div>
        </NavButton>
      </ul>
    </>
  );
};

export default BoardList;
