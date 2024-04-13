import { Button, Flex, Grid, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <Grid height="70vh" alignItems="center">
      <Flex
        flexDirection="column"
        verticalAlign="center"
        gap={2}
        width={['100%', '80%', '60%']}
        marginTop={[8, 0]}
        alignSelf={['none', 'center']}
      >
        <Heading as="h1" size="xl">
          Hello! I&apos;m Nathan.
        </Heading>
        <Text fontSize={{ base: 'md', md: 'xl' }}>
          Driving Business Growth with User-Centric Products.
        </Text>
        <Flex alignItems="center" gap={2}>
          <Button as={Link} href="/projects">
            Projects
          </Button>
          <Button as={Link} href="/about">
            About Me
          </Button>
        </Flex>
      </Flex>
    </Grid>
  );
};

export default HeroSection;
