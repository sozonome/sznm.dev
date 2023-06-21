import type { splitProjectByTypes } from '~/lib/utils/projects';

export type OtherProjectsProps = {
  categorizedProjects: ReturnType<typeof splitProjectByTypes>;
};
