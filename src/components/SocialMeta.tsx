import Head from "next/head";

type SocialMetaProps = {
  url: string;
  title: string;
  image?: string;
  description?: string;
};

const SocialMeta = ({ url, title, description, image }: SocialMetaProps) => {
  return (
    <Head>
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="sznm.dev" />
      <meta property="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />

      {description && (
        <>
          <meta property="og:description" content={description} />
          <meta name="twitter:description" content={description} />
        </>
      )}
      {image && (
        <>
          <meta property="og:image" content={image} />
          <meta name="twitter:image" content={image} />
        </>
      )}
    </Head>
  );
};

export default SocialMeta;
