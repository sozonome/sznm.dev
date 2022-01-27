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
    trackEventToUmami(`${source}: Open ${projectData.title} | ${link}`, "link");
  };

  if (link) {
    return (
      <Link
        href={link}
        isExternal
        onClick={handleClickProject}
        key={projectData.id}
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
