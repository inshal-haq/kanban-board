import DialogModal from "../UI/DialogModal";
import TextField from "../UI//TextField";
import { useInput } from "../../hooks/useInput";

const AddTaskModal: React.FC<{
  open: boolean;
  setOpen: (state: boolean) => void;
}> = (props) => {
  const isNotEmpty = (value: string) => value.trim() !== "";

  const {
    value: titleValue,
    handleInputChange: handleTitleChange,
    handleInputBlur: handleTitleBlur,
    hasError: titleHasError,
  } = useInput("", isNotEmpty);
  const {
    value: descriptionValue,
    handleInputChange: handleDescriptionChange,
    handleInputBlur: handleDescriptionBlur,
    hasError: descriptionHasError,
  } = useInput("", isNotEmpty);

  return (
    <DialogModal open={props.open} setOpen={props.setOpen}>
      <h2>Add New Task</h2>
      <label className="text-medium-gray">
        <p className="mb-2">Title</p>
        <TextField
          id="title"
          name="title"
          placeholder="e.g. Take coffee break"
          value={titleValue}
          onChange={handleTitleChange}
          onBlur={handleTitleBlur}
          error={titleHasError}
        />
      </label>
      <label className="text-medium-gray">
        <p className="mb-2">Description</p>
        <TextField
          id="description"
          name="description"
          textarea
          placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."
          value={descriptionValue}
          onChange={handleDescriptionChange}
          onBlur={handleDescriptionBlur}
          error={descriptionHasError}
        />
      </label>
    </DialogModal>
  );
};

export default AddTaskModal;
