import {
  Box,
  Heading,
  Button,
  useColorModeValue,
  Grid,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";

import Card from "components/projects/Card";
import { ProjectType } from "models/project";

export type ProjectsSectionProps = { data: Array<ProjectType> };

const ProjectsSection = ({ data }: ProjectsSectionProps) => {
  const router = useRouter();

  const buttonBackgroundColor = useColorModeValue("gray.100", "gray.700");

  React.useEffect(() => {
    data
      .filter((project) => project.highlight && project)
      .forEach(({ id }) => {
        router.prefetch("/projects/[id]", `/projects/${id}`);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <Box as="section" marginBottom={16}>
      <Box>
        <Box>
          <Link href="/projects" passHref>
            <Heading as="h1" size="xl" cursor="pointer" marginBottom={2}>
              Projects
            </Heading>
          </Link>
        </Box>

        <Grid
          gap={8}
          templateColumns={["repeat(1)", "repeat(1)", "repeat(2, 1fr)"]}
          marginY={8}
        >
          {data
            .filter(
              (unfilteredProject) =>
                unfilteredProject.highlight && unfilteredProject
            )
            .map((project) => (
              <Card project={project} key={project.id} />
            ))}
        </Grid>

        <Link href="/projects" passHref>
          <Button
            width="100%"
            borderRadius={20}
            height={55}
            backgroundColor={buttonBackgroundColor}
            _hover={{
              backgroundColor: "gray.300",
              color: "black",
            }}
            fontFamily="Catamaran, sans-serif"
          >
            see more
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default ProjectsSection;
