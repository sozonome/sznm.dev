import type { HTMLChakraProps } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import type { FC } from 'react';

import type { Merge } from '~/lib/types/merge';

type MotionFlexProps = Merge<HTMLChakraProps<'div'>, HTMLMotionProps<'div'>>;

const MotionFlex: FC<MotionFlexProps> = motion(Flex);

export default MotionFlex;
