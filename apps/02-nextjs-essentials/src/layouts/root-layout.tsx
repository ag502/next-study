import Head from "next/head";
import { PropsWithChildren } from "react";

import "@/styles/globals.css";

import MainHeader from "@/components/main-header";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Head>
        <title>Next Level Food</title>
        <meta name="Delicious meals, shared by a food-loving community." />
        <link href="/favicon.png" rel="icon" />
      </Head>

      <MainHeader />
      {children}
    </>
  );
}
