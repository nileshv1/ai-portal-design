import Layout from "@/layout";
import '../index.css'

function App({ Component, pageProps}) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
