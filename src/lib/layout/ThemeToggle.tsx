import {
  IconButton,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { RiMoonFill, RiSunFill } from "react-icons/ri";

import { trackEvent } from "lib/utils/trackEvent";

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const toggleIcon = useColorModeValue(<RiMoonFill />, <RiSunFill />);

  const handleClickToggle = () => {
    trackEvent({
      eventValue: `toggle theme to ${colorMode === "light" ? "dark" : "light"}`,
      eventType: "cta",
    });
    toggleColorMode();
  };

  return (
    <Tooltip label="theme toggle">
      <IconButton
        aria-label="toggle theme mode"
        icon={toggleIcon}
        onClick={handleClickToggle}
        backgroundColor="transparent"
      />
    </Tooltip>
  );
};

export default ThemeToggle;
