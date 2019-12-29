import React from "react";
import styled from "styled-components";
// * Components Import
import PageLink from "./pageLink";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Branding from "images/brand.svg";

const NavBar = styled.nav`
  margin-bottom: 30px;
  background-color: rgba(40, 40, 40, 0.8) !important;

  &.is-transparent {
    background-color: transparent;
    background-image: none;
  }
`;

const WebBrand = styled.div`
  vertical-align: center;

  .branding {
    height: 30px;
    margin: 0;
  }
`;

const NavEnd = styled.div`
  color: whitesmoke;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1.4px;

  .navbar-item {
    color: white;

    :hover {
      border-top: 2px solid #c7637e !important;
      border-bottom: 2px solid #c7637e !important;
      color: #ff80a2 !important;
    }
  }

  .active {
    border-top: 2px solid #ff80a2 !important;
    border-bottom: 2px solid #ff80a2 !important;
    color: #ff80a2 !important;
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
        {/* Branding / Logo */}
        <WebBrand className="navbar-item">
          <NavLink to="/" className="branding">
            <img src={Branding} alt="BlackPearl" width="190" height="auto" />
          </NavLink>
        </WebBrand>

        {/* Burger Menu */}
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

      {/* Routes */}
      <NavEnd className="navbar-menu">
        <div className="navbar-end">
          <PageLink page="/" theme="navbar-item" name="Home" />
          <PageLink page="/menu" theme="navbar-item" name="Menu" />
          <PageLink page="/about" theme="navbar-item" name="About" />
        </div>
      </NavEnd>
    </NavBar>
  );
}
