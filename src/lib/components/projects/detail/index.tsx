import { Link } from "@chakra-ui/react";

import { trackEventToUmami } from "lib/utils/trackEvent";

import ProjectDetailContent from "./Content";
import type { ProjectDetailWrapperProps } from "./types";

const ProjectDetailWrapper = ({
  projectData,
  source,
}: ProjectDetailWrapperProps) => {
  const link =
    projectData.playStoreLink ??
    projectData.projectLink ??
    projectData.repoLink;

  const handleClickProject = () => {
    trackEventToUmami({
      eventValue: `${source}: Open ${projectData.title} | ${link}`,
      eventType: "link",
    });
  };

  if (link) {
    return (
      <Link
        href={link}
        isExternal
        onClick={handleClickProject}
        key={projectData.id}
        _hover={{
          textDecoration: "none",
        }}
      >
        <ProjectDetailContent projectData={projectData} />
      </Link>
    );
  }

  return (
    <ProjectDetailContent projectData={projectData} key={projectData.id} />
  );
};

export default ProjectDetailWrapper;
