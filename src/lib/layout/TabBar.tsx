import { Box, Flex } from '@chakra-ui/react';

import Navigation from './Navigation';

const TabBar = () => {
  return (
    <Box position="fixed" bottom={22} zIndex={10} layerStyle="layoutBlock">
      <Flex
        layerStyle="blur-bg"
        display={{ base: 'flex', sm: 'none' }}
        height={{ base: '4.5rem', sm: '8rem' }}
        borderRadius={20}
        backgroundColor="tabBarAlphaBackground"
        padding={22}
        textAlign="center"
        alignItems="center"
        fontSize={[35, 50]}
      >
        <Navigation />
      </Flex>
    </Box>
  );
};

export default TabBar;
