import { useAppSelector } from "../../store/hooks";

import kanbanIcon from "../../assets/kanban-fill-purple.svg";

const Logo: React.FC = () => {
  const isSidebarOpen = useAppSelector((state) => state.ui.isSidebarOpen);

  let style = "flex items-center justify-start gap-3 dark:text-white ";

  if (isSidebarOpen) {
    style += "px-6 mb-6";
  } else {
    style += "border-r-lines-light dark:border-r-lines-dark border-r-2 p-6";
  }

  return (
    <div className={style}>
      <img src={kanbanIcon} alt="kanban icon" width={36} />
      <div className="text-3xl font-bold">kanban</div>
    </div>
  );
};

export default Logo;
