/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-await-in-loop */
import RSS from 'rss';

import type { Blog, Note } from 'contentlayer/generated';
import { allBlogs, allNotes } from 'contentlayer/generated';

const generateBlogRssItem = async (post: Blog) => {
  const postData = allBlogs.find(({ id }) => id === post.id) as Blog;

  return {
    title: postData.title,
    id: postData.id,
    date: new Date(postData.date).toUTCString(),
    description: postData.description ? postData.description : '',
    contentHtml: postData.body.html,
  };
};

export const generateBlogRss = async (posts: Array<Blog>): Promise<string> => {
  const feed = new RSS({
    title: "sozonome's blog",
    site_url: 'https://sznm.dev',
    feed_url: 'https://sznm.dev/rss.xml',
  });

  // eslint-disable-next-line no-restricted-syntax
  for (const post of posts) {
    if (post.published) {
      const item: any = await generateBlogRssItem(post);
      feed.item({
        title: item.title,
        guid: `https://sznm.dev/blog/${item.id}`,
        url: `https://sznm.dev/blog/${item.id}`,
        date: item.date,
        description: '',
        author: 'sozonome',
        custom_elements: [{ 'content:encoded': item.contentHtml }],
      });
    }
  }

  return feed.xml({ indent: true });
};

const generateNoteRssItem = async (note: Note) => {
  const noteData = allNotes.find(({ id }) => id === note.id) as Note;

  return {
    title: noteData.title,
    id: noteData.id,
    date: new Date(noteData.date).toUTCString(),
    description: noteData.description ? noteData.description : '',
    contentHtml: noteData.body.html,
  };
};

export const generateNoteRss = async (notes: Array<Note>): Promise<string> => {
  const feed = new RSS({
    title: "sozonome's notes",
    site_url: 'https://sznm.dev',
    feed_url: 'https://sznm.dev/notes/rss.xml',
  });

  // eslint-disable-next-line no-restricted-syntax
  for (const note of notes) {
    if (note.published) {
      const item: any = await generateNoteRssItem(note);
      feed.item({
        title: item.title,
        guid: `https://sznm.dev/notes/${item.id}`,
        url: `https://sznm.dev/notes/${item.id}`,
        date: item.date,
        description: '',
        author: 'sozonome',
        custom_elements: [{ 'content:encoded': item.contentHtml }],
      });
    }
  }

  return feed.xml({ indent: true });
};
