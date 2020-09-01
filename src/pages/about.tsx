/**
 * @todo
 * [ ] add about content
 */

import { Heading, Text, Flex, Link } from "@chakra-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  return (
    <>
      <Heading>sozonome</Heading>
      <Text>1.01 ^365 = 37.7</Text>
      <Flex fontSize="4xl">
        <Link href={`https://github.com/sozonome`} marginRight={11} isExternal>
          <FontAwesomeIcon icon={["fab", "github"]} />
        </Link>
        <Link href={`https://twitter.com/sozonome`} marginRight={11} isExternal>
          <FontAwesomeIcon icon={["fab", "twitter"]} />
        </Link>
        <Link
          href={`https://www.instagram.com/sozonome`}
          marginRight={11}
          isExternal
        >
          <FontAwesomeIcon icon={["fab", "instagram"]} />
        </Link>
        <Link
          href={`https://youtube.com/channel/UCJnYMGIHtQ8yInuq4Pc2Ttg`}
          isExternal
        >
          <FontAwesomeIcon icon={["fab", "youtube"]} />
        </Link>
      </Flex>
    </>
  );
};

export default About;
