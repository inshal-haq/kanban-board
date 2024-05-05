import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { boardActions } from "../../store/board-slice";

import { FiColumns } from "react-icons/fi";
import NavButton from "../UI/NavButton";

const BoardName: React.FC<{ id: string; name: string }> = (props) => {
  const dispatch = useAppDispatch();
  const activeBoardId = useAppSelector((state) => state.board.activeBoardId);
  const isActive = props.id === activeBoardId;

  const handleBoardSelect = () => {
    dispatch(boardActions.setActiveBoard(props.id));
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

export default BoardName;
