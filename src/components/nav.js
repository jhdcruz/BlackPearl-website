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
  box-shadow: 0 0 6px #ffa1c6;

  .navbar-burger {
    color: #ff869f !important;
  }

  &.is-transparent {
    background-color: transparent;
    background-image: none;
  }

  .is-active {
    background-color: rgba(40, 40, 40, 0.6);
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
    color: #ffa1c6;
    text-shadow: 0 1px 9px #ffa1c6;

    :hover {
      color: #ff869f !important;
    }

    &.active,
    &.visited {
      color: #ffa1c6;
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
          <PageLink page="/about" theme="navbar-item" name="About Us" />
          <PageLink page="/contact" theme="navbar-item" name="Contact Us" />
        </div>
      </NavEnd>
    </NavBar>
  );
}
