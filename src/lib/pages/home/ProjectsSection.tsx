import type { Project } from "contentlayer/generated";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";

import Card from "lib/components/projects/Card";
import { EVENT_TYPE_NAVIGATE } from "lib/constants/tracking";
import { trackEvent } from "lib/utils/trackEvent";

export type ProjectsSectionProps = { data: Array<Project> };

const ProjectsSection = ({ data }: ProjectsSectionProps) => {
  const router = useRouter();

  React.useEffect(() => {
    data
      .filter((project) => project.highlight && project)
      .forEach(({ id }) => {
        router.prefetch("/projects/[id]", `/projects/${id}`);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleClickViewAllProjects = React.useCallback(() => {
    trackEvent({
      eventName: "Home: View All Projects",
      eventData: { type: EVENT_TYPE_NAVIGATE },
    });
  }, []);

  return (
    <section className="mb-16 flex flex-col gap-4">
      <Link href="/projects">
        <h2 className="text-3xl font-bold cursor-pointer mb-2">Projects</h2>
      </Link>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 my-8">
        {data.map((project) => (
          <Card project={project} key={project.id} />
        ))}
      </div>

      <div>
        <Link
          href="/projects"
          className="text-lg font-bold hover:underline"
          onClick={handleClickViewAllProjects}
        >
          view all projects
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
