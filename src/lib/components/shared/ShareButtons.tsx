import { HStack, IconButton, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import * as React from "react";
import {
  FaFacebook,
  FaLink,
  FaTelegram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

import { baseUrl } from "lib/constants/baseUrl";
import { extendUrl } from "lib/utils/extendUrl";

type ShareButtonsProps = {
  title?: string;
};

const socialMap = (obj: { title?: string; url: string }) => [
  {
    icon: <FaFacebook />,
    baseSocialUrl: "https://www.facebook.com/sharer/sharer.php",
    params: {
      u: obj.url,
      quote: obj.title,
    },
  },
  {
    icon: <FaTwitter />,
    baseSocialUrl: "https://twitter.com/share",
    params: {
      url: obj.url,
      text: obj.title,
      via: "sozonome",
    },
  },
  {
    icon: <FaTelegram />,
    baseSocialUrl: "https://telegram.me/share/url",
    params: {
      url: obj.url,
      text: obj.title,
    },
  },
  {
    icon: <FaWhatsapp />,
    baseSocialUrl: "https://web.whatsapp.com/send",
    params: {
      // eslint-disable-next-line sonarjs/no-nested-template-literals
      text: `${obj.title ? `${obj.title}: ` : ""}${obj.url}`,
    },
  },
  {
    icon: <FaLink />,
    baseSocialUrl: obj.url,
    params: {},
    isCopy: true,
  },
];

const toastId = "copied-link";

const ShareButtons = ({ title }: ShareButtonsProps) => {
  const router = useRouter();
  const toast = useToast();

  const link = React.useMemo(
    () => `${baseUrl}${router.asPath}`,
    [router.asPath]
  );

  const handleClick =
    (obj: {
      baseSocialUrl: string;
      params: Record<string, unknown>;
      isCopy?: boolean;
    }) =>
    () => {
      const shareLink = extendUrl(obj.baseSocialUrl, obj.params);
      if (obj.isCopy) {
        navigator.clipboard.writeText(shareLink);
        if (!toast.isActive(toastId)) {
          toast({
            id: toastId,
            title: "Link Copied!",
            position: "top-right",
            status: "success",
            isClosable: true,
            description: shareLink,
          });
        }
        return;
      }
      window.open(shareLink);
    };

  return (
    <HStack marginY={2}>
      {socialMap({ title, url: link }).map(
        ({ icon, baseSocialUrl, params, isCopy }) => (
          <IconButton
            aria-label=""
            icon={icon}
            onClick={handleClick({ baseSocialUrl, params, isCopy })}
          />
        )
      )}
    </HStack>
  );
};

export default ShareButtons;
