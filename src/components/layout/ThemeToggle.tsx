import {
  Box,
  IconButton,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { RiMoonFill, RiSunFill } from "react-icons/ri";

const ThemeToggle = () => {
  const { toggleColorMode } = useColorMode();

  const toggleIcon = useColorModeValue(<RiMoonFill />, <RiSunFill />);

  return (
    <Box>
      <Tooltip label="theme toggle">
        <IconButton
          aria-label="toggle theme mode"
          icon={toggleIcon}
          onClick={toggleColorMode}
          backgroundColor="transparent"
        />
      </Tooltip>
    </Box>
  );
};

export default ThemeToggle;
