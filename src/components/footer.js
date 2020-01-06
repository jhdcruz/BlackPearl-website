import React from "react";
import "dependency/bulma/css/bulma.min.css";
import styled from "styled-components";

/*
 * ===================
 * Component Style
 * ===================
 */
const GitHub = styled.a`
  font-size: 12.5px;
  color: rgba(255, 115, 162, 0.55);
  text-shadow: 0 0 6px #323232;
  text-align: center;
  margin: 0 auto 5px auto;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: transparent;

  :hover {
    text-decoration: none;
    color: deeppink;
    cursor: help;
  }
`;

/*
 * ===================
 * Component
 * ===================
 */
export default function Footer() {
  return (
    <footer className="hero-footer">
      <GitHub
        href="https://github.com/jhdcruz/BlackPearl-website"
        className="gh-redirect"
      >
        Copyright &copy; 2019 | BlackPearl in your Area!
      </GitHub>
    </footer>
  );
}
