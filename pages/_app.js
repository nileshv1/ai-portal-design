import Layout from "@/layout";
import Head from 'next/head';
import '../index.css'

function App({ Component, pageProps}) {
  return (
    <Layout>
      {/* <Head>
        <body style={{margin:0}} />
      </Head> */}
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
