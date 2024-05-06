import { forwardRef } from "react";

import Modal from "../UI/Modal";
import Task from "../../models/task";
import { FiMoreVertical } from "react-icons/fi";
import SubtaskCheckbox from "./SubtaskCheckbox";
import TextField from "../UI/TextField";

const ViewTask: React.FC<{ task: Task }> = forwardRef((props, ref) => {
  const { title, description, status, subtasks } = props.task;

  const numOfCompletedSubtasks = subtasks.filter(
    (subtask) => subtask.isCompleted,
  ).length;

  return (
    <Modal ref={ref}>
      <div className="flex items-center justify-between gap-6">
        <h2>{title}</h2>
        <h2>
          <FiMoreVertical className="text-medium-gray" />
        </h2>
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
        <p className="mb-4">Current Status</p>
        <TextField />
      </label>
    </Modal>
  );
});

export default ViewTask;
