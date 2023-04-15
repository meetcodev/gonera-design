import Head from "next/head";

const Seo = ({ pageTitle }) => {
  return (
    <Head>
      <title>
        {pageTitle ? pageTitle &&
          `${pageTitle} | GONERA DESIGN - Jacek Gonera`
        : 'GONERA DESIGN - Jacek Gonera'
        }

      </title>
    </Head>
  );
};

export default Seo;
