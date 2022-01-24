import Head from "next/head";

const Meta = () => {
  return (
    <Head>
      <link rel="icon" href="/avataaars.svg" />
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
