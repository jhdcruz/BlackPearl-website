import React from "react";

import Particles from "react-particles-js";
import particlesConfig from "./data/particlesjs-config.json";

import { createGlobalStyle } from "styled-components";

/*
 * ===================
 * Component Style
 * ===================
 */
const ParticlesBg = createGlobalStyle`
  canvas,
  .particle-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100% !important;
    max-height: 100% !important;
    opacity: 0.85;
    overflow: hidden !important;
    z-index: 0;
  }
`;

/*
 * ===================
 * Component
 * ===================
 */
export default function bgParticles() {
  return (
    <>
      <ParticlesBg />
      <Particles
        canvasClassName="particle-bg"
        className="bgparticles"
        params={particlesConfig}
      />
    </>
  );
}
