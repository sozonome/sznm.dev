import {
  Box,
  Flex,
  Icon,
  Image,
  Link,
  Skeleton,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { FaSpotify } from "react-icons/fa";

import { useNowPlayingData } from "lib/services/spotify/user/now-playing";

const SpotifyListening = () => {
  const { data, isLoading } = useNowPlayingData();

  if (isLoading) {
    return <Skeleton maxWidth={300} height={20} borderRadius={12} />;
  }

  if (!data || !data?.isPlaying) {
    return null;
  }

  return (
    <Tooltip label="Song I'm currently listening to">
      <Flex
        as={Link}
        href={data.trackUrl}
        target="_blank"
        borderRadius={12}
        maxWidth={300}
        marginX="auto"
        alignItems="center"
        gridGap={2}
        height={20}
        fontFamily="heading"
      >
        <Icon as={FaSpotify} color="green.400" fontSize="2xl" />
        <Image src={data.albumArtUrl} width={16} borderRadius={8} />
        <Box>
          <Text fontWeight="extrabold" fontSize="sm">
            {data.trackTitle}
          </Text>
          <Text fontSize="xs" color="gray.500">
            {data.artist}
          </Text>
        </Box>
      </Flex>
    </Tooltip>
  );
};

export default SpotifyListening;
