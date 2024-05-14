import DialogModal from "../UI/DialogModal";
import Button from "../UI/Button";

const DeleteTaskModal: React.FC<{
  open: boolean;
  onClose: () => void;
  taskTitle: string;
}> = (props) => {
  const { open, onClose, taskTitle } = props;

  return (
    <DialogModal open={open} onClose={onClose}>
      <h2 className="text-red">Delete this task?</h2>
      <div className="text-medium-gray">
        Are you sure you want to delete the ‘{taskTitle}’ task and its subtasks?
        This action cannot be reversed.
      </div>
      <div className="flex items-center justify-between gap-4">
        <Button
          title="Delete"
          className=" flex flex-1 justify-center bg-red text-white hover:bg-red-hover"
          onClick={() => console.log("todo")}
        />
        <Button
          title="Cancel"
          className="flex flex-1 justify-center bg-main-purple bg-opacity-10 text-main-purple hover:bg-opacity-25"
          onClick={onClose}
        />
      </div>
    </DialogModal>
  );
};

export default DeleteTaskModal;
