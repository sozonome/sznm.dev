import { BsSubstack } from 'react-icons/bs';
import {
  FaBluesky,
  FaDev,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMedium,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6';

import type { MotionLinkProps } from './types';

export const mainLinks: Array<MotionLinkProps> = [
  {
    platformName: 'GitHub',
    url: 'https://github.com/agustinusnathaniel',
    icon: FaGithub,
  },
  {
    platformName: 'LinkedIn',
    url: 'https://linkedin.com/in/agustinusnathaniel',
    icon: FaLinkedin,
  },
  {
    platformName: 'X-Twitter',
    url: 'https://x.com/agstnsnathaniel',
    icon: FaXTwitter,
  },
  {
    platformName: 'BlueSky',
    url: 'https://bsky.app/profile/agustinusnathaniel.com',
    icon: FaBluesky,
  },
  {
    platformName: 'e-mail',
    url: 'mailto:hello@sznm.dev?cc=agustinusnathaniel228@gmail.com',
    icon: FaEnvelope,
  },
];

export const socialLinks: Array<MotionLinkProps> = [
  {
    platformName: 'Instagram',
    url: 'https://instagram.com/agustinusnathaniel',
    icon: FaInstagram,
  },
  {
    platformName: 'YouTube',
    url: 'https://youtube.com/@agustinusnathaniel',
    icon: FaYoutube,
  },
  // {
  //   platformName: 'ProductHunt',
  //   url: 'https://www.producthunt.com/@agustinusnathaniel',
  //   icon: FaProductHunt,
  // },
];

export const publishingLinks: Array<MotionLinkProps> = [
  {
    platformName: 'dev.to',
    url: 'https://dev.to/agustinusnathaniel',
    icon: FaDev,
  },
  {
    platformName: 'Medium',
    url: 'https://medium.com/@agustinusnathaniel',
    icon: FaMedium,
  },
  {
    platformName: 'Substack',
    url: 'https://agustinusnathaniel.substack.com/',
    icon: BsSubstack,
  },
];
