import NavBar from "../components/NavBar";
import "../styles/globals.css";

const App = ({ Component, pageProps }: any) => {
  return (
    <>
      <h1>Header</h1>

      <NavBar />
      <Component {...pageProps} />

      <h1>Footer</h1>

      <style jsx global>{`
        .active {
          color: red;
        }
      `}</style>
    </>
  );
};

export default App;
