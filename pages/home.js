import React from "react";
import Head from "next/head";

// * Components Import
import Nav from "../components/nav";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          BlackPearl in your Area! | Home of the Bubble Tea Shop in Bacoor,
          Cavite
        </title>
        <link rel="icon" href="/icon.png" />
      </Head>

      <Nav />
    </div>
  );
}
