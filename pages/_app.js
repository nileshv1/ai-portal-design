<<<<<<< HEAD
import Layout from "@/layout";
import Head from 'next/head';
=======
// import Layout from "@/layout";
import dynamic from 'next/dynamic';
>>>>>>> 42422c1b3cfaa742773a9e22dc2f5e5017eb0c16
import '../index.css'

const Layout = dynamic(() => import("../layout/index.js"), { ssr: false });

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
