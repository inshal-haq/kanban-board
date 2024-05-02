const NavButton: React.FC<{
  onClick?: () => void;
  active: boolean;
  textColor: string;
  children: React.ReactNode;
}> = (props) => {
  let style = `flex items-center gap-3 rounded-br-full rounded-tr-full px-6 py-4 font-bold cursor-pointer ${props.textColor} `;

  if (props.active) {
    style += "bg-main-purple";
  } else {
    style +=
      "hover:bg-main-purple-hover hover:bg-opacity-15 hover:text-main-purple";
  }

  return (
    <h3 className={style} onClick={props.onClick}>
      {props.children}
    </h3>
  );
};

export default NavButton;
