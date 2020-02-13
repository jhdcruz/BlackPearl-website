import React from "react";
import styled from "styled-components";

// * Components Import
import PageLink from "./pageLink";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

// * Asset Import
import Branding from "images/brand.svg";

/*
 * ===================
 * Component Style
 * ===================
 */
const NavBar = styled.nav`
  margin-bottom: 30px;
  background-color: rgba(40, 40, 40, 0.85) !important;
  box-shadow: 0 0 6px deeppink;

  .navbar-burger {
    color: #ff80a2 !important;
  }

  &.is-transparent {
    background-color: transparent;
    background-image: none;
  }

  .is-active {
    background: rgba(40, 40, 40, 0.85);
    text-align: center;

    a {
      margin: 3px;
      display: inline-block;
      width: max-content;

      :hover {
        background-color: rgba(0, 0, 0, 0.85) !important;
        border-radius: 8px;
      }

      :visited {
        background-color: rgba(20, 20, 20, 0.85) !important;
      }
    }
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
  font-size: 15px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1.4px;

  .navbar-item {
    color: #ff80a2;
    text-shadow: 0 1px 9px #ff80a2;

    :hover {
      color: #ff80a2 !important;
    }

    &.active,
    &.visited {
      color: #ff80a2;
    }
  }
`;

/*
 * ===================
 * Component
 * ===================
 */
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
          <PageLink page="/events" theme="navbar-item" name="Events" />
          <PageLink page="/about" theme="navbar-item" name="About" />
          <PageLink page="/contact" theme="navbar-item" name="Contact" />
        </div>
      </NavEnd>
    </NavBar>
  );
}
