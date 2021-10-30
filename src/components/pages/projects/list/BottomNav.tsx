import { Button, Grid, Tooltip } from "@chakra-ui/react";
import Link from "next/link";

import { trackEventToUmami } from "utils/trackEvent";

const ProjectListBottomNav = () => {
  const handleClickOtherProjects = () => {
    trackEventToUmami("Featured Projects: Click Other Projects", "navigate");
  };

  const handleClickPortfolioPage = () => {
    trackEventToUmami(
      "Featured Projects: Click See More detailed Porfolio",
      "link"
    );
  };

  return (
    <Grid gap={2} templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]}>
      <Link href="/projects/other" passHref>
        <Button
          variant="outline"
          onClick={handleClickOtherProjects}
          isFullWidth
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
          isFullWidth
          onClick={handleClickPortfolioPage}
        >
          see more detailed portfolio
        </Button>
      </Tooltip>
    </Grid>
  );
};

export default ProjectListBottomNav;
