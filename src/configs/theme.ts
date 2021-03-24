import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import type { theme as ThemeType, ThemeConfig } from '@chakra-ui/theme';
import type { Merge } from 'type-fest';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
});

const overrides = {
  colors: {
    black: '#16161D',
  },
  config,
  fonts,
  breakpoints,
};

const Theme = extendTheme(overrides) as Merge<
  typeof ThemeType,
  typeof overrides
>;

export default Theme;
