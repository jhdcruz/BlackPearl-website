import React from "react";
import styled from "styled-components";
// * Components Import
import PageLink from "./pageLink";

export const NavBar = styled.nav`
  margin-bottom: 30px;
  display: block;

  &.is-transparent {
    background-color: transparent;
    background-image: none;
  }
`;

export const NavCenter = styled.div`
  justify-content: center;
  text-align: center;
  color: whitesmoke;
  font-size: 12.5px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1.4px;

  .navbar-item {
    color: white;

    :hover,
    .active {
      border-top: 2px solid #555;
    }
  }

  .active {
    border-top: 2px solid #222;
    color: #333;
    font-size: 15px;
  }
`;

export default function Nav() {
  // ? Hamburger Menu toggler
  function navActive() {
    const navBurger = document.querySelector(".navbar-burger");
    const navMenu = document.querySelector(".navbar-menu");

    navBurger.classList.toggle("is-active");
    navMenu.classList.toggle("is-active");
  }

  return (
    <NavBar
      className="navbar is-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          onClick={navActive}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div className="navbar-menu" />

      {/* Actual Nav */}
      <NavCenter className="navbar-menu">
        <PageLink page="/menu" theme="navbar-item" name="Menu" />
        <PageLink page="/" theme="navbar-item" name="Home" />
        <PageLink page="/about" theme="navbar-item" name="About" />
      </NavCenter>

      <div className="navbar-menu" />
    </NavBar>
  );
}
