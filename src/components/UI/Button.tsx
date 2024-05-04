const Button: React.FC<{ title: string; className: string }> = (props) => {
  return (
    <button
      className={`flex items-center gap-1 rounded-full px-5 py-3 font-bold ${props.className ?? ""}`}
    >
      {props.title}
    </button>
  );
};

export default Button;
