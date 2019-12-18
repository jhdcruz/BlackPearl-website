import React from "react";
import Head from "next/head";
import { createGlobalStyle } from "styled-components";
// * Components Import
import Nav from "../components/nav";
import BgParticles from "../components/bgParticles";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #222222;
  }
`;

export default function About() {
  return (
    <div>
      <Head>
        <title>
          About us - BlackPearl in your Area! | Home of the Bubble Tea Shop in
          Bacoor, Cavite
        </title>
      </Head>

      <GlobalStyle />
      <BgParticles />
      <Nav />
    </div>
  );
}
