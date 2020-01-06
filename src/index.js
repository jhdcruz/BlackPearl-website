// ! High Level imports
import React from "dependency/react";
import ReactDOM from "dependency/react-dom";

// * Components Import
import BgParticles from "components/bgParticles";
import Wrapper from "layouts/Wrapper";
import Footer from "components/footer";
import styled, { createGlobalStyle } from "styled-components";

/*
 * ===================
 * Component Style
 * ===================
 */
const GlobalStyle = createGlobalStyle`
  body,
  html {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: "Kanit", "Segoe UI", sans-serif;
    background-color: #323232;
    overflow-x: hidden !important;
    overflow-y: auto !important;
  }

  .hero {
    margin: 0;
    padding: 0;
  }

  .hero-body {
    padding: 0 1.5rem !important;
  }

  .button {
    margin: 3px 6px auto 0;
    padding: 0.8em;
    color: #fff;
    border-color: #fff;
    background-color: transparent;
    vertical-align: middle;

    i,
    svg {
      margin: auto 6px auto auto;
    }
  }

  .button.is-hovered,
  .button:hover {
    border-color: #3273dc;
    color: #3273dc;
  }
`;

const MainContent = styled.div`
  z-index: 2;
`;

/*
 * ===================
 * Components Render
 * ===================
 */
ReactDOM.render(
  <>
    <BgParticles />
    <GlobalStyle />
    <MainContent className="hero">
      <Wrapper />
      <Footer />
    </MainContent>
  </>,
  document.getElementById("root")
);
