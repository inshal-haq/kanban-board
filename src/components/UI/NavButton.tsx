interface NavButtonProps {
  onClick?: () => void;
  active?: boolean;
  textColor: string;
  children: React.ReactNode;
}

const NavButton: React.FC<NavButtonProps> = (props) => {
  const { onClick, active, textColor, children } = props;

  let style = `flex items-center gap-3 rounded-br-full rounded-tr-full px-6 py-4 font-bold cursor-pointer ${textColor} `;

  if (active) {
    style += "bg-main-purple";
  } else {
    style +=
      "hover:bg-main-purple-hover dark:hover:bg-white dark:hover:bg-opacity-100 hover:bg-opacity-15 hover:text-main-purple";
  }

  return (
    <h3 className={style} onClick={onClick}>
      {children}
    </h3>
  );
};

export default NavButton;
