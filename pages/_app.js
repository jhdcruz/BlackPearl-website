import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";

/*
 *
 * App/Website Theme Provider
 *
 */

const theme = {
  colors: {
    primary: "#FF7DF4",
    accent: "#222222"
  }
};

export default class AppTheme extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
