// ! High Level imports
import React from "dependency/react";
import ReactDOM from "dependency/react-dom";

// * Components Import
import BgParticles from "components/bgParticles";
import Wrapper from "pages/Wrapper";
import styled, { createGlobalStyle } from "styled-components";

// Custom Fonts Import
import Kanit from "./shared/fonts/Kanit/Kanit-Regular.ttf";
import KaushanScript from "./shared/fonts/Kaushan_Script/KaushanScript-Regular.ttf";

/*
 * ===================
 * Component Style
 * ===================
 */
const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Kanit";
  src: url(${Kanit}) format('truetype');
}

@font-face {
  font-family: "Kaushan Script";
  src: url(${KaushanScript}) format('truetype');
}

  body,
  html {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: "Kanit", "Segoe UI", sans-serif;
    background-color: #323232;
    background-position: center;

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
    </MainContent>
  </>,
  document.getElementById("root")
);
