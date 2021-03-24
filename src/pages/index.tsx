import {
  Code,
  Icon,
  Link as ChakraLink,
  List,
  ListIcon,
  ListItem,
  Text,
} from '@chakra-ui/react';
import { HiCheckCircle, HiLink } from 'react-icons/hi';
import Container from 'components/container';
import CTA from 'components/cta';
import DarkModeSwitch from 'components/dark-mode-switch';
import Footer from 'components/footer';
import Hero from 'components/hero';
import Main from 'components/main';

const Index = () => (
  <Container height="100vh">
    <Hero />
    <Main>
      <Text>
        Hello World! Example repository of <Code>Next.js</Code> +{' '}
        <Code>chakra-ui</Code> + <Code>typescript</Code>.
      </Text>

      <List spacing={3} my={0}>
        <ListItem>
          <ListIcon as={HiCheckCircle} color="green.500" />
          <ChakraLink
            isExternal
            href="https://chakra-ui.com"
            flexGrow={1}
            mr={2}
          >
            Chakra UI <Icon as={HiLink} />
          </ChakraLink>
        </ListItem>
        <ListItem>
          <ListIcon as={HiCheckCircle} color="green.500" />
          <ChakraLink isExternal href="https://nextjs.org" flexGrow={1} mr={2}>
            Next.js <Icon as={HiLink} />
          </ChakraLink>
        </ListItem>
      </List>
    </Main>

    <DarkModeSwitch />
    <Footer>
      <Text>Next ❤️ Chakra</Text>
    </Footer>
    <CTA />
  </Container>
);

export default Index;
