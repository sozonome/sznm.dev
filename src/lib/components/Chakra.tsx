import {
  createStandaloneToast,
  ChakraProvider,
  cookieStorageManager,
  ColorModeScript,
} from '@chakra-ui/react';

import customTheme from '~/lib/styles/theme';

interface ChakraProps {
  children: React.ReactNode;
}

const { ToastContainer } = createStandaloneToast({ theme: customTheme });

export const Chakra = ({ children }: ChakraProps) => {
  return (
    <>
      <ColorModeScript
        initialColorMode={customTheme.config?.initialColorMode}
        type="cookie"
      />
      <ChakraProvider
        colorModeManager={cookieStorageManager}
        theme={customTheme}
      >
        {children}
      </ChakraProvider>

      <ToastContainer />
    </>
  );
};
