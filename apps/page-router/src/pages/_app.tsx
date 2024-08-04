import "@/styles/globals.css";
import CommonLayout from "@/components/layout/common-layout";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CommonLayout>
      <Component {...pageProps} />
    </CommonLayout>
  );
}
