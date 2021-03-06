import { Flex, Heading } from '@chakra-ui/react';

const Hero = ({ title }: { title: string }) => (
  <Flex justifyContent="center" alignItems="center" height="100vh">
    <Heading fontSize="6vw">{title}</Heading>
  </Flex>
);

Hero.defaultProps = {
  title: 'with-chakra-ui-typescript',
};

export default Hero;
