interface ButtonProps {
  type?: "button" | "submit" | "reset";
  title: string;
  className: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      type={props.type}
      className={`flex items-center gap-1 rounded-full px-5 py-3 font-bold ${props.className ?? ""}`}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};

export default Button;
