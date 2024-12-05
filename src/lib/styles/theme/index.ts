import { createSystem, defaultConfig } from '@chakra-ui/react';

import { Gabarito as FontBody, Outfit as FontHeading } from 'next/font/google';

const fontHeading = FontHeading({
  subsets: ['latin'],
  variable: '--font-heading',
});

const fontBody = FontBody({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const customTheme = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: fontHeading.style.fontFamily },
        body: { value: fontBody.style.fontFamily },
      },
      colors: {
        orange: {
          // secondary
          600: { value: '#ba4c00' },
          400: { value: '#f47b00' },
          200: { value: '#ffac42' },

          // tertiary
          900: { value: '#5F4A37' },
          700: { value: '#7F6E5F' },
          500: { value: '#9F9287' },
          300: { value: '#BFB7AF' },
        },

        // https://tailcolor.com/palettes/414042
        // colors converter:
        // - https://www.w3schools.com/colors/colors_hexadecimal.asp
        gray: {
          '50': { value: '#ececec' },
          '100': { value: '#d9d9d9' },
          '200': { value: '#b3b3b3' },
          '300': { value: '#8d8c8e' },
          '400': { value: '#676668' },
          '500': { value: '#414042' },
          '600': { value: '#343335' },
          '700': { value: '#272628' },
          '800': { value: '#1a1a1a' },
          '900': { value: '#0d0d0d' },
        },
      },
    },
    semanticTokens: {
      colors: {
        text: {
          default: { value: '{colors.gray.900}' },
          _dark: { value: '{colors.gray.100}' },
        },
        description: { value: '{colors.gray.500}' },
        background: {
          default: { value: '{colors.gray.50}' },
          _dark: { value: '{colors.gray.800}' },
        },
        headerAlphaBackground: {
          // gray.50
          default: { value: 'rgba(236, 236, 236, 0.8)' },
          // gray.800
          _dark: { value: 'rgba(26, 26, 26, 0.8)' },
        },
        tabBarAlphaBackground: {
          // gray.100
          default: { value: 'rgba(217, 217, 217, 0.8)' },
          // gray.700
          _dark: { value: 'rgba(39, 38, 40, 0.8)' },
        },
        elevatedCardBorder: {
          default: { value: '{colors.gray.100}' },
          _dark: { value: '{colors.gray.700}' },
        },
        cardBorder: {
          default: { value: '{colors.gray.200}' },
          _dark: { value: '{colors.gray.500}' },
        },
        cardHoverBorder: {
          default: { value: '{colors.gray.500}' },
          _dark: { value: '{colors.gray.400}' },
        },
        buttonBackground: {
          default: { value: '{colors.gray.100}' },
          _dark: { value: '{colors.gray.500}' },
        },
        selectedCommandItemBackground: {
          default: { value: '{colors.gray.300}' },
          _dark: { value: '{colors.gray.400}' },
        },
      },
    },
    layerStyles: {
      layoutBlock: {
        marginX: 'auto',
        width: 'full',
        maxWidth: {
          base: '100vw',
          md: '85vw',
          lg: '800px',
        },
        paddingY: 4,
        paddingX: {
          base: 6,
          md: 2,
          lg: 0,
        },
      },
      glow: {
        filter: 'drop-shadow(0 0 12px #454a58)',
      },
      'blur-bg': {
        // https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#browser_compatibility
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
      },
    },
  },
  globalCss: {
    /**
     * custom scrollbar
     * https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar#browser_compatibility
     */
    body: {
      overflowY: 'scroll',
    },
    '::-webkit-scrollbar': {
      width: '0.75rem',
      height: '0.75rem',
      backgroundColor: 'black',
    },
    '::-webkit-scrollbar-thumb': {
      borderRadius: 'full',
      backgroundColor: 'gray.700',
      '&:hover': {
        backgroundColor: 'gray.600',
      },
    },
    /**
     * firefox scrollbar
     * https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scrollbars#browser_compatibility
     */
    html: {
      scrollbarWidth: 'thin',
      scrollbarColor: '#2D3748 black',
    },
  },
});

export default customTheme;
