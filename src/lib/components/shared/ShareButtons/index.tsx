import { HStack, IconButton, useToast } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import * as React from 'react';

import { baseUrl } from '~/lib/constants/baseUrl';
import { extendUrl } from '~/lib/utils/extendUrl';

import { socialMap } from './constants';

type ShareButtonsProps = {
  title?: string;
};

const toastId = 'copied-link';

const ShareButtons = ({ title }: ShareButtonsProps) => {
  const pathname = usePathname();
  const toast = useToast();

  const link = React.useMemo(() => `${baseUrl}${pathname}`, [pathname]);

  const handleClick = React.useCallback(
    (obj: {
      baseSocialUrl: string;
      params: Record<string, unknown>;
      isCopy?: boolean;
    }) =>
      async () => {
        const shareLink = extendUrl(obj.baseSocialUrl, obj.params);
        if (obj.isCopy) {
          await navigator.clipboard.writeText(shareLink);
          if (!toast.isActive(toastId)) {
            toast({
              id: toastId,
              title: 'Link Copied!',
              position: 'top-right',
              status: 'success',
              isClosable: true,
              description: shareLink,
            });
          }
          return;
        }
        window.open(shareLink);
      },
    [toast]
  );

  return (
    <HStack marginY={2}>
      {socialMap({ title, url: link }).map(
        ({ name, icon, baseSocialUrl, params, isCopy }) => (
          <IconButton
            aria-label={name}
            key={name}
            icon={icon}
            onClick={handleClick({ baseSocialUrl, params, isCopy })}
          />
        )
      )}
    </HStack>
  );
};

export default ShareButtons;
