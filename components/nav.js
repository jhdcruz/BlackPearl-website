import React from "react";

import Navbar from "react-bulma-components/lib/components/navbar";
import { createGlobalStyle } from "styled-components";

// * Styles
const NavStyle = createGlobalStyle`
  nav {
    margin:0;
    padding: 0;
  }

  a {
    color: whitesmoke;
    text-decoration: none;
    font-size: 18px;

    :hover {
      color: #E06ED7 !important;
    }
    &.active {
      color: #FF7DF4 !important;
    }
  }
`;

// * Routes
const links = [
  { href: "/menu", label: "Our Menu" },
  { href: "/about", label: "About Us" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <Navbar transparent={true}>
    <NavStyle />
    <Navbar.Brand>
      <Navbar.Item renderAs="a" href="/">
        <img
          src="/brand.svg"
          alt="BlackPearl | Home of the Bubble Tea Shop in Bacoor"
          width="auto"
          height="auto"
        />
      </Navbar.Item>
      <Navbar.Burger />
    </Navbar.Brand>
    <Navbar.Menu>
      <Navbar.Container position="end">
        {links.map(({ key, href, label }) => (
          <Navbar.Item href={href} key={key}>
            {label}
          </Navbar.Item>
        ))}
      </Navbar.Container>
    </Navbar.Menu>
  </Navbar>
);

export default Nav;
