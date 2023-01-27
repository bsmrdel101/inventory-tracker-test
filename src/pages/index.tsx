import React from "react";
import Inventory from "../components/Inventory";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title="Home">
      <div className="home">
        <h1>Inventory</h1>
        <Inventory />
      </div>
    </Layout>
  );
}
