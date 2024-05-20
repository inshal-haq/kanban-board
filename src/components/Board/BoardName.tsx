import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { boardActions } from "../../store/board-slice";

import { FiColumns } from "react-icons/fi";
import NavButton from "../UI/NavButton";

const BoardName: React.FC<{ index: number; name: string }> = (props) => {
  const dispatch = useAppDispatch();
  const activeBoardIndex = useAppSelector(
    (state) => state.board.activeBoardIndex,
  );
  const isActive = props.index === activeBoardIndex;

  const handleBoardSelect = () => {
    dispatch(boardActions.setActiveBoard(props.index));
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
