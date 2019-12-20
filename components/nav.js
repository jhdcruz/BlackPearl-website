import React, { Component } from "react";

import Navbar from "react-bulma-components/lib/components/navbar";
import { createGlobalStyle } from "styled-components";

// * Styles
const NavStyle = createGlobalStyle`
  nav {
    margin:0;
    padding: 0;
    background-color: #262626 !important;
    opacity: 0.9;
    z-index: 2;
  }

  a {
    color: #ff80a2 !important;
    text-decoration: none;
    font-size: 18px;

    :hover {
      color: #E0708E !important;
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

class Nav extends Component {
  constructor(props) {
    super(props);

    // TODO: Received `false` for a non-boolean attribute `active`.
    // TODO: Failed prop type: Invalid prop `active` of type `string` supplied to `Navbar`, expected `boolean`.
    // Set active state for menu
    this.state = { active: false };
    // Active state manager for menu
    this.handleClick = () => {
      const { active } = this.state;
      this.setState({ active: !active });
    };
  }

  render() {
    return (
      <Navbar transparent={true} active={this.state.active}>
        <NavStyle />
        <Navbar.Brand>
          <Navbar.Item renderAs="a" href="/">
            <img
              src="/brand.svg"
              alt="BlackPearl | Index of the Bubble Tea Shop in Bacoor"
              width="auto"
              height="auto"
            />
          </Navbar.Item>
          <Navbar.Burger
            active={this.state.active}
            onClick={this.handleClick}
          />
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
  }
}

export default Nav;
