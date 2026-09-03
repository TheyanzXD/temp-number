import fs from 'fs';
import path from 'path';
import Head from 'next/head';

export default function DocsPage() {
  const htmlPath = path.join(process.cwd(), 'public', 'docs.html');
  const html = fs.readFileSync(htmlPath, 'utf8');

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
