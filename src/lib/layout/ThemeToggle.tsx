import {
  IconButton,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { RiMoonFill, RiSunFill } from "react-icons/ri";

import { EVENT_TYPE_CTA } from "lib/constants/tracking";
import { trackEvent } from "lib/utils/trackEvent";

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const toggleIcon = useColorModeValue(<RiMoonFill />, <RiSunFill />);

  const handleClickToggle = () => {
    trackEvent({
      eventName: `toggle theme to ${colorMode === "light" ? "dark" : "light"}`,
      eventData: { type: EVENT_TYPE_CTA },
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
