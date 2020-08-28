import { Flex, Box } from "@chakra-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faRocket,
  faEnvelope,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

const TabBar = () => {
  const router = useRouter();

  return (
    <Flex
      marginX={["5vw", "5vw", 0]}
      position="fixed"
      width={["90vw", "90vw", 800]}
      height={[96, 128]}
      bottom={22}
      borderRadius={20}
      boxShadow="0px 0px 32px 2px rgba(38, 46, 51, 0.1);"
      backgroundColor="white"
      padding={22}
      color="blue.900"
      textAlign="center"
      alignItems="center"
      fontSize={[35, 50]}
    >
      <Box flexBasis={"25%"}>
        <FontAwesomeIcon
          icon={faHome}
          style={{ cursor: "pointer" }}
          onClick={() => router.push("/")}
        />
      </Box>
      <Box flexBasis={"25%"}>
        <FontAwesomeIcon
          icon={faRocket}
          style={{ cursor: "pointer" }}
          onClick={() => router.push("/projects")}
        />
      </Box>
      <Box flexBasis={"25%"}>
        <FontAwesomeIcon
          icon={faEnvelope}
          style={{ cursor: "pointer" }}
          onClick={() => router.push("mailto:hello@sznm.dev")}
        />
      </Box>
      <Box flexBasis={"25%"}>
        <FontAwesomeIcon
          icon={faUser}
          style={{ cursor: "pointer" }}
          onClick={() => router.push("/")}
        />
      </Box>
    </Flex>
  );
};

export default TabBar;
