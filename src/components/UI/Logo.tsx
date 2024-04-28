import { PiKanbanFill } from "react-icons/pi";
// import { PiKanbanLight } from "react-icons/pi";

const Logo: React.FC = () => {
  return (
    <div className="border-r-lines-light flex items-center justify-between gap-3 border-r-2 px-7 py-5 text-4xl font-bold">
      <PiKanbanFill />
      kanban
    </div>
  );
};

export default Logo;
