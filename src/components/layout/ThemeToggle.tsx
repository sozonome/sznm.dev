import { Box, IconButton, useColorMode } from "@chakra-ui/react";
import { BsMoon } from "react-icons/bs";
import { FiSun } from "react-icons/fi";

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <IconButton
        aria-label="toggle theme mode"
        icon={colorMode === "light" ? <BsMoon /> : <FiSun />}
        onClick={toggleColorMode}
      />
    </Box>
  );
};

export default ThemeToggle;
