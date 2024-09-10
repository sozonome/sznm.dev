import { IconButton } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import type { IconType } from 'react-icons';
import {
  FaFeatherAlt,
  FaHome,
  FaRocket,
  FaStickyNote,
  FaUser,
} from 'react-icons/fa';

import { EVENT_TYPE_NAVIGATE } from '~/lib/constants/tracking';
import { trackEvent } from '~/lib/utils/track-event';

type NavItemProps = {
  href: string;
  label: string;
  icon: IconType;
};

const NavItem = ({ href, label, icon }: NavItemProps) => {
  const handleClickNavigation = React.useCallback(() => {
    trackEvent({
      eventName: `Nav Link: ${label}`,
      eventData: { type: EVENT_TYPE_NAVIGATE },
    });
  }, [label]);

  return (
    <IconButton
      as={Link}
      href={href}
      aria-label={label}
      variant="ghost"
      flexBasis="25%"
      fontSize={['xl', 'md']}
      padding={0}
      onClick={handleClickNavigation}
      color="unset"
    >
      {icon({ style: { cursor: 'pointer' } })}
    </IconButton>
  );
};

const navigations: Array<NavItemProps> = [
  {
    href: '/',
    label: 'Home',
    icon: FaHome,
  },
  {
    href: '/projects',
    label: 'Projects',
    icon: FaRocket,
  },
  {
    href: '/blog',
    label: 'Blog',
    icon: FaFeatherAlt,
  },
  {
    href: '/notes',
    label: 'Note',
    icon: FaStickyNote,
  },
  {
    href: '/about',
    label: 'About',
    icon: FaUser,
  },
];

export const Navigation = () => {
  return (
    <>
      {navigations.map((navigation) => (
        <NavItem {...navigation} key={navigation.label} />
      ))}
    </>
  );
};
