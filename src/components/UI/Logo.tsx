import { useAppSelector } from "../../store/hooks";

import kanbanIcon from "../../assets/kanban-fill-purple.svg";

const Logo: React.FC = () => {
  const sidebarActive = useAppSelector((state) => state.ui.sidebarActive);

  let style = "flex items-center justify-start gap-3 text-3xl font-bold ";

  if (sidebarActive) {
    style += "px-6 mb-6 ";
  } else {
    style += "border-r-lines-light border-r-2 p-6";
  }

  return (
    <div className={style}>
      <img src={kanbanIcon} alt="kanban icon" width={36} />
      kanban
    </div>
  );
};

export default Logo;
