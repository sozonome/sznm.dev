import { Box, Link, Text, Stack, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import * as React from 'react';

import type { Project } from 'contentlayer/generated';
import { EVENT_TYPE_LINK } from '~/lib/constants/tracking';
import { trackEvent } from '~/lib/utils/trackEvent';

type CardProps = {
  project: Project;
};

const Card = ({
  project: {
    title,
    icon,
    thumbnail,
    thumbnailDark,
    projectLink,
    playStoreLink,
    repoLink,
  },
}: CardProps) => {
  const dynamicThumbnail = useColorModeValue(
    thumbnail,
    thumbnailDark || thumbnail
  );
  const borderHighlight = useColorModeValue('gray', 'white');
  const thumbnailUrl = thumbnail ? dynamicThumbnail : null;

  const overlayBgGradient = useColorModeValue(
    'linear(to-t, rgba(45, 55, 72, 0.6) 0%, rgba(203, 213, 224, 0.4) 80%, rgba(237, 242, 247, 0))',
    'linear(to-t, rgba(0, 0, 0, 0.5) 0%, rgba(237, 242, 247, 0))'
  );

  const link = playStoreLink ?? projectLink ?? repoLink;

  const handleClickProject = React.useCallback(() => {
    trackEvent({
      eventName: `Project Card: open ${title} | ${link}`,
      eventData: { type: EVENT_TYPE_LINK },
    });
  }, [link, title]);

  return (
    <Link
      href={link}
      aria-label={`Link to ${title}`}
      isExternal
      onClick={handleClickProject}
      _hover={{
        textDecoration: 'none',
      }}
      role="group"
    >
      <Box
        borderColor="elevatedCardBorder"
        borderWidth={2}
        boxShadow="0px 0px 32px 2px rgba(38, 46, 51, 0.1);"
        borderRadius={20}
        cursor="pointer"
        alignItems="center"
        overflow="hidden"
        justifyContent="center"
        position="relative"
        transition="0.2s ease-out"
        _hover={{
          shadow: 'xl',
          borderColor: borderHighlight,
        }}
      >
        {thumbnailUrl && (
          <Box
            height={[200, 250, 200]}
            sx={{
              img: {
                transition: '0.2s cubic-bezier(0.15, 0.0, 0.85, 1.0)',
                filter: 'blur(0.25rem)',
              },
            }}
            _groupHover={{
              img: {
                transform: 'scale(1.05)',
                filter: 'blur(0)',
              },
            }}
          >
            <Image
              width={1000}
              height={200}
              style={{
                objectFit: 'cover',
                objectPosition: '50% 0',
              }}
              src={thumbnailUrl}
              alt={`${title}-thumbnail`}
            />
          </Box>
        )}

        <Stack
          position="absolute"
          justifyContent="flex-end"
          bottom={0}
          padding={6}
          height="full"
          spacing={4}
          zIndex={20}
          width="full"
          bgGradient={overlayBgGradient}
        >
          <Stack direction="row" alignItems="center">
            {icon && <Image src={icon} width={32} height={32} alt={title} />}
            <Text
              fontWeight="bold"
              fontSize="lg"
              fontFamily="heading"
              textShadow="md"
              color="white"
            >
              {title}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Link>
  );
};

export default Card;
