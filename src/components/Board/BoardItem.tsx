import { FiColumns } from "react-icons/fi";
import NavButton from "../UI/NavButton";

const BoardItem: React.FC<{ title: string }> = (props) => {
  const activeBoard = "Platform Launch";
  const isActive = props.title === activeBoard;

  return (
    <NavButton
      active={isActive}
      textColor={isActive ? "text-white" : "text-medium-gray"}
    >
      <FiColumns />
      <div>{props.title}</div>
    </NavButton>
  );
};

export default BoardItem;
