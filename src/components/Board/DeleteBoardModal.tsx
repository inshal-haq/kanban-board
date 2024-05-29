import DialogModal from "../UI/DialogModal";
import Button from "../UI/Button";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { boardActions } from "../../store/board-slice";

interface DeleteBoardModalProps {
  open: boolean;
  onClose: () => void;
}

const DeleteBoardModal: React.FC<DeleteBoardModalProps> = (props) => {
  const { open, onClose } = props;
  const dispatch = useAppDispatch();

  const boards = useAppSelector((state) => state.board.boards);
  const activeBoardIndex = useAppSelector(
    (state) => state.board.activeBoardIndex,
  );
  const activeBoard = boards[activeBoardIndex];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(boardActions.setActiveBoard(0));
    dispatch(boardActions.deleteBoard(activeBoardIndex));
    onClose();
  };

  return (
    <DialogModal open={open} onClose={onClose} onFormSubmit={handleSubmit}>
      <h2 className="text-red">Delete this board?</h2>
      <div className="text-medium-gray">
        Are you sure you want to delete the ‘{activeBoard.name}’ board? This
        action will remove all columns and tasks and cannot be reversed.
      </div>
      <div className="flex items-center justify-between gap-4">
        <Button
          title="Delete"
          className=" flex flex-1 justify-center bg-red text-white hover:bg-red-hover"
        />
        <Button
          type="button"
          title="Cancel"
          className="bg-main-green text-main-green flex flex-1 justify-center bg-opacity-10 hover:bg-opacity-25 dark:bg-white"
          onClick={onClose}
        />
      </div>
    </DialogModal>
  );
};

export default DeleteBoardModal;
