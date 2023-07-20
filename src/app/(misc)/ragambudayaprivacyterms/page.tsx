import { Box, Heading, Text, Link } from '@chakra-ui/react';

export const dynamic = 'force-static';

const RagamBudayaPrivacyTerms = () => {
  return (
    <Box>
      <Box>
        <Heading as="h1" size="2xl">
          RagamBudaya App
        </Heading>
        <Heading as="h2" size="lg">
          Privacy Policy
        </Heading>
      </Box>
      <Box marginY={22}>
        <Text>
          {`Your privacy is important to us. It is Hatchoko's policy to respect
          your privacy regarding any information we may collect from you through
          our app, RagamBudaya.`}
        </Text>
        <Text>
          We only ask for personal information when we truly need it to provide
          a service to you. We collect it by fair and lawful means, with your
          knowledge and consent. We also let you know why we’re collecting it
          and how it will be used.
        </Text>
        <Text>
          We only retain collected information for as long as necessary to
          provide you with your requested service. What data we store, we’ll
          protect within commercially acceptable means to prevent loss and
          theft, as well as unauthorized access, disclosure, copying, use or
          modification.
        </Text>
        <Text>
          We don’t share any personally identifying information publicly or with
          third-parties, except when required to by law.
        </Text>
        <Text>
          Our app may link to external sites that are not operated by us. Please
          be aware that we have no control over the content and practices of
          these sites, and cannot accept responsibility or liability for their
          respective privacy policies.
        </Text>
        <Text>
          You are free to refuse our request for your personal information, with
          the understanding that we may be unable to provide you with some of
          your desired services.
        </Text>
        <Text>
          Your continued use of our app will be regarded as acceptance of our
          practices around privacy and personal information. If you have any
          questions about how we handle user data and personal information, feel
          free to contact us.
        </Text>
        <Text>This policy is effective as of 10 December 2019.</Text>
      </Box>
      <Text>
        <Link href="https://getterms.io" title="Generate a free privacy policy">
          Privacy Policy created with GetTerms.
        </Link>
      </Text>
    </Box>
  );
};

export default RagamBudayaPrivacyTerms;
