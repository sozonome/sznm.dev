import { Link } from "@chakra-ui/react";

import { trackEvent } from "lib/utils/trackEvent";

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
    trackEvent({
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
        _hover={{
          textDecoration: "none",
        }}
      >
        <ProjectDetailContent projectData={projectData} />
      </Link>
    );
  }

  return <ProjectDetailContent projectData={projectData} />;
};

export default ProjectDetailWrapper;
