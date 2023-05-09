import Head from 'next/head';

interface Props {
  title?: string;
  description?: string;
  keywords?: string;
  isIndexing?: boolean;
  isFollowing?: boolean;
  ogTitle?: string;
  ogDescription?: string;
  ogImageUrl?: string;
}

export const Helmet = ({
  title = 'Next Templates',
  isIndexing = false,
  isFollowing = false,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImageUrl,
}: Props) => {
  return (
    <Head>
      <title>{title}</title>
      {description !== undefined && (
        <meta name="description" content={description} />
      )}
      {keywords !== undefined && <meta name="keywords" content={keywords} />}
      {ogTitle !== undefined && <meta property="og:title" content={ogTitle} />}
      {ogDescription !== undefined && (
        <meta property="og:description" content={ogDescription} />
      )}
      {ogImageUrl !== undefined && (
        <meta property="og:image" content={ogImageUrl} />
      )}
      <meta
        name="robots"
        content={`${isIndexing ? 'index' : 'noindex'},${
          isFollowing ? 'follow' : 'nofollow'
        }`}
      />
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
};
