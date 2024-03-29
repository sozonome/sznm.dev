'use client';

import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

import { renderers } from '~/lib/components/blog/renderers';

import styles from './styles.module.scss';

type MarkdownContentProps = {
  rawContent: string;
};

const MarkdownContent = ({ rawContent }: MarkdownContentProps) => {
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

export default MarkdownContent;
