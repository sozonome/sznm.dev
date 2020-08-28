import Head from "next/head";

type MetaProps = {
  title?: string;
};

const Meta = ({ title }: MetaProps) => {
  return (
    <Head>
      <title>{title ? title : "Hello"} | sznm.dev</title>
      <link rel="icon" href="/favicon.ico" />
      <html lang="en" />
      <meta name="description" content="Agustinus Nathaniel's Dev Site" />
    </Head>
  );
};

export default Meta;
