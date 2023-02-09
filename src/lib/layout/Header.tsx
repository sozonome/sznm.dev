import { Box, Flex, Heading, IconButton, Spacer } from '@chakra-ui/react';
import Link from 'next/link';
import * as React from 'react';
import { RiCommandFill } from 'react-icons/ri';

import CommandMenu from '~/lib/components/commands';
import { EVENT_TYPE_CTA } from '~/lib/constants/tracking';
import { useCmdMenu } from '~/lib/store/cmd';
import { trackEvent } from '~/lib/utils/trackEvent';

import Navigation from './Navigation';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const { openCmdMenu } = useCmdMenu((state) => ({
    openCmdMenu: state.openCmdMenu,
  }));

  const handleOpenCommandCenter = React.useCallback(() => {
    trackEvent({
      eventName: 'open cmd center',
      eventData: { type: EVENT_TYPE_CTA },
    });
    openCmdMenu();
  }, [openCmdMenu]);

  return (
    <>
      <Box
        as="header"
        position="fixed"
        top={0}
        zIndex={5}
        backgroundColor="headerAlphaBackground"
        layerStyle="blur-bg"
        width="full"
      >
        <Flex layerStyle="layoutBlock" alignItems="center">
          <Link href="/">
            <Heading size="md" fontWeight="medium" fontSize={['md', 'xl']}>
              sznm.dev
            </Heading>
          </Link>

          <Spacer />

          <Flex alignItems="center" gap={4}>
            <Flex display={['none', 'flex']}>
              <Navigation />
            </Flex>

            <Flex gap={2}>
              <IconButton
                aria-label="command-center"
                icon={<RiCommandFill />}
                backgroundColor="transparent"
                onClick={handleOpenCommandCenter}
              />
              <ThemeToggle />
            </Flex>
          </Flex>
        </Flex>
      </Box>

      <CommandMenu />
    </>
  );
};

export default Header;
