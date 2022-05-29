import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            as="font"
            crossOrigin="anonymous"
            href="/fonts/ibm-plex-sans-var.woff2"
            type="font/woff2"
          />
          <link
            rel="preload"
            as="font"
            crossOrigin="anonymous"
            href="/fonts/ibm-plex-sans-var-italic.woff2"
            type="font/woff2"
          />
          <link href="/static/favicons/favicon.ico" rel="shortcut icon" />
          <link href="/static/favicons/site.webmanifest" rel="manifest" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicons/favicon-16x16.png"
          />
          <link
            color="#171923"
            href="/static/favicons/safari-pinned-tab.svg"
            rel="mask-icon"
          />
          {process.env.NODE_ENV === 'production' && (
            <script
              async
              defer
              data-website-id="2c98cf64-36fa-4d17-a62a-e26b27e34d9e"
              data-do-not-track="true"
              src="https://u.opkhls.dev/umami.js"
            />
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
