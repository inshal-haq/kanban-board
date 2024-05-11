import { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import { createPortal } from "react-dom";

const TaskOptionsDropdown: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState<number>(0);
  const [top, setTop] = useState<number>(0);
  const [left, setLeft] = useState<number>(0);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setOpen((prevState) => !prevState);
    setHeight(event.currentTarget.clientHeight);
    setTop(event.currentTarget.getBoundingClientRect().top);
    setLeft(event.currentTarget.getBoundingClientRect().left);
  };

  const handleSelect = () => {
    setOpen(false);
  };

  return (
    <>
      <h2 className="cursor-pointer" onClick={handleClick}>
        <FiMoreVertical className="text-medium-gray" />
      </h2>
      {open &&
        createPortal(
          <div
            className={`absolute flex w-[192px] flex-col gap-2 rounded-lg bg-white p-4 text-medium-gray`}
            style={{ top: top + height + 20, left: left - 96 }}
          >
            <div className="cursor-pointer" onClick={handleSelect}>
              Edit Task
            </div>
            <div className="cursor-pointer text-red" onClick={handleSelect}>
              Delete Task
            </div>
          </div>,
          document.querySelector(".MuiDialog-container"),
        )}
    </>
  );
};

export default TaskOptionsDropdown;
