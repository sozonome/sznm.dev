import {
  Box,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsMoon } from "react-icons/bs";
import { FiSun } from "react-icons/fi";

const ThemeToggle = () => {
  const { toggleColorMode } = useColorMode();

  const toggleIcon = useColorModeValue(<BsMoon />, <FiSun />);
  const buttonColor = useColorModeValue("gray.400", "gray.900");

  return (
    <Box>
      <IconButton
        aria-label="toggle theme mode"
        icon={toggleIcon}
        onClick={toggleColorMode}
        backgroundColor={buttonColor}
      />
    </Box>
  );
};

export default ThemeToggle;
