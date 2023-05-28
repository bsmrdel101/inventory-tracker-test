import React from "react";
import "../styles/globals.scss";


interface Props {
  Component: any
  pageProps: any
}

export default function Application({ Component, pageProps }: Props) {
  return <Component {...pageProps} />; 
}
