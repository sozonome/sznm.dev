import type { ComponentStyleConfig } from '@chakra-ui/react';

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: '1rem',
    _hover: {
      borderColor: 'gray',
      borderWidth: 2,
      shadow: 'sm',
    },
  },
  variants: {
    outline: {
      borderWidth: 2,
    },
  },
};
