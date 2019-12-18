import App from "next/app";
import React from "react";

import Fonts from "../components/fonts";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
  margin: 0;
  padding: 0;
  background-color: #E0708E;
  font-family: "Raleway", sans-serif;
  overflow-x: hidden;
  }
`;

export default class GlobalApp extends App {
  componentDidMount() {
    Fonts();
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    );
  }
}
