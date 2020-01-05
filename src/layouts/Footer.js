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
  color: #c7c7c7;
  text-align: center;
  margin: 0 auto;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(50, 50, 50, 0.7);

  :hover {
    text-decoration: none;
    color: #d9d9d9;
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
        Copyright &copy; 2019 | Joshua Hero Dela Cruz
      </GitHub>
    </footer>
  );
}
