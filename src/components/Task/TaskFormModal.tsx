import Subtask from "../../models/subtask";
import Task from "../../models/task";

import DialogModal from "../UI/DialogModal";
import TextField from "../UI/TextField";
import { useInput } from "../../hooks/useInput";
import { useState } from "react";
import Button from "../UI/Button";
import { FiX } from "react-icons/fi";
import StatusDropdown from "./StatusDropdown";
import { useAppSelector } from "../../store/hooks";

interface TaskFormModalProps {
  open: boolean;
  onClose: () => void;
  task?: Task;
}

const TaskFormModal: React.FC<TaskFormModalProps> = (props) => {
  const { open, onClose, task } = props;
  const isNotEmpty = (value: string) => value.trim() !== "";
  const initialSubtasks = [new Subtask(""), new Subtask("")];
  const [subtasks, setSubtasks] = useState(task?.subtasks ?? initialSubtasks);
  const [didEdits, setDidEdits] = useState([false, false]);
  const handleSubtaskChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number,
  ) => {
    const newSubtasks = [...subtasks];
    newSubtasks[index] = {
      ...newSubtasks[index],
      title: event.target.value,
    } as Subtask;

    const newDidEdits = [...didEdits];
    newDidEdits[index] = false;

    setSubtasks(newSubtasks);
    setDidEdits(newDidEdits);
  };
  const handleSubtaskBlur = (index: number) => {
    const newDidEdits = [...didEdits];
    newDidEdits[index] = true;
    setDidEdits(newDidEdits);
  };
  const subtaskHasError = (index: number) =>
    didEdits[index] && !isNotEmpty(subtasks[index].title);
  const subtaskPlaceholder = (index: number) => {
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
    }
    return placeholder;
  };

  const {
    value: titleValue,
    handleInputChange: handleTitleChange,
    handleInputBlur: handleTitleBlur,
    hasError: titleHasError,
  } = useInput(task?.title ?? "", isNotEmpty);
  const {
    value: descriptionValue,
    handleInputChange: handleDescriptionChange,
    handleInputBlur: handleDescriptionBlur,
    hasError: descriptionHasError,
  } = useInput(task?.description ?? "", isNotEmpty);

  const handleAddSubtask = () => {
    const newSubtasks = [...subtasks];
    newSubtasks.push(new Subtask(""));

    const newDidEdits = [...didEdits];
    newDidEdits.push(false);

    setSubtasks(newSubtasks);
    setDidEdits(newDidEdits);
  };

  const handleRemoveSubtask = (id: string, index: number) => {
    const filteredSubtasks = subtasks.filter((subtask) => subtask.id !== id);

    const filteredEdits = didEdits.splice(index, 1);

    setSubtasks(filteredSubtasks);
    setDidEdits(filteredEdits);
  };

  const boards = useAppSelector((state) => state.board.boards);
  const activeBoardIndex = useAppSelector(
    (state) => state.board.activeBoardIndex,
  );
  const activeBoard = boards[activeBoardIndex];
  const options = activeBoard.columns.map((column) => column.name);

  const [updatedStatus, setUpdatedStatus] = useState(options[0]);
  const handleStatusChange = (option: string) => {
    setUpdatedStatus(option);
  };

  return (
    <DialogModal open={open} onClose={onClose}>
      <h2 className="dark:text-white">{task ? "Edit" : "Add New"} Task</h2>
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
                  onChange={(event) => handleSubtaskChange(event, index)}
                  onBlur={() => handleSubtaskBlur(index)}
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
        type="button"
        title="+ Add New Subtask"
        className="flex justify-center bg-main-purple bg-opacity-10 text-main-purple hover:bg-opacity-25 dark:bg-white"
        onClick={handleAddSubtask}
      />
      {!task && (
        <label className="text-medium-gray">
          <p className="mb-2">Status</p>
          <StatusDropdown
            status={updatedStatus}
            onChange={handleStatusChange}
          />
        </label>
      )}
      <Button
        title={task ? "Save Changes" : "Create Task"}
        className="flex justify-center bg-main-purple text-white hover:bg-main-purple-hover"
        onClick={() => console.log("todo")}
      />
    </DialogModal>
  );
};

export default TaskFormModal;
