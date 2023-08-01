import Layout from "../components/layout/Layout";
import "../styles/globals.css";

// act as a root component
// will change whenever we navigate from Page A to Page B
//function MyApp ({prop that holds the actual page content, props our pages might be getting})
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
