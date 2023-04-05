import {
  FaDev,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMedium,
  FaProductHunt,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

import type { MotionLinkProps } from './types';

export const socialLinks: Array<MotionLinkProps> = [
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
    platformName: 'Twitter',
    url: 'https://twitter.com/sozonome',
    icon: FaTwitter,
  },
  {
    platformName: 'Instagram',
    url: 'https://instagram.com/sozonome',
    icon: FaInstagram,
  },
  {
    platformName: 'YouTube',
    url: 'https://youtube.com/channel/UCJnYMGIHtQ8yInuq4Pc2Ttg',
    icon: FaYoutube,
  },
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
    platformName: 'ProductHunt',
    url: 'https://www.producthunt.com/@sozonome',
    icon: FaProductHunt,
  },
  {
    platformName: 'e-mail',
    url: 'mailto:hello@sznm.dev?cc=agustinusnathaniel228@gmail.com',
    icon: FaEnvelope,
  },
];
