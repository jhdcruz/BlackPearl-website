import React from "react";
import Head from "next/head";
import { createGlobalStyle } from "styled-components";
// * Components Import
import Nav from "../components/nav";
import BgParticles from "../components/bgParticles";
import MenuList from "../components/menuList";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Our Menu - BlackPearl in your Area! | Home of the Bubble Tea Shop in
          Bacoor, Cavite
        </title>
      </Head>

      <BgParticles />
      <Nav />
      <MenuList />
    </div>
  );
}
