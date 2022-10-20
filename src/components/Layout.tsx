import Head from 'next/head';
import Link from 'next/link';

export const siteTitle = 'Kims Seite';

export default function Layout({children, home}: {children: React.ReactNode; home?: boolean}) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="This is Kims Website" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <main>{children}</main>
    </div>
  );
}
