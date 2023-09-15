import type { DeepPartial, SemanticValue, ThemeScale } from '@chakra-ui/react';

type TokenValue = string | number | SemanticValue<string>;

type ThemeTokenValues = Record<string, TokenValue>;

type SemanticTokenType = DeepPartial<Record<ThemeScale, ThemeTokenValues>>;

export const semanticTokens: SemanticTokenType = {
  colors: {
    text: {
      default: 'gray.900',
      _dark: 'gray.200',
    },
    description: 'gray.500',
    background: {
      default: 'gray.50',
      _dark: 'gray.800',
    },
    headerAlphaBackground: {
      // gray.50 0.8
      default: 'rgba(249, 250, 250, 0.8)',
      // gray.800 0.8
      _dark: 'rgba(26, 32, 42, 0.8)',
    },
    tabBarAlphaBackground: {
      default: 'rgba(209, 210, 210, 0.8)',
      _dark: 'rgba(14, 19, 18, 0.8)',
    },
    elevatedCardBorder: {
      default: 'gray.100',
      _dark: 'gray.700',
    },
    cardBorder: {
      default: 'gray.300',
      _dark: 'gray.700',
    },
    cardHoverBorder: {
      default: 'gray.600',
      _dark: 'gray.600',
    },
    buttonBackground: {
      default: 'gray.100',
      _dark: 'gray.500',
    },
    selectedCommandItemBackground: {
      default: 'gray.400',
      _dark: 'gray.600',
    },
  },
};
