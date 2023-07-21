import {
  Box,
  Flex,
  Icon,
  Image,
  Link,
  Skeleton,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import { FaSpotify } from 'react-icons/fa';

import { useNowPlayingData } from '~/lib/services/spotify/user/now-playing/hooks';

const SpotifyListening = () => {
  const { data, isLoading } = useNowPlayingData();

  if (isLoading) {
    return <Skeleton maxWidth={300} height={20} borderRadius={12} />;
  }

  return (
    <Tooltip
      label="Song I'm currently listening to"
      isDisabled={!data?.isPlaying}
    >
      <Flex
        as={data?.trackUrl ? Link : undefined}
        href={data?.trackUrl}
        aria-label={
          data?.trackUrl
            ? `Listen to ${data?.trackTitle} by ${data?.artist}`
            : undefined
        }
        target="_blank"
        borderRadius={12}
        maxWidth={300}
        alignItems="center"
        gridGap={2}
        height={20}
        fontFamily="heading"
      >
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
      </Flex>
    </Tooltip>
  );
};

export default SpotifyListening;
