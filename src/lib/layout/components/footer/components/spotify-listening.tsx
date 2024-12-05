import { Box, Flex, Icon, Image, Link, Skeleton, Text } from '@chakra-ui/react';
import { FaSpotify } from 'react-icons/fa';
import { Tooltip } from '~/lib/components/ui/tooltip';

import { useNowPlayingData } from '~/lib/services/spotify/user/now-playing/hooks';

export const SpotifyListening = () => {
  const { data, isLoading } = useNowPlayingData();

  if (isLoading) {
    return <Skeleton maxWidth={300} height={20} borderRadius={12} />;
  }

  return (
    <Tooltip
      content="Song I'm currently listening to"
      disabled={!data?.isPlaying}
    >
      <Flex
        asChild
        aria-label={
          data?.trackUrl
            ? `Listen to ${data?.trackTitle} by ${data?.artist}`
            : undefined
        }
        borderRadius={12}
        maxWidth={300}
        alignItems="center"
        gridGap={2}
        height={20}
        fontFamily="heading"
      >
        <Link href={data?.trackUrl} target="_blank">
          <Icon as={FaSpotify} color="green.400" fontSize="2xl" />
          {data?.albumArtUrl && (
            <Image
              src={data.albumArtUrl}
              width={16}
              borderRadius={8}
              alt={data.trackTitle}
            />
          )}
          <Box>
            <Text fontWeight="bold" fontSize="sm">
              {data?.trackTitle ?? 'Not Playing'}
            </Text>
            {data?.artist && <Text fontSize="xs">{data.artist}</Text>}
          </Box>
        </Link>
      </Flex>
    </Tooltip>
  );
};
