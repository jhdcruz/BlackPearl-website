import React from "react";

// * Components Import
import Fonts from "../components/fonts";
import Home from "./home";

class Index extends React.Component {
  componentDidMount() {
    Fonts();
  }

  render() {
    return <Home />;
  }
}

export default Index;
