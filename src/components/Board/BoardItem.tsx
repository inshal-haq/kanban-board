import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { boardActions } from "../../store/board-slice";

import { FiColumns } from "react-icons/fi";
import NavButton from "../UI/NavButton";

const BoardItem: React.FC<{ name: string }> = (props) => {
  const dispatch = useAppDispatch();
  const activeBoardName = useAppSelector(
    (state) => state.board.activeBoardName,
  );
  const isActive = props.name === activeBoardName;

  const handleBoardSelect = () => {
    dispatch(boardActions.setActiveBoard(props.name));
  };

  return (
    <NavButton
      active={isActive}
      textColor={isActive ? "text-white" : "text-medium-gray"}
      onClick={handleBoardSelect}
    >
      <FiColumns />
      <div>{props.name}</div>
    </NavButton>
  );
};

export default BoardItem;
