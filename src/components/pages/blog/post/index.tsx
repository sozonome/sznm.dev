import { Box, useColorModeValue } from "@chakra-ui/react";
import { Giscus, GiscusProps } from "@giscus/react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import { renderers } from "components/blog/renderers";

import styles from "./BlogPost.module.scss";
import BlogPostHead from "./Head";
import BlogPostMeta from "./Meta";
import { BlogPostProps } from "./types";

const BlogPost = ({ postData }: BlogPostProps) => {
  const giscusTheme: GiscusProps["theme"] = useColorModeValue("light", "dark");

  return (
    <Box as="article">
      <BlogPostMeta {...{ postData }} />

      <BlogPostHead {...{ postData }} />

      <ReactMarkdown
        className={styles.content}
        rehypePlugins={[rehypeRaw]}
        components={renderers}
      >
        {postData.rawContent}
      </ReactMarkdown>

      <Box marginY={12}>
        <Giscus
          repo="sozonome/sznm.dev"
          repoId="MDEwOlJlcG9zaXRvcnkyNjY2Njk3MDg="
          mapping="pathname"
          category="Blog Post"
          categoryId="DIC_kwDOD-UOjM4B_fhR"
          reactionsEnabled="1"
          theme={giscusTheme}
          emitMetadata="0"
        />
      </Box>
    </Box>
  );
};

export { BlogPostProps };

export default BlogPost;
