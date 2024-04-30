import BoardItem from "./BoardItem";
import { FiColumns } from "react-icons/fi";

const BOARDS = ["Platform Launch", "Marketing Plan", "Roadmap"];

const BoardList: React.FC = () => {
  return (
    <>
      <h4 className="px-6 py-3 text-medium-gray">
        ALL BOARDS ({BOARDS.length})
      </h4>
      <ul>
        {BOARDS.map((boardTitle, index) => (
          <BoardItem key={index} title={boardTitle} />
        ))}
        <h3 className="flex cursor-pointer items-center gap-3 rounded-br-full rounded-tr-full px-6 py-3 font-bold text-main-purple hover:bg-main-purple-hover">
          <FiColumns />
          <div>+ Create New Board</div>
        </h3>
      </ul>
    </>
  );
};

export default BoardList;
