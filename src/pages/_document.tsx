import { ColorModeScript } from '@chakra-ui/react';
import Defaults from 'configs/defaults';
import Theme from 'configs/theme';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import type { DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang={`${Defaults.site.lang}-${Defaults.site.locale}`}>
        <Head />
        <body>
          <ColorModeScript initialColorMode={Theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
