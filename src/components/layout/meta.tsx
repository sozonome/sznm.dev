import Head from "next/head";

const Meta = () => {
  return (
    <Head>
      <title>Hello | sozonome</title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="Agustinus Nathaniel's Dev Site | sozonome"
      />
      <link
        rel="alternate"
        type="application/rss+xml"
        title="RSS feed for sozonome's blog posts"
        href="https://sznm.dev/rss.xml"
      />
    </Head>
  );
};

export default Meta;
