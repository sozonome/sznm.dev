import { Button, Grid, Tooltip } from "@chakra-ui/react";
import Link from "next/link";

import { EVENT_TYPE_LINK, EVENT_TYPE_NAVIGATE } from "lib/constants/tracking";
import { trackEvent } from "lib/utils/trackEvent";

const ProjectListBottomNav = () => {
  const handleClickOtherProjects = () => {
    trackEvent({
      eventName: "Featured Projects: Click Other Projects",
      eventData: { type: EVENT_TYPE_NAVIGATE },
    });
  };

  const handleClickPortfolioPage = () => {
    trackEvent({
      eventName: "Featured Projects: Click See More detailed Porfolio",
      eventData: { type: EVENT_TYPE_LINK },
    });
  };

  return (
    <Grid gap={2} templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]}>
      <Button
        as={Link}
        href="/projects/other"
        variant="outline"
        onClick={handleClickOtherProjects}
        width="full"
      >
        Other Projects
      </Button>

      <Tooltip
        label="to view the detailed portfolio page, you must ask for the password through contacting me first, as I build the portfolio page for the one who really have interest to work with me"
        aria-label="portfolio view tooltip"
      >
        <Button
          as="a"
          href="https://prtfl.sznm.dev"
          target="_blank"
          width="full"
          onClick={handleClickPortfolioPage}
        >
          see more detailed portfolio
        </Button>
      </Tooltip>
    </Grid>
  );
};

export default ProjectListBottomNav;
