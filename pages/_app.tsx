import "../styles/globals.css";
import "react-datepicker/dist/react-datepicker.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#FEF452] to-[#942F70]">
      <div className="pr-[82px] pl-28 pt-[22px] pb-[100px]">
        <Header />
        <Component {...pageProps} />
      </div>
    </div>
  );
}
