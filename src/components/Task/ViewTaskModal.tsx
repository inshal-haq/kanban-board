import Task from "../../models/task";
import SubtaskCheckbox from "./SubtaskCheckbox";
import DialogModal from "../UI/DialogModal";
import StatusDropdown from "./StatusDropdown";
import TaskOptionsDropdown from "./TaskOptionsDropdown";

const ViewTaskModal: React.FC<{
  task: Task;
  open: boolean;
  onClose: () => void;
}> = (props) => {
  const { task, open, onClose } = props;
  const { title, description, status, subtasks } = task;

  const numOfCompletedSubtasks = subtasks.filter(
    (subtask) => subtask.isCompleted,
  ).length;

  return (
    <DialogModal open={open} onClose={onClose}>
      <div className="flex items-center justify-between gap-6">
        <h2>{title}</h2>
        <TaskOptionsDropdown task={props.task} onViewTaskModalClose={onClose} />
      </div>
      <div className="text-medium-gray">{description}</div>
      <fieldset className="text-medium-gray">
        <p className="mb-4">
          Subtasks ({numOfCompletedSubtasks} of {subtasks.length})
        </p>
        <ul className="flex flex-col gap-2">
          {subtasks.map((subtask) => (
            <SubtaskCheckbox key={subtask.id} subtask={subtask} />
          ))}
        </ul>
      </fieldset>
      <label className="text-medium-gray">
        <p className="mb-2">Current Status</p>
        <StatusDropdown initialStatus={status} />
      </label>
    </DialogModal>
  );
};

export default ViewTaskModal;
