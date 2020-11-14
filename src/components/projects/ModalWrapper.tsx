import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Heading,
  ModalCloseButton,
  ModalBody,
  Button,
  ModalFooter,
  Box,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const ModalWrapper = ({ isOpen, onClose, selectedProject }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} closeOnEsc isCentered>
      <ModalOverlay />
      <ModalContent
        backgroundColor="teal.300"
        borderRadius={20}
        marginX={[22, 0]}
      >
        <ModalHeader display="flex" alignItems="center" marginY={22}>
          <Box marginRight={11}>
            <Image
              src={selectedProject.thumbnail}
              width={44}
              height={44}
              alt={selectedProject.title}
            />
          </Box>
          <Heading as="h3">{selectedProject.title}</Heading>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Link href={selectedProject.projectLink}>
            <Button width={"100%"} backgroundColor="orange.400" color="white">
              Visit
            </Button>
          </Link>
        </ModalBody>
        <ModalFooter>
          <Link href={"/projects/[id]"} as={`/projects/${selectedProject.id}`}>
            <Button width={"100%"}>More</Button>
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalWrapper;
