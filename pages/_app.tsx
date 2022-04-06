import Layout from "../components/Layout";
import "../styles/globals.css";

const App = ({ Component, pageProps }: any) => {
  return (
    <Layout>
      <h1>Header</h1>
      <Component {...pageProps} />
      <h1>Footer</h1>
      <style jsx global>{`
        .active {
          color: red;
        }
      `}</style>
    </Layout>
  );
};

export default App;
