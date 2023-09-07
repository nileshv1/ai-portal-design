// import Layout from "@/layout";
import dynamic from 'next/dynamic';
import '../index.css'
import { Provider } from 'react-redux';
import store from '@/redux/store'

const Layout = dynamic(() => import("../layout/index.js"), { ssr: false });

function App({ Component, pageProps}) {
  return ( 
    <Provider store={store}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </Provider>
    
  );
}

export default App;
