import React from "react";
import Head from "next/head";
// * Components Import
import BgParticles from "../components/bgParticles";
import Nav from "../components/nav";

export default function Index() {
  return (
    <div>
      <Head>
        <title>
          BlackPearl in your Area! | Home of the Bubble Tea Shop in Bacoor,
          Cavite
        </title>
        <link rel="icon" href="/icon.png" />
      </Head>

      <BgParticles />
      <Nav />
    </div>
  );
}
