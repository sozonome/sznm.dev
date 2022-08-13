import type {
  ModalBodyProps,
  ModalContentProps,
  ModalProps,
} from "@chakra-ui/react";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import type * as React from "react";

export type ModalWrapperProps = Pick<
  ModalProps,
  "isOpen" | "onClose" | "size" | "closeOnOverlayClick"
> & {
  header?: React.ReactNode;
  withCloseButton?: boolean;
  body?: React.ReactNode;
  footer?: React.ReactNode;
  modalContentProps?: ModalContentProps;
  modalBodyProps?: ModalBodyProps;
};

const ModalWrapper = ({
  isOpen,
  size = "2xl",
  header,
  withCloseButton = true,
  body,
  footer,
  closeOnOverlayClick = false,
  onClose,
  modalContentProps,
  modalBodyProps,
}: ModalWrapperProps) => {
  return (
    <Modal
      size={size}
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick={closeOnOverlayClick}
      isCentered
    >
      <ModalOverlay />

      <ModalContent borderRadius={8} {...modalContentProps}>
        {header && (
          <ModalHeader fontWeight="black" fontSize={{ base: "2xl", lg: "3xl" }}>
            {header}
          </ModalHeader>
        )}
        {withCloseButton && <ModalCloseButton />}

        {body && <ModalBody {...modalBodyProps}>{body}</ModalBody>}

        {footer && <ModalFooter gridGap={2}>{footer}</ModalFooter>}
      </ModalContent>
    </Modal>
  );
};

export default ModalWrapper;
