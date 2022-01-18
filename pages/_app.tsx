import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { NextPageContext } from "next";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

MyApp.getInitialProps = async (context: NextPageContext) => {
  const { ctx, Component }: any = context;
  let pageProps = {};

  if (Component.getInitialProps) {
    // Component의 context로 ctx를 넣어주자
    pageProps = await Component.getInitialProps(ctx);
  }

  // return한 값은 해당 컴포넌트의 props로 들어가게 됩니다.
  return { pageProps };
};
