import { Box } from "@chakra-ui/react";
import { Command } from "cmdk";

type CommandListProps = {
  children: React.ReactNode;
};

const CommandList = ({ children }: CommandListProps) => {
  return (
    <Box
      as={Command.List}
      paddingX={2}
      height={400}
      overflow="auto"
      overscrollBehavior="contain"
      transition="100ms ease"
      paddingBottom={12}
      sx={{
        scrollPaddingBlockEnd: 12,
        "[cmdk-list-sizer]": { display: "grid", gap: 6 },
      }}
    >
      {children}
    </Box>
  );
};

export default CommandList;
