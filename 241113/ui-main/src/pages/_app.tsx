import "@/styles/globals.css";
import { ReactNode } from "react";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import GlobalLayout from "@/components/global-layout";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactNode) => ReactNode;
};

export default function App({
  Component,
  pageProps,
}: AppProps & { Component: NextPageWithLayout }) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);
  return <GlobalLayout>{getLayout(<Component {...pageProps} />)}</GlobalLayout>;
}
