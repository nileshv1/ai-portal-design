// import Layout from "@/layout";
import dynamic from 'next/dynamic';
import '../index.css'
import store from "./store";
import { Provider } from "react-redux";

const Layout = dynamic(() => import("../layout/index.js"), { ssr: false });

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider >

  );
}

export default App;
