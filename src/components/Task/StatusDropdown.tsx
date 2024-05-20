import { useState, useEffect, useRef } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { createPortal } from "react-dom";

const StatusDropdown: React.FC<{
  initialStatus?: string;
}> = (props) => {
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [top, setTop] = useState<number>(0);

  const options = ["Todo", "Doing", "Done"];
  const initialStatus = props.initialStatus || options[0];
  const [status, setStatus] = useState(initialStatus);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setOpen((prevState) => !prevState);
    setWidth(event.currentTarget.clientWidth);
    setHeight(event.currentTarget.clientHeight);
    setTop(event.currentTarget.getBoundingClientRect().top);
  };

  const handleOptionSelect = (option: string) => {
    setOpen(false);
    setStatus(option);
  };

  const portalModalContainer = useRef<HTMLElement | null>(null);
  useEffect(() => {
    portalModalContainer.current = document.querySelector(
      ".MuiDialog-container",
    );

    if (!portalModalContainer) {
      throw new Error("Portal modal container element not found in the DOM.");
    }
  }, []);

  return (
    <>
      <div
        className="w-full select-none bg-white text-white dark:bg-dark-gray"
        onClick={handleClick}
      >
        <div
          className={`border-1 relative flex cursor-pointer items-center justify-between rounded border border-solid text-black dark:text-white ${open ? "border-main-purple" : "border-lines-light dark:border-lines-dark"} px-4 py-2`}
        >
          {status}
          {open ? (
            <FiChevronUp className="text-lg text-main-purple" />
          ) : (
            <FiChevronDown className="text-lg text-main-purple" />
          )}
        </div>
      </div>
      {open &&
        createPortal(
          <div
            className={`absolute flex flex-col gap-2 rounded-lg bg-white p-4  text-medium-gray dark:bg-very-dark-gray`}
            style={{ width: `${width}px`, top: top + height + 10 }}
          >
            {options.map((option, index) => (
              <div
                key={index}
                className="cursor-pointer"
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>,
          portalModalContainer.current || document.body,
        )}
    </>
  );
};

export default StatusDropdown;
