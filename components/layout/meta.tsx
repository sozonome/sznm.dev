import Head from "next/head";

type MetaProps = {
  title?: string;
};

const Meta = ({ title }: MetaProps) => {
  return (
    <Head>
      <title>{title ? title : "Hello"} | sznm.dev</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Meta;
