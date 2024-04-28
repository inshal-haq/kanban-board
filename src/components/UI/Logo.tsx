import kanbanIcon from "../../assets/kanban-fill-purple.svg";

const Logo: React.FC = () => {
  return (
    <div className="border-r-lines-light flex items-center justify-between gap-3 border-r-2 px-7 py-5 text-4xl font-bold">
      <img src={kanbanIcon} alt="kanban icon" width={36} />
      kanban
    </div>
  );
};

export default Logo;
