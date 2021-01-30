import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="/fonts/Lato/lato-v17-latin-regular.woff2"
            as="font"
            type="font/woff2"
            crossorigin
          />
          <link
            rel="preload"
            href="/fonts/Lato/lato-v17-latin-regular.woff"
            as="font"
            type="font/woff"
            crossorigin
          />
          <link
            rel="preload"
            href="/fonts/Lato/lato-v17-latin-700.woff2"
            as="font"
            type="font/woff2"
            crossorigin
          />
          <link
            rel="preload"
            href="/fonts/Lato/lato-v17-latin-700.woff"
            as="font"
            type="font/woff"
            crossorigin
          />
          <link
            rel="preload"
            href="/fonts/Lato/lato-v17-latin-italic.woff2"
            as="font"
            type="font/woff2"
            crossorigin
          />
          <link
            rel="preload"
            href="/fonts/Lato/lato-v17-latin-italic.woff"
            as="font"
            type="font/woff"
            crossorigin
          />
          <link
            rel="preload"
            href="/fonts/Lato/lato-v17-latin-700italic.woff2"
            as="font"
            type="font/woff2"
            crossorigin
          />
          <link
            rel="preload"
            href="/fonts/Lato/lato-v17-latin-700italic.woff"
            as="font"
            type="font/woff"
            crossorigin
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
