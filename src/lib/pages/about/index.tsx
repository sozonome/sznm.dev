import { NextSeo } from "next-seo";

import { baseUrl } from "lib/constants/baseUrl";

import Content from "./Content";
import HeadSection from "./HeadSection";
import Links from "./Links";

const About = () => {
  return (
    <>
      <NextSeo
        title="About"
        canonical={`${baseUrl}/about`}
        openGraph={{
          title: "About | sozonome",
          description: "About sznm.dev page",
        }}
      />

      <HeadSection />
      <Content />
      <Links />
    </>
  );
};

export default About;
