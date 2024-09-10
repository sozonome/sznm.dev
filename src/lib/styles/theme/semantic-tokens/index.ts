import type { DeepPartial, SemanticValue, ThemeScale } from '@chakra-ui/react';

type TokenValue = string | number | SemanticValue<string>;

type ThemeTokenValues = Record<string, TokenValue>;

type SemanticTokenType = DeepPartial<Record<ThemeScale, ThemeTokenValues>>;

export const semanticTokens: SemanticTokenType = {
  colors: {
    text: {
      default: 'gray.900',
      _dark: 'gray.100',
    },
    description: 'gray.500',
    background: {
      default: 'gray.50',
      _dark: 'gray.800',
    },
    headerAlphaBackground: {
      // gray.50
      default: 'rgba(236, 236, 236, 0.8)',
      // gray.800
      _dark: 'rgba(26, 26, 26, 0.8)',
    },
    tabBarAlphaBackground: {
      // gray.100
      default: 'rgba(217, 217, 217, 0.8)',
      // gray.700
      _dark: 'rgba(39, 38, 40, 0.8)',
    },
    elevatedCardBorder: {
      default: 'gray.100',
      _dark: 'gray.700',
    },
    cardBorder: {
      default: 'gray.200',
      _dark: 'gray.500',
    },
    cardHoverBorder: {
      default: 'gray.500',
      _dark: 'gray.400',
    },
    buttonBackground: {
      default: 'gray.100',
      _dark: 'gray.500',
    },
    selectedCommandItemBackground: {
      default: 'gray.300',
      _dark: 'gray.400',
    },
  },
};
