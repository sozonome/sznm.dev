import SpotifyListening from "lib/components/common/SpotifyListening";
import { EVENT_TYPE_LINK } from "lib/constants/tracking";
import { trackEvent } from "lib/utils/trackEvent";

import { links } from "./constants";
import FooterLink from "./FooterLink";

const Footer = () => {
  const handleClickFooterLink = (label: string) => () => {
    trackEvent({
      eventName: `Footer Link: ${label}`,
      eventData: { type: EVENT_TYPE_LINK },
    });
  };

  return (
    <footer className="flex flex-col layout-block gap-8">
      <hr />

      <SpotifyListening />

      <div
        className={`grid md:flex grid-cols-2 md:grid-cols-[${
          links.length <= 4 ? links.length : 4
        }] gap-4 md:gap-6`}
      >
        {links.map((link) => (
          <FooterLink
            {...link}
            onClick={handleClickFooterLink(link.label)}
            key={link.label}
          />
        ))}
      </div>
      <p className="text-xs sm:text=sm">
        &copy; 2020 - {new Date().getFullYear()}{" "}
        <a
          href="https://agustinusnathaniel.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Agustinus Nathaniel
        </a>
      </p>
    </footer>
  );
};

export default Footer;
