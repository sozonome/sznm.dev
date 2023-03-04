import type { DeepPartial, SemanticValue, ThemeScale } from '@chakra-ui/react';

export type TokenValue = string | number | SemanticValue<string>;

export type ThemeTokenValues = Record<string, TokenValue>;

export type SemanticTokenType = DeepPartial<
  Record<ThemeScale, ThemeTokenValues>
>;

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
      default: 'rgba(232, 233, 233, 0.8)',
      _dark: 'rgba(10, 12, 12, 0.8)',
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
      _dark: 'gray.500',
    },
  },
};
