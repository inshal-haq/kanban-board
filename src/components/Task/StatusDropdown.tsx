import { useState, useEffect, useRef } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { createPortal } from "react-dom";
import { useAppSelector } from "../../store/hooks";

const StatusDropdown: React.FC<{
  status: string;
  onChange: (option: string) => void;
}> = (props) => {
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [top, setTop] = useState<number>(0);

  const boards = useAppSelector((state) => state.board.boards);
  const activeBoardIndex = useAppSelector(
    (state) => state.board.activeBoardIndex,
  );
  const activeBoard = boards[activeBoardIndex];

  const options = activeBoard.columns.map((column) => column.name);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setOpen((prevState) => !prevState);
    setWidth(event.currentTarget.clientWidth);
    setHeight(event.currentTarget.clientHeight);
    setTop(event.currentTarget.getBoundingClientRect().top);
  };

  const handleOptionSelect = (option: string) => {
    props.onChange(option);
    setOpen(false);
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
          className={`border-1 relative flex cursor-pointer items-center justify-between rounded border border-solid text-black dark:text-white ${open ? "border-main-green" : "border-lines-light dark:border-lines-dark"} px-4 py-2`}
        >
          {props.status}
          {open ? (
            <FiChevronUp className="text-main-green text-lg" />
          ) : (
            <FiChevronDown className="text-main-green text-lg" />
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
