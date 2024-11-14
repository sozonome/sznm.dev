import { BsSubstack } from 'react-icons/bs';
import {
  FaDev,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMedium,
} from 'react-icons/fa';
import { FaBluesky, FaXTwitter } from 'react-icons/fa6';

import type { MotionLinkProps } from './types';

export const mainLinks: Array<MotionLinkProps> = [
  {
    platformName: 'GitHub',
    url: 'https://github.com/sozonome',
    icon: FaGithub,
  },
  {
    platformName: 'LinkedIn',
    url: 'https://linkedin.com/in/agustinusnathaniel',
    icon: FaLinkedin,
  },
  {
    platformName: 'X-Twitter',
    url: 'https://x.com/sozonome',
    icon: FaXTwitter,
  },
  {
    platformName: 'BlueSky',
    url: 'https://bsky.app/profile/sznm.dev',
    icon: FaBluesky,
  },
  {
    platformName: 'e-mail',
    url: 'mailto:hello@sznm.dev?cc=agustinusnathaniel228@gmail.com',
    icon: FaEnvelope,
  },
];

export const socialLinks: Array<MotionLinkProps> = [
  // {
  //   platformName: 'Instagram',
  //   url: 'https://instagram.com/sozonome',
  //   icon: FaInstagram,
  // },
  // {
  //   platformName: 'YouTube',
  //   url: 'https://youtube.com/channel/UCJnYMGIHtQ8yInuq4Pc2Ttg',
  //   icon: FaYoutube,
  // },
  // {
  //   platformName: 'Mastodon',
  //   url: 'https://mastodon.social/@sozonome',
  //   icon: FaMastodon,
  // },
  // {
  //   platformName: 'ProductHunt',
  //   url: 'https://www.producthunt.com/@sozonome',
  //   icon: FaProductHunt,
  // },
];

export const publishingLinks: Array<MotionLinkProps> = [
  {
    platformName: 'dev.to',
    url: 'https://dev.to/sozonome',
    icon: FaDev,
  },
  {
    platformName: 'Medium',
    url: 'https://medium.com/@agustinusnathaniel',
    icon: FaMedium,
  },
  {
    platformName: 'Substack',
    url: 'https://sozonome.substack.com/',
    icon: BsSubstack,
  },
];
