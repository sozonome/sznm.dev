import { getAllTestimonies } from '~/lib/services/content/testimony';

import Content from './Content';
import HeadSection from './HeadSection';
import Links from './Links';
import Testimony from './Testimony';

const About = () => {
  return (
    <>
      <HeadSection />
      <Content />
      <Links />
      <Testimony testimonies={getAllTestimonies()} />
    </>
  );
};

export default About;
