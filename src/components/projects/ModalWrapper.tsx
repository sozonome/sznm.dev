import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Image,
  Heading,
  ModalCloseButton,
  ModalBody,
  Button,
  ModalFooter,
} from "@chakra-ui/core";
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
          <Image
            src={selectedProject.thumbnail}
            size={44}
            marginRight={11}
            alt={selectedProject.title}
          />
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
