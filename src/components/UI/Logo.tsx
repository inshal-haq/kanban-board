import kanbanIcon from "../../assets/kanban-fill-purple.svg";

const Logo: React.FC = () => {
  const sidebarActive = true;

  let style = "flex items-center justify-start gap-3 text-3xl font-bold ";
  if (sidebarActive) {
    style += "p-6";
  } else {
    style += "border-r-lines-light border-r-2 px-7 py-5";
  }

  return (
    <div className={style}>
      <img src={kanbanIcon} alt="kanban icon" width={36} />
      kanban
    </div>
  );
};

export default Logo;
