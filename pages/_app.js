import { Web3ReactProvider } from "@web3-react/core";
import Nav from "../components/nav";
import BottomNav from "../components/bottom_nav";
import App from "next/app";
import "../styles/tailwind.css";

function LandingPage({ Component, pageProps }) {
  return (
    <Web3ReactProvider>
      <div className="flex min-h-screen flex-col">
        <Nav />

        <div className="flex-auto min-w-0 min-h-0 bg-gradient-to-r from-teal-400 to-blue-600">
          <Component {...pageProps} />
        </div>

          <BottomNav />
      </div>

    </Web3ReactProvider>
  );
}

LandingPage.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

export default LandingPage;
