import { Switch } from "@mui/material";
import { FiSun, FiMoon } from "react-icons/fi";
import { styled } from "@mui/material/styles";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 36,
  height: 20,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(16px)",
    },
  },
  "&:hover, &.Mui-focusVisible": {
    "& .MuiSwitch-track": {
      backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#A8A4FF",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#635FC7",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 16,
    height: 16,
    borderRadius: 12,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 32 / 2,
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#635FC7",
    boxSizing: "border-box",
  },
}));

const LightSwitch: React.FC = () => {
  return (
    <div className="flex items-center justify-center gap-6 rounded bg-light-gray py-4">
      <FiSun className="text-xl text-medium-gray" />
      <form>
        <label htmlFor="light"></label>
        <AntSwitch id="light" />
      </form>
      <FiMoon className="text-xl text-medium-gray" />
    </div>
  );
};

export default LightSwitch;
