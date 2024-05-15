import DialogModal from "../UI/DialogModal";
import Button from "../UI/Button";

const DeleteBoardModal: React.FC<{
  open: boolean;
  onClose: () => void;
  boardName: string;
}> = (props) => {
  const { open, onClose, boardName } = props;

  return (
    <DialogModal open={open} onClose={onClose}>
      <h2 className="text-red">Delete this board?</h2>
      <div className="text-medium-gray">
        Are you sure you want to delete the ‘{boardName}’ board? This action
        will remove all columns and tasks and cannot be reversed.
      </div>
      <div className="flex items-center justify-between gap-4">
        <Button
          title="Delete"
          className=" flex flex-1 justify-center bg-red text-white hover:bg-red-hover"
          onClick={() => console.log("todo")}
        />
        <Button
          title="Cancel"
          className="flex flex-1 justify-center bg-main-purple bg-opacity-10 text-main-purple hover:bg-opacity-25 dark:bg-white"
          onClick={onClose}
        />
      </div>
    </DialogModal>
  );
};

export default DeleteBoardModal;
