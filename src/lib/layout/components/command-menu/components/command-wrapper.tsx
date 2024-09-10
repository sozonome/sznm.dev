import { Box } from '@chakra-ui/react';
import { Command } from 'cmdk';

import { ModalWrapper } from '~/lib/components/modal-wrapper';

type CommandWrapperProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export const CommandWrapper = ({
  isOpen,
  onClose,
  children,
}: CommandWrapperProps) => {
  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick
      withCloseButton={false}
      modalContentProps={{
        backgroundColor: 'transparent',
        borderRadius: 24,
        layerStyle: 'blur-bg',
        marginX: { base: 6, md: 0 },
      }}
      modalBodyProps={{
        padding: 0,
        fontFamily: 'heading',
        backgroundColor: 'headerAlphaBackground',
        layerStyle: 'blur-bg',
        borderRadius: 24,
      }}
      body={
        <Box as={Command} paddingY={5}>
          {children}
        </Box>
      }
    />
  );
};
