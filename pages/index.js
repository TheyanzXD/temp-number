import fs from 'fs';
import path from 'path';
import Head from 'next/head';

export default function Index() {
  const htmlPath = path.join(process.cwd(), 'public', 'index.html');
  const html = fs.readFileSync(htmlPath, 'utf8');

  return (
    <>
      <Head>
        <title>📱 Temp Number — Free Temporary Phone Numbers</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
