import { memo } from "react";
import twemoji from "twemoji";

type TwemojiProps = {
  emoji: string;
};

const Twemoji = ({ emoji }: TwemojiProps) => {
  return (
    <span
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: twemoji.parse(emoji, {
          folder: "svg",
          ext: ".svg",
        }),
      }}
    />
  );
};

export default memo(Twemoji);
