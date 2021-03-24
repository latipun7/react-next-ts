import type { DefaultSeoProps } from 'next-seo';
import Defaults from './defaults';

const { description, lang, locale, name, title, url } = Defaults.site;

const DefaultSEO: DefaultSeoProps = {
  title,
  description,
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'initial-scale=1.0, width=device-width',
    },
    {
      name: 'theme-color',
      content: '#F53CE6',
    },
    {
      name: 'author',
      content: 'Latif Sulistyo (github:latipun7)',
    },
  ],
  openGraph: {
    title,
    description,
    type: 'website',
    locale: `${lang}_${locale}`,
    url,
    site_name: name,
    images: [
      {
        url: `${Defaults.site.url}/images/logo.svg`,
        width: 460,
        height: 234,
        alt: '',
      },
    ],
  },
  twitter: {
    handle: '@_latipun7',
    site: '@_latipun7',
    cardType: 'summary_large_image',
  },
};

export default DefaultSEO;
