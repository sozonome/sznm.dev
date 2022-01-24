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
} from "react-icons/fa";

import { MotionLinkProps } from "./types";

export const wrapperAnimationProps = {
  variants: {
    before: { y: 0, opacity: 0, transition: { type: "spring" } },
    after: { y: 20, opacity: 1, transition: { type: "spring" } },
  },
  initial: "before",
  animate: "after",
};

export const staggerAnimationProps = {
  variants: {
    before: {},
    after: { transition: { staggerChildren: 0.06 } },
  },
  initial: "before",
  animate: "after",
};

export const childAnimationProps = {
  variants: {
    before: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 16,
        stiffness: 200,
      },
    },
    after: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 16,
        stiffness: 200,
      },
    },
  },
};

export const socialLinks: Array<MotionLinkProps> = [
  {
    platformName: "GitHub",
    url: "https://github.com/sozonome",
    icon: FaGithub,
  },
  {
    platformName: "LinkedIn",
    url: "https://linkedin.com/in/agustinusnathaniel",
    icon: FaLinkedin,
  },
  {
    platformName: "Twitter",
    url: "https://twitter.com/sozonome",
    icon: FaTwitter,
  },
  {
    platformName: "Instagram",
    url: "https://instagram.com/sozonome",
    icon: FaInstagram,
  },
  {
    platformName: "YouTube",
    url: "https://youtube.com/channel/UCJnYMGIHtQ8yInuq4Pc2Ttg",
    icon: FaYoutube,
  },
  {
    platformName: "dev.to",
    url: "https://dev.to/sozonome",
    icon: FaDev,
  },
  {
    platformName: "Medium",
    url: "https://medium.com/@agustinusnathaniel",
    icon: FaMedium,
  },
  {
    platformName: "ProductHunt",
    url: "https://www.producthunt.com/@sozonome/made",
    icon: FaProductHunt,
  },
  {
    platformName: "e-mail",
    url: "mailto:hello@sznm.dev?cc=agustinusnathaniel228@gmail.com",
    icon: FaEnvelope,
  },
];
