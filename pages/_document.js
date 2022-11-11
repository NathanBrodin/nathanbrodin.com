import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="Nathan Brodin personal portfolio" />
        <meta name="keywords" content="Nathan Brodin" />
        <meta name="author" content="Nathan Brodin" />
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          `,
          }}
        />
      </body>
    </Html>
  );
}
