import { BsCheck } from "react-icons/bs";
import Subtask from "../../models/subtask";
import { useState } from "react";

const SubtaskCheckbox: React.FC<{ subtask: Subtask }> = (props) => {
  const { id, title, isCompleted } = props.subtask;

  const [checked, setChecked] = useState(isCompleted);

  let checkedStyle = "";
  if (checked) {
    checkedStyle += " bg-main-purple flex items-center justify-center ";
  } else {
    checkedStyle +=
      " border border-lines-light dark:border-lines-dark bg-white dark:bg-dark-gray ";
  }

  return (
    <>
      <input
        type="checkbox"
        className="hidden"
        id={`subtask-${id}`}
        checked={checked}
        onChange={() => setChecked((prevState) => !prevState)}
      />
      <label
        htmlFor={`subtask-${id}`}
        className="flex cursor-pointer items-center gap-4 rounded bg-light-gray p-3 hover:bg-main-purple hover:bg-opacity-25 dark:bg-very-dark-gray dark:hover:bg-main-purple dark:hover:bg-opacity-25"
      >
        <span className={`h-4 w-4 flex-none rounded-sm ${checkedStyle}`}>
          {checked && <BsCheck className="text-xl text-white" />}
        </span>
        <p
          className={
            checked
              ? "text-medium-gray line-through"
              : "text-black dark:text-white"
          }
        >
          {title}
        </p>
      </label>
    </>
  );
};

export default SubtaskCheckbox;
