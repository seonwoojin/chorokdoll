import { NextComponentType } from "next";
import Head from "next/head";

const WithHead = (
  Component: NextComponentType,
  title: string,
  pageName: string,
  pageRouter: string,
  description: string
) => {
  const App = (props: any) => {
    const domain = `https://`;
    const currentUrl = `${domain}/${pageRouter}`;

    return (
      <>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="format-detection" content="telephone=no" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, viewport-fit=cover"
          />
          {pageName === "NONE" ? null : (
            <>
              <title>
                {pageName === "" ? `${title}` : `${title} - ${pageName}`}
              </title>
              <link rel="canonical" href={currentUrl} />
              <meta property="og:url" content={currentUrl} />
              <meta
                property="og:title"
                content={
                  pageName === "" ? `${title}` : `${title} - ${pageName}`
                }
              />
            </>
          )}
          <meta name="description" content={description} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:description" content={description} />
          <meta property="og:locale" content="ko_kr" />
          <meta property="og:image" content="/ologo.png" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={domain} />
        </Head>
        <Component {...props} />
      </>
    );
  };

  return App;
};

export default WithHead;
