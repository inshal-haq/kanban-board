import DialogModal from "../UI/DialogModal";
import Button from "../UI/Button";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { boardActions } from "../../store/board-slice";

const DeleteTaskModal: React.FC<{
  open: boolean;
  onClose: () => void;
  taskTitle: string;
}> = (props) => {
  const { open, onClose, taskTitle } = props;

  const dispatch = useAppDispatch();
  const activeBoardIndex = useAppSelector(
    (state) => state.board.activeBoardIndex,
  );
  const activeColumnIndex = useAppSelector(
    (state) => state.board.activeColumnIndex,
  );
  const activeTaskIndex = useAppSelector(
    (state) => state.board.activeTaskIndex,
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(
      boardActions.deleteTask({
        activeBoardIndex,
        activeColumnIndex,
        activeTaskIndex,
      }),
    );

    onClose();
  };

  return (
    <DialogModal open={open} onClose={onClose} onFormSubmit={handleSubmit}>
      <h2 className="text-red">Delete this task?</h2>
      <div className="text-medium-gray">
        Are you sure you want to delete the ‘{taskTitle}’ task and its subtasks?
        This action cannot be reversed.
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

export default DeleteTaskModal;
