import { FiColumns } from "react-icons/fi";

const BoardItem: React.FC<{ title: string }> = (props) => {
  const activeBoard = "Platform Launch";

  let style =
    "flex items-center gap-3 rounded-br-full rounded-tr-full px-6 py-3 font-bold cursor-pointer ";

  if (props.title === activeBoard) {
    style += "text-white bg-main-purple";
  } else {
    style +=
      "text-medium-gray hover:bg-main-purple-hover hover:text-main-purple";
  }

  return (
    <h3 className={style}>
      <FiColumns />
      <div>{props.title}</div>
    </h3>
  );
};

export default BoardItem;
