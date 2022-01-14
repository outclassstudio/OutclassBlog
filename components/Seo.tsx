import Head from "next/head";

interface props {
  title: string;
}

export default function Seo({ title }: props) {
  return (
    <Head>
      <title>{title} | Outclass Studio</title>
    </Head>
  );
}
