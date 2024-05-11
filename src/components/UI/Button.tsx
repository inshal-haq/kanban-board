const Button: React.FC<{
  title: string;
  className: string;
  onClick: () => void;
}> = (props) => {
  return (
    <button
      className={`flex items-center gap-1 rounded-full px-5 py-3 font-bold ${props.className ?? ""}`}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};

export default Button;
