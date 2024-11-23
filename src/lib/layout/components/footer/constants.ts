import type { FooterLinkProps } from './types';

export const links: Array<Pick<FooterLinkProps, 'label' | 'url'>> = [
  {
    label: 'Base',
    url: 'https://base.sznm.dev',
  },
  {
    label: 'Bookmarks',
    url: 'https://base.sznm.dev/bookmarks',
  },
  {
    label: 'T.I.L.',
    url: '/til',
  },
  {
    label: 'Templates',
    url: 'https://github.com/agustinusnathaniel?tab=repositories&type=template&language=&sort=stargazers',
  },
  {
    label: 'Timeline',
    url: 'https://poly.sznm.dev',
  },
  {
    label: 'Analytics',
    url: 'https://umami.sznm.dev/share/Zl0vE0h0/agustinusnathaniel.com',
  },
];
