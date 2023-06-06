import Footer from "@components/Footer";
import Header from "@components/Header";
import { Analytics } from '@vercel/analytics/react';
import { RecoilRoot } from "recoil";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <div className="min-h-screen flex flex-col mx-1 2xl:mx-auto max-w-[1440px]">
        <Header />
        <Component {...pageProps} />
        <Analytics />
        <Footer />
      </div>
    </RecoilRoot>
  );
}

export default MyApp;
