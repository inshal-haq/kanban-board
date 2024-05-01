import { Switch } from "@chakra-ui/react";
import { FiSun, FiMoon } from "react-icons/fi";

const LightSwitch: React.FC = () => {
  return (
    <div className="flex items-center justify-center gap-6 rounded bg-light-gray py-4">
      <FiSun className="text-xl text-medium-gray" />
      <form>
        <label htmlFor="light"></label>
        <Switch id="light" />
      </form>
      <FiMoon className="text-xl text-medium-gray" />
    </div>
  );
};

export default LightSwitch;
