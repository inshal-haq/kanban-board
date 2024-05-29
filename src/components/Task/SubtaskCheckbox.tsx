import { BsCheck } from "react-icons/bs";
import Subtask from "../../models/subtask";

interface SubtaskCheckboxProps {
  subtask: Subtask;
  checked: boolean;
  onChange: (id: string) => void;
}

const SubtaskCheckbox: React.FC<SubtaskCheckboxProps> = (props) => {
  const { subtask, checked, onChange } = props;
  const { id, title } = subtask;

  let checkedStyle = "";
  if (checked) {
    checkedStyle += " bg-main-green flex items-center justify-center ";
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
        onChange={() => onChange(id)}
      />
      <label
        htmlFor={`subtask-${id}`}
        className="hover:bg-main-green dark:hover:bg-main-green flex cursor-pointer items-center gap-4 rounded bg-light-gray p-3 hover:bg-opacity-25 dark:bg-very-dark-gray dark:hover:bg-opacity-25"
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
