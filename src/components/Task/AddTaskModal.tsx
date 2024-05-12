import Subtask from "../../models/subtask";

import DialogModal from "../UI/DialogModal";
import TextField from "../UI//TextField";
import { useInput } from "../../hooks/useInput";
import { useEffect, useState } from "react";
import Button from "../UI/Button";
import { FiX } from "react-icons/fi";
import StatusDropdown from "./StatusDropdown";

const AddTaskModal: React.FC<{
  open: boolean;
  setOpen: (state: boolean) => void;
}> = (props) => {
  const isNotEmpty = (value: string) => value.trim() !== "";

  const initialSubtasks = [new Subtask(""), new Subtask("")];
  const [subtasks, setSubtasks] = useState(initialSubtasks);
  const [didEdits, setDidEdits] = useState([false, false]);
  const handleSubtaskChange = (event, index) => {
    const newSubtasks = [...subtasks];
    newSubtasks[index] = {
      ...newSubtasks[index],
      title: event.target.value,
    };

    const newDidEdits = [...didEdits];
    newDidEdits[index] = false;

    setSubtasks(newSubtasks);
    setDidEdits(newDidEdits);
  };
  const handleSubtaskBlur = (e, index) => {
    const newDidEdits = [...didEdits];
    newDidEdits[index] = true;
    setDidEdits(newDidEdits);
  };

  const subtaskHasError = (index) =>
    didEdits[index] && !isNotEmpty(subtasks[index].title);

  const subtaskPlaceholder = (index) => {
    let placeholder = "";
    switch ((index + 1) % 5) {
      case 1:
        placeholder = "e.g. Take coffee break";
        break;
      case 2:
        placeholder = "e.g. Drink coffee & smile";
        break;
      case 3:
        placeholder = "e.g. Grab a book";
        break;
      case 4:
        placeholder = "e.g. Read and drink";
        break;
      case 0:
        placeholder = "e.g. Legs up, comfy sofa, lax life";
        break;

      default:
        placeholder = "e.g. Take coffee break";
        break;
    }
    return placeholder;
  };

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

  const handleAddSubtask = () => {
    const newSubtasks = [...subtasks];
    newSubtasks.push(new Subtask(""));

    const newDidEdits = [...didEdits];
    newDidEdits.push(false);

    setSubtasks(newSubtasks);
    setDidEdits(newDidEdits);

    console.log(subtasks);
    console.log(didEdits);
  };

  const handleRemoveSubtask = (id, index) => {
    const filteredSubtasks = subtasks.filter((subtask) => subtask.id !== id);

    const filteredEdits = didEdits.splice(index, 1);

    setSubtasks(filteredSubtasks);
    setDidEdits(filteredEdits);
  };

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
      <fieldset className="text-medium-gray">
        <label htmlFor="subtasks">
          <p className="mb-2">Subtasks</p>
          <ul className="flex flex-col gap-2">
            {subtasks.map(({ id, title }, index) => (
              <div
                key={`${index}-${id}`}
                className="flex flex-1 items-center gap-4"
              >
                <TextField
                  id="subtasks"
                  name="subtasks"
                  placeholder={subtaskPlaceholder(index)}
                  value={title}
                  onChange={(e) => handleSubtaskChange(e, index)}
                  onBlur={(e) => handleSubtaskBlur(e, index)}
                  error={subtaskHasError(index)}
                />
                <FiX
                  className="cursor-pointer text-xl hover:text-red"
                  onClick={() => handleRemoveSubtask(id, index)}
                />
              </div>
            ))}
          </ul>
        </label>
      </fieldset>
      <Button
        title="+ Add New Subtask"
        className="flex justify-center bg-main-purple bg-opacity-10 text-main-purple hover:bg-opacity-25"
        onClick={handleAddSubtask}
      />
      <label className="text-medium-gray">
        <p className="mb-2">Status</p>
        <StatusDropdown />
      </label>
      <Button
        title="Create Subtask"
        className="flex justify-center bg-main-purple text-white hover:bg-main-purple-hover"
        onClick={handleAddSubtask}
      />
    </DialogModal>
  );
};

export default AddTaskModal;
