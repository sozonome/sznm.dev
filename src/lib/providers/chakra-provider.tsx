import {
  ColorModeScript,
  ChakraProvider as DefaultChakraProvider,
  cookieStorageManager,
  createStandaloneToast,
} from '@chakra-ui/react';

import customTheme from '~/lib/styles/theme';

interface ChakraProps {
  children: React.ReactNode;
}

const { ToastContainer } = createStandaloneToast({ theme: customTheme });

export const ChakraProvider = ({ children }: ChakraProps) => {
  return (
    <>
      <ColorModeScript
        initialColorMode={customTheme.config?.initialColorMode}
        type="cookie"
      />
      <DefaultChakraProvider
        colorModeManager={cookieStorageManager}
        theme={customTheme}
      >
        {children}
      </DefaultChakraProvider>

      <ToastContainer />
    </>
  );
};
