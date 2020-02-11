import React from "react";
import "dependency/bulma/css/bulma.min.css";
import styled, { createGlobalStyle } from "styled-components";

import Branding from "images/brand.svg";
import PageLink from "./pageLink";

/*
 * ===================
 * Component Style
 * ===================
 */
const GlobalStyle = createGlobalStyle`
  .column {
  width: max-content;
  }
`;

const FooterBar = styled.footer`
  margin-top: 20%;
  background-color: rgba(40, 40, 40, 0.85) !important;
  box-shadow: 0 0 6px deeppink;
  padding: 1rem 10% !important;
`;

const WebBrand = styled.div`
  font-size: 1.3rem;
  color: rgba(255, 128, 162, 1);
  text-align: center;
  margin-top: 3.1rem;

  a {
    text-align: center;
  }

  .branding {
    height: 3rem;
    margin: 0;
  }

  .footer-routes {
    a {
      color: deeppink;
      text-align: center !important;
      margin: 7px auto !important;
      width: max-content;
      display: inline-block;
      font-style: oblique;

      :hover {
        background-color: rgba(30, 30, 30, 0.8);
      }
    }
  }
`;

const GitHub = styled.a`
  font-size: 0.9rem;
  color: rgba(255, 115, 162, 0.85);
  text-shadow: 0 0 6px #323232;
  text-align: center;
  width: max-content;
  margin: 0 auto 5px auto;

  :hover {
    text-decoration: none;
    color: deeppink;
    cursor: help;
  }
`;

const AdditionalInfoContent = styled.div`
  margin: 9% auto !important;

  a,
  p {
    font-size: 1.1rem;
    color: rgba(255, 128, 162, 1);
    margin: 6px auto;
  }

  i {
    color: deeppink;
    margin: 0 5px;
  }
`;

const Contact = styled.h4`
  font-size: 1.6rem;
  color: rgba(255, 128, 162, 1);
  margin: 6px auto;
  font-weight: bold;
`;

/*
 * ===================
 * Component
 * ===================
 */
export default function Footer() {
  return (
    <FooterBar className="hero-footer">
      <div className="columns">
        <div className="column">
          <WebBrand className="container">
            <img
              src={Branding}
              className="branding"
              alt="BlackPearl in your area!"
            />
            <br />
            <span>In Your Area!</span>
            {/* Pages Link/Route */}
            <div className="footer-routes">
              <PageLink page="/" theme="navbar-item" name="Home" />
              <PageLink page="/menu" theme="navbar-item" name="Menu" />
              <PageLink page="/events" theme="navbar-item" name="Events" />
              <PageLink page="/about" theme="navbar-item" name="About" />
              <PageLink page="/contact" theme="navbar-item" name="Contact" />
            </div>
          </WebBrand>
          <GitHub
            href="https://github.com/jhdcruz/BlackPearl-website"
            className="gh-redirect"
          >
            Copyright &copy; 2020 | BlackPearl in your Area!
          </GitHub>
        </div>
        <div className="column">
          <div className="container">
            <AdditionalInfoContent>
              <Contact>Contact Information:</Contact>
              <a href="https://facebook.com/BlackPearl-in-your-area-419571681980696/">
                <i className="fab fa-facebook-square" /> BlackPearl in your
                Area!
              </a>
              <p />
              <a href="https://instagram.com/blackpearlinyourarea/">
                <i className="fab fa-instagram" /> @blackpearlinyourarea
              </a>
              <p>
                <i className="fas fa-phone" />
                (+63) 918-627-3555
              </p>
              <a href="https://her.is/2smE9v2">
                <i className="fas fa-map-marker-alt" /> Blk 3 Lt 2, Mahogany
                Drive, Camella Homes, Seville, Habay 2. Imus, Cavite,
                Philippines.
              </a>
            </AdditionalInfoContent>
          </div>
        </div>
      </div>
    </FooterBar>
  );
}
