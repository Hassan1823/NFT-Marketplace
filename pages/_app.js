import "../styles/globals.css";
import { NavBar, Footer } from "../components/componentindex";
const MyApp = ({ Component, pageProps }) => (
  <div>
    <NavBar />
    <Footer />
    <Component {...pageProps} />;
  </div>
);

export default MyApp;
