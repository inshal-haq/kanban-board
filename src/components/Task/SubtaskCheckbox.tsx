import { BsCheck } from "react-icons/bs";
import Subtask from "../../models/subtask";

const SubtaskCheckbox: React.FC<{ subtask: Subtask }> = (props) => {
  const { title, isCompleted } = props.subtask;

  let checkedStyle = "";
  if (isCompleted) {
    checkedStyle += " bg-main-purple flex items-center justify-center ";
  } else {
    checkedStyle += " border border-lines-light bg-white ";
  }

  return (
    <>
      <input
        type="checkbox"
        defaultChecked={isCompleted}
        className="hidden"
        id="subtask"
      />
      <label
        htmlFor="subtask"
        className="flex cursor-pointer items-center gap-4 rounded bg-light-gray p-3 hover:bg-main-purple hover:bg-opacity-25"
      >
        <span className={`h-4 w-4 flex-none rounded-sm ${checkedStyle}`}>
          {isCompleted && <BsCheck className="text-xl text-white" />}
        </span>
        <p
          className={
            isCompleted ? "text-medium-gray line-through" : "text-black"
          }
        >
          {title}
        </p>
      </label>
    </>
  );
};

export default SubtaskCheckbox;
