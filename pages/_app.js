// import Layout from "@/layout";
import dynamic from 'next/dynamic';
import '../index.css'

const Layout = dynamic(() => import("../layout/index.js"), { ssr: false });

function App({ Component, pageProps}) {
  return ( 
    <Layout>
      <Component {...pageProps} />
    </Layout>
    
  );
}

export default App;
