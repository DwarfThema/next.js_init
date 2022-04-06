import Layout from "../components/Layout";
import "../styles/globals.css";

const App = ({ Component, pageProps }: any) => {
  return (
    <Layout>
      <Component {...pageProps} />
      <style jsx global>{`
        .active {
          color: red;
        }
      `}</style>
    </Layout>
  );
};

export default App;
