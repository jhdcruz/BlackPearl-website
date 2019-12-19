import React, { Component } from "react";
import Particles from "react-particles-js";
import { createGlobalStyle } from "styled-components";
import particlesData from "./data/particlesjs-config";

const ParticleTheme = createGlobalStyle`
canvas,
  .particle-bg {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.85;
    overflow: hidden !important;
    z-index: 1;
  }
`;

class BgParticles extends Component {
  render() {
    return (
      <>
        <ParticleTheme />
        <Particles params={particlesData} canvasClassName="particle-bg" />
      </>
    );
  }
}

export default BgParticles;
