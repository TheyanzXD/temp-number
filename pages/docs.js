import Head from 'next/head';

export async function getStaticProps() {
  const fs = await import('fs');
  const path = await import('path');
  const htmlPath = path.join(process.cwd(), 'public', 'docs.html');
  const html = fs.readFileSync(htmlPath, 'utf8');
  return { props: { html } };
}

export default function DocsPage({ html }) {
  return (
    <>
      <Head>
        <title>Docs — Temp Number API</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
