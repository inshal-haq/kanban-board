import DialogModal from "../UI/DialogModal";
import Button from "../UI/Button";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { boardActions } from "../../store/board-slice";

interface DeleteBoardModalProps {
  open: boolean;
  onClose: () => void;
  boardName: string;
}

const DeleteBoardModal: React.FC<DeleteBoardModalProps> = (props) => {
  const { open, onClose, boardName } = props;
  const dispatch = useAppDispatch();
  const activeBoardIndex = useAppSelector(
    (state) => state.board.activeBoardIndex,
  );
  const boards = useAppSelector((state) => state.board.boards);

  const handleDeleteBoard = () => {
    dispatch(boardActions.deleteBoard(activeBoardIndex));
    props.onClose();
    if (boards.length !== 0) {
      dispatch(boardActions.setActiveBoard(0));
    }
  };

  return (
    <DialogModal open={open} onClose={onClose} onFormSubmit={handleDeleteBoard}>
      <h2 className="text-red">Delete this board?</h2>
      <div className="text-medium-gray">
        Are you sure you want to delete the ‘{boardName}’ board? This action
        will remove all columns and tasks and cannot be reversed.
      </div>
      <div className="flex items-center justify-between gap-4">
        <Button
          title="Delete"
          className=" flex flex-1 justify-center bg-red text-white hover:bg-red-hover"
        />
        <Button
          type="button"
          title="Cancel"
          className="flex flex-1 justify-center bg-main-purple bg-opacity-10 text-main-purple hover:bg-opacity-25 dark:bg-white"
          onClick={onClose}
        />
      </div>
    </DialogModal>
  );
};

export default DeleteBoardModal;
