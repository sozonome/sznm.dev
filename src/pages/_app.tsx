import { DefaultSeo } from "next-seo";
import type { AppProps, NextWebVitalsMetric } from "next/app";

import { Chakra } from "lib/components/Chakra";
import { defaultSEOConfig } from "lib/config/next-seo";
import Layout from "lib/layout";

export const reportWebVitals = (metric: NextWebVitalsMetric) => {
  const url = process.env.NEXT_PUBLIC_AXIOM_INGEST_ENDPOINT;
  if (!url) {
    return;
  }
  const body = JSON.stringify({
    // eslint-disable-next-line no-underscore-dangle
    route: window.__NEXT_DATA__.page,
    ...metric,
  });

  if (navigator.sendBeacon) {
    navigator.sendBeacon(url, body);
  } else {
    fetch(url, { body, method: "POST", keepalive: true });
  }
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Chakra>
      <DefaultSeo {...defaultSEOConfig} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Chakra>
  );
};

export default MyApp;
