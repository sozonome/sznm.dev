import {
  Box,
  Button,
  Heading,
  Text,
  Link as ChakraLink,
  Image,
} from '@chakra-ui/react';
import Link from 'next/link';

import MotionBox from '~/lib/components/motion/MotionBox';

const Page404 = () => {
  return (
    <Box>
      <MotionBox
        width={['100%', '70%', '60%', '60%']}
        margin="0 auto"
        animate={{ y: 20 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: 'reverse' }}
      >
        <Image src="/404 Error-rafiki.svg" alt="Error404" />
      </MotionBox>
      <Text textAlign="center" fontSize="xs">
        <ChakraLink href="https://stories.freepik.com/web" isExternal>
          Illustration by Freepik Stories
        </ChakraLink>
      </Text>

      <Box marginY={4}>
        <Heading textAlign="center" fontSize="3xl" marginBottom={2}>
          Seems like you&apos;re lost.
        </Heading>

        <Box textAlign="center">
          <Button as={Link} href="/" backgroundColor="buttonBackground">
            Let&apos;s Head Back
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Page404;
