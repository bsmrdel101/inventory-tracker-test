import React, { ReactNode } from "react";
import Head from "next/head";


interface Props {
  title: string
  children: ReactNode
}

export default function Layout({ title, children }: Props) {
  const titleName = `${title} | Inventory Manager`;

  return (
    <div>
      <Head>
        <title>{ titleName }</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      { children }
    </div>
  );
}
