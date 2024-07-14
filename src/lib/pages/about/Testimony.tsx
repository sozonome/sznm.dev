'use client';

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  IconButton,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaLinkedin } from 'react-icons/fa';

import type { Testimony } from 'content-collections';
import MotionBox from '~/lib/components/motion/MotionBox';
import MotionGrid from '~/lib/components/motion/MotionGrid';
import {
  staggerAnimationProps,
  wrapperAnimationProps,
} from '~/lib/constants/animation';

type TestimonyProps = {
  testimonies: Array<Testimony>;
};

const TestimonySection = ({ testimonies }: TestimonyProps) => {
  const textColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <MotionBox {...wrapperAnimationProps}>
      <Accordion allowToggle paddingY={4} color={textColor}>
        <AccordionItem border="none">
          <h3>
            <AccordionButton paddingX={0}>
              <Box as="span" flex={1} textAlign="left">
                <Heading size="sm">Some Testimonies</Heading>
                <Text fontSize="xs">
                  Wanna know what my peers said about me?
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h3>
          <AccordionPanel paddingX={0}>
            <MotionGrid
              {...staggerAnimationProps}
              gap={6}
              gridTemplateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
            >
              {testimonies.map((testimony) => (
                <Box
                  borderWidth={2}
                  borderRadius={24}
                  borderColor="cardBorder"
                  transition="0.2s ease-out"
                  _hover={{
                    shadow: 'lg',
                    borderColor: 'cardHoverBorder',
                    borderWidth: 2,
                  }}
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  gap={4}
                  padding={6}
                  key={testimony.id}
                >
                  <Text fontSize="sm">{testimony.content}</Text>

                  <Flex gap={2} alignItems="center">
                    <Box>
                      <Heading size="xs">{testimony.name}</Heading>
                      <Text fontSize="xs">{testimony.title}</Text>
                    </Box>
                    {testimony.linkedin ? (
                      <IconButton
                        as="a"
                        variant="ghost"
                        size="sm"
                        color={textColor}
                        aria-label="linkedin"
                        icon={<FaLinkedin />}
                        href={testimony.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    ) : null}
                  </Flex>
                </Box>
              ))}
            </MotionGrid>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </MotionBox>
  );
};

export default TestimonySection;
