import Layout from "@/layout";
import Head from 'next/head';

function App({ Component, pageProps}) {
  return (
    <Layout>
      <Head>
        <body style={{margin:0}} />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
