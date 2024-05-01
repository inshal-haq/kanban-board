import NavButton from "../UI/NavButton";
import BoardItem from "./BoardItem";
import { FiColumns } from "react-icons/fi";

const BOARDS = ["Platform Launch", "Marketing Plan", "Roadmap"];

const BoardList: React.FC = () => {
  return (
    <>
      <h4 className="mt-6 px-6 py-3 text-medium-gray">
        ALL BOARDS ({BOARDS.length})
      </h4>
      <ul>
        {BOARDS.map((boardTitle, index) => (
          <BoardItem key={index} title={boardTitle} />
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
