import Head from "next/head";

const Seo = ({ pageTitle }) => {
  return (
    <Head>
      <title>
        {pageTitle &&
          `${pageTitle} | GONERA DESIGN - Jacek Gonera`}
      </title>
    </Head>
  );
};

export default Seo;
