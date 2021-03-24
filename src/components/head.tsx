import NextHead from 'next/head';
import { DefaultSeo } from 'next-seo';
import DefaultSEO from 'configs/seo';
import type { DefaultSeoProps } from 'next-seo';

interface Props extends DefaultSeoProps {}

const Head: React.FC<Props> = ({ title, description, children, ...rest }) => {
  const nextSEOProps = DefaultSEO;

  nextSEOProps.title = DefaultSEO.title || title;
  nextSEOProps.description = DefaultSEO.description || description;

  if (nextSEOProps.openGraph) {
    nextSEOProps.openGraph.title = DefaultSEO.title || title;
    nextSEOProps.openGraph.description = DefaultSEO.description || description;
  }

  return (
    <>
      <DefaultSeo {...nextSEOProps} {...rest} />

      <NextHead>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {children}
      </NextHead>
    </>
  );
};

export default Head;
