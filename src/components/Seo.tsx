import { useRouter } from 'next/router';
import { ArticleJsonLd, DefaultSeoProps, NextSeo } from 'next-seo';

import { generateOgImage } from '~/lib/og';
import { formatDate } from '~/utils/formatDate';
import { PageSeoProps, BlogSeoProps } from '~/lib/types';

const defaultMeta = {
  title: 'Opa Kholis Majid',
  siteName: 'opakholis.space',
  description: 'Seseorang yang menganggap dirinya sebagai Front-end Developer.',
  url: 'https://opakholis.space',
  type: 'website'
};

export const SEO: DefaultSeoProps = {
  title: defaultMeta.title,
  titleTemplate: `%s — ${defaultMeta.title}`,
  description: defaultMeta.description,
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    title: defaultMeta.title,
    site_name: defaultMeta.siteName,
    url: `defaultMeta.url`,
    images: [
      {
        url: generateOgImage({
          title: defaultMeta.title,
          meta: defaultMeta.siteName
        }),
        width: 1200,
        height: 600,
        alt: defaultMeta.title
      }
    ]
  },
  twitter: {
    handle: '@opakholis',
    site: '@opakholis',
    cardType: 'summary_large_image'
  }
};

export function PageSeo({ title, titleTemplate, description }: PageSeoProps) {
  const { asPath } = useRouter();
  const url = `${defaultMeta.url}${asPath}`;
  return (
    <NextSeo
      title={title}
      titleTemplate={titleTemplate}
      description={description}
      canonical={url}
      openGraph={{
        title,
        description: description,
        url
      }}
    />
  );
}

export function BlogSeo({ title, description, date, url }: BlogSeoProps) {
  const publishedAt = new Date(date).toISOString();
  const ogImage = generateOgImage({
    title: title,
    meta: 'opakholis.space · ' + formatDate(date, true)
  });

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          type: 'article',
          article: { publishedTime: publishedAt },
          url,
          title,
          description: description,
          images: [
            {
              url: ogImage,
              alt: title
            }
          ]
        }}
      />
      <ArticleJsonLd
        authorName={defaultMeta.title}
        publisherName={defaultMeta.title}
        datePublished={publishedAt}
        dateModified={publishedAt}
        url={url}
        images={[ogImage]}
        title={title}
        description={description}
      />
    </>
  );
}
