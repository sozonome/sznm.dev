import { Box, Flex, Heading, IconButton, Spacer } from '@chakra-ui/react';
import Link from 'next/link';
import * as React from 'react';
import { RiCommandFill } from 'react-icons/ri';

import { EVENT_TYPE_CTA } from '~/lib/constants/tracking';
import { useCmdMenuAction } from '~/lib/store/cmd';
import { trackEvent } from '~/lib/utils/track-event';

import { CommandMenu } from './command-menu';
import { Navigation } from './navigation';
import { ThemeToggle } from './theme-toggle';

export const Header = () => {
  const { openCmdMenu } = useCmdMenuAction();

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
              agustinusnathaniel.com
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
                color="unset"
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
