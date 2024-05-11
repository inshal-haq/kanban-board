import DialogModal from "../UI/DialogModal";
import TextField from "../UI//TextField";

const AddTaskModal: React.FC<{
  open: boolean;
  setOpen: (state: boolean) => void;
}> = (props) => {
  return (
    <DialogModal open={props.open} setOpen={props.setOpen}>
      <h2>Add New Task</h2>
      <label className="text-medium-gray">
        <p className="mb-2">Title</p>
        <TextField />
      </label>
    </DialogModal>
  );
};

export default AddTaskModal;
