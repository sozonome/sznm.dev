import {
  Heading,
  Flex,
  Box,
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Image,
} from "@chakra-ui/core";

import { getSortedProjectsData } from "../../lib/projects";
import Card from "../../components/Card";
import { useState } from "react";
import Link from "next/link";
import Head from "next/head";

const Projects = ({ allProjectsData }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProject, setSelectedProject] = useState({
    id: "",
    title: "",
    thumbnail: "",
    projectLink: "",
  });

  return (
    <>
      <Head>
        <title>Projects | sznm.dev</title>
      </Head>
      <Box marginBottom={22}>
        <Heading as="h1" size="2xl">
          Projects
        </Heading>
        <Heading as="h2" size="lg" fontWeight="normal">
          Some projects I worked on previously.
        </Heading>
      </Box>
      <Flex wrap="wrap">
        {allProjectsData.map(
          (
            { id, title, thumbnail, projectLink, playStoreLink, repoLink },
            index
          ) => (
            <Card
              title={title}
              handleClick={() => {
                setSelectedProject({
                  id,
                  title,
                  thumbnail,
                  projectLink: projectLink
                    ? projectLink
                    : playStoreLink
                    ? playStoreLink
                    : repoLink,
                });
                onOpen();
              }}
              img={thumbnail}
              key={index}
            />
          )
        )}
      </Flex>
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
            <Link
              href={"/projects/[id]"}
              as={`/projects/${selectedProject.id}`}
            >
              <Button width={"100%"}>More</Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export const getStaticProps = async () => {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
};

export default Projects;
