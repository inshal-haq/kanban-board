import Task from "../../models/task";
import SubtaskCheckbox from "./SubtaskCheckbox";
import DialogModal from "../UI/DialogModal";
import StatusDropdown from "./StatusDropdown";
import TaskOptionsDropdown from "./TaskOptionsDropdown";
import { useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { boardActions } from "../../store/board-slice";

interface ViewTaskModalProps {
  task: Task;
  open: boolean;
  onClose: () => void;
}

const ViewTaskModal: React.FC<ViewTaskModalProps> = (props) => {
  const { task, open, onClose } = props;
  const { title, description, subtasks } = task;

  const dispatch = useAppDispatch();
  const boards = useAppSelector((state) => state.board.boards);
  const activeBoardIndex = useAppSelector(
    (state) => state.board.activeBoardIndex,
  );
  const activeColumnIndex = useAppSelector(
    (state) => state.board.activeColumnIndex,
  );
  const activeTaskIndex = useAppSelector(
    (state) => state.board.activeTaskIndex,
  );

  type SubtasksCheckedState = {
    [key: string]: boolean;
  };

  const [subtasksChecked, setSubtasksChecked] = useState(
    subtasks.reduce((acc: SubtasksCheckedState, subtask) => {
      acc[subtask.id] = subtask.isCompleted;
      return acc;
    }, {}),
  );

  const handleCheckboxChange = (id: string) => {
    setSubtasksChecked((prevStates) => ({
      ...prevStates,
      [id]: !prevStates[id],
    }));
  };

  const checkedSubtasksCount = useMemo(
    () => Object.values(subtasksChecked).filter((checked) => checked).length,
    [subtasksChecked],
  );

  const currentStatus =
    boards[activeBoardIndex].columns[activeColumnIndex].name;
  const [updatedStatus, setUpdatedStatus] = useState(currentStatus);
  const handleStatusChange = (option: string) => {
    setUpdatedStatus(option);
  };

  const handleCloseViewTaskModal = () => {
    let changedSubtasks = false;
    const updatedSubtasks = [];

    const substasksCheckedStates = Object.values(subtasksChecked).map(
      (checked) => checked,
    );

    for (let i = 0; i < subtasks.length; i++) {
      updatedSubtasks[i] = {
        ...subtasks[i],
        isCompleted: substasksCheckedStates[i],
      };

      if (subtasks[i].isCompleted !== substasksCheckedStates[i]) {
        changedSubtasks = true;
      }
    }
    if (!changedSubtasks && updatedStatus === currentStatus) {
      onClose();
      return;
    }

    const updatedTask = {
      subtasks: updatedSubtasks,
      status: updatedStatus,
    };
    dispatch(
      boardActions.updateTask({
        activeBoardIndex,
        activeColumnIndex,
        activeTaskIndex,
        updatedTask,
      }),
    );
    const columnIndex = boards[activeBoardIndex].columns.findIndex(
      (column) => column.name === updatedStatus,
    );
    const taskIndex =
      boards[activeBoardIndex].columns[columnIndex].tasks.length;

    dispatch(boardActions.setActiveColumn(columnIndex));
    dispatch(boardActions.setActiveTask(taskIndex));

    onClose();
  };

  return (
    <DialogModal open={open} onClose={handleCloseViewTaskModal}>
      <div className="flex items-center justify-between gap-6">
        <h2 className="dark:text-white">{title}</h2>
        <TaskOptionsDropdown task={props.task} />
      </div>
      <div className="text-medium-gray">{description}</div>
      <fieldset className="text-medium-gray">
        <p className="mb-4">
          Subtasks ({checkedSubtasksCount} of {subtasks.length})
        </p>
        <ul className="flex flex-col gap-2">
          {subtasks.map((subtask) => (
            <SubtaskCheckbox
              key={subtask.id}
              subtask={subtask}
              checked={subtasksChecked[subtask.id]}
              onChange={handleCheckboxChange}
            />
          ))}
        </ul>
      </fieldset>
      <label className="text-medium-gray">
        <p className="mb-2">Current Status</p>
        <StatusDropdown status={updatedStatus} onChange={handleStatusChange} />
      </label>
    </DialogModal>
  );
};

export default ViewTaskModal;
