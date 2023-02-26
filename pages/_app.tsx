import Navbar from "@/components/navigation/Navbar";
import type { AppProps } from "next/app";
import "../styles/global.css";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
