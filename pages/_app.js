import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
function MyApp({ Component, pageProps }) {
  const [basket, setBasket] = useState([]);
  useEffect(() => {
    setBasket(JSON.parse(localStorage.getItem("basket")) || []);
  }, []);
  return (
    <>
      <ToastContainer
        position="top-center"
        hideProgressBar
        autoClose={5000}
        closeButton={true}
        pauseOnHover
        theme="colored"
        limit={10}
      />
      <Layout basket={basket} setBasket={setBasket}>
        <Component
          {...pageProps}
          data-testid="content-component"
          basket={basket}
          setBasket={setBasket}
        />
      </Layout>
    </>
  );
}

export default MyApp;
