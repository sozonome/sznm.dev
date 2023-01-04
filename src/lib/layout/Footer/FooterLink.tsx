import type { FooterLinkProps } from "./types";

const FooterLink = ({ label, url, onClick }: FooterLinkProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold hover:underline"
      onClick={onClick}
    >
      {label}
    </a>
  );
};

export default FooterLink;
