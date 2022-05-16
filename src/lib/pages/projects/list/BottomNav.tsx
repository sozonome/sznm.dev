import { Button, Grid, Tooltip } from "@chakra-ui/react";
import Link from "next/link";

import { trackEventToUmami } from "lib/utils/trackEvent";

const ProjectListBottomNav = () => {
  const handleClickOtherProjects = () => {
    trackEventToUmami({
      eventValue: "Featured Projects: Click Other Projects",
      eventType: "navigate",
    });
  };

  const handleClickPortfolioPage = () => {
    trackEventToUmami({
      eventValue: "Featured Projects: Click See More detailed Porfolio",
      eventType: "link",
    });
  };

  return (
    <Grid gap={2} templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]}>
      <Link href="/projects/other" passHref>
        <Button
          as="a"
          variant="outline"
          onClick={handleClickOtherProjects}
          width="full"
        >
          Other Projects
        </Button>
      </Link>

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
