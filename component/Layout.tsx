import React from "react";
import Head from "next/head";

interface Props {
  children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <div>
      <Head>
        <title>NFT Drop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </div>
  );
};

export default Layout;
