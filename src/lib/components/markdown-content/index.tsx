'use client';

import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

import { renderers } from './renderers';
import styles from './styles.module.scss';

type MarkdownContentProps = {
  rawContent: string;
};

export const MarkdownContent = ({ rawContent }: MarkdownContentProps) => {
  return (
    <ReactMarkdown
      className={styles.content}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={renderers}
    >
      {rawContent}
    </ReactMarkdown>
  );
};
