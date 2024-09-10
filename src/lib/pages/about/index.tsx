import { getAllTestimonies } from '~/lib/services/content/testimony';

import { AboutContent } from './about-content';
import { HeadSection } from './head-section';
import { SocialLinks } from './social-links';
import { TestimonySection } from './testimony-section';

const About = () => {
  return (
    <>
      <HeadSection />
      <AboutContent />
      <SocialLinks />
      <TestimonySection testimonies={getAllTestimonies()} />
    </>
  );
};

export default About;
