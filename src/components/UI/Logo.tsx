import { useSelector } from "react-redux";

import kanbanIcon from "../../assets/kanban-fill-purple.svg";

const Logo: React.FC = () => {
  const sidebarActive = useSelector((state) => state.ui.sidebarActive);

  let style = "flex items-center justify-start gap-3 text-3xl font-bold mb-6 ";

  if (sidebarActive) {
    style += "px-6";
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
