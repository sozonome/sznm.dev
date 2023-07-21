'use client';

import { Button, Grid, Tooltip } from '@chakra-ui/react';
import Link from 'next/link';
import * as React from 'react';

import { EVENT_TYPE_LINK, EVENT_TYPE_NAVIGATE } from '~/lib/constants/tracking';
import { trackEvent } from '~/lib/utils/trackEvent';

const ProjectListBottomNav = () => {
  const handleClickOtherProjects = React.useCallback(() => {
    trackEvent({
      eventName: 'Featured Projects: Click Other Projects',
      eventData: { type: EVENT_TYPE_NAVIGATE },
    });
  }, []);

  const handleClickPortfolioPage = React.useCallback(() => {
    trackEvent({
      eventName: 'Featured Projects: Click See More detailed Porfolio',
      eventData: { type: EVENT_TYPE_LINK },
    });
  }, []);

  return (
    <Grid
      gap={{
        base: 4,
        md: 6,
      }}
      templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
      fontFamily="heading"
    >
      <Button
        as={Link}
        href="/projects/other"
        variant="outline"
        onClick={handleClickOtherProjects}
        size="lg"
        width="full"
      >
        Other Projects
      </Button>

      <Tooltip
        label="to view the detailed portfolio page, you must ask for the password through contacting me first, as I build the portfolio page for the one who really have interest to work with me"
        aria-label="portfolio view tooltip"
      >
        <Button
          as={Link}
          href="/portfolio"
          width="full"
          size="lg"
          onClick={handleClickPortfolioPage}
        >
          see more detailed portfolio
        </Button>
      </Tooltip>
    </Grid>
  );
};

export default ProjectListBottomNav;
