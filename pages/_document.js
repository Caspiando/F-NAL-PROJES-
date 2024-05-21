import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="icon" href="/Logo.svg" sizes="1000x1000" type="image/svg+xml" />

        <meta
          name="description"
          content="Welcome to Caspy, your premier e-commerce platform for all your shopping needs!"
        />
        <meta
          name="keywords"
          content="Caspy, e-commerce, shopping, online store"
        />
        <meta name="author" content="Caspy" />
        <title>Caspy-E-Ticaret Platform</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}