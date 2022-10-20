import { NextPage } from "next";
import Head from "next/head";

interface ISeoProps {
  title: string;
}

const Seo: NextPage<ISeoProps> = ({ title }) => {
  return (
    <Head>
      <link rel="icon" href="/favicon.png" />
      <title>{title} | Outclass Studio</title>
    </Head>
  );
};

export default Seo;
