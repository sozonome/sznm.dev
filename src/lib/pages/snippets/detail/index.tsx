import { Box, Spacer, useColorModeValue } from "@chakra-ui/react";
import type { GiscusProps } from "@giscus/react";
import Giscus from "@giscus/react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import { renderers } from "lib/components/blog/renderers";
import ShareButtons from "lib/components/shared/ShareButtons";
import SnippetDetailHead from "lib/components/snippets/detail/Head";
import SnippetDetailMeta from "lib/components/snippets/detail/Meta";

import styles from "./Snippet.module.scss";
import type { SnippetDetailProps } from "./types";

const SnippetDetail = ({ data }: SnippetDetailProps) => {
  const giscusTheme: GiscusProps["theme"] = useColorModeValue("light", "dark");

  return (
    <Box as="article">
      <SnippetDetailMeta data={data} />
      <SnippetDetailHead data={data} />
      <ShareButtons title={`Check out this snippet: ${data.title}`} />
      <Spacer height={16} />
      <ReactMarkdown
        className={styles.content}
        rehypePlugins={[rehypeRaw]}
        components={renderers}
      >
        {data.body.raw}
      </ReactMarkdown>

      <ShareButtons title={`Check out this snippet: ${data.title}`} />

      <Box marginY={12}>
        <Giscus
          repo="sozonome/sznm.dev"
          repoId="MDEwOlJlcG9zaXRvcnkyNjY2Njk3MDg="
          mapping="pathname"
          category="Snippets"
          categoryId="DIC_kwDOD-UOjM4CQX_7"
          reactionsEnabled="1"
          theme={giscusTheme}
          emitMetadata="0"
        />
      </Box>
    </Box>
  );
};

export default SnippetDetail;
