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
  .columns {
    height: max-content;
  }
`;

const FooterBar = styled.footer`
  margin-top: 8.5%;
  background-color: rgba(40, 40, 40, 0.85) !important;
  box-shadow: 0 0 6px deeppink;
  padding: 0.6rem 10% 0.8rem 10% !important;

  @media screen and (max-width: 720px) {
    padding: 0.8rem 10px;

    .addInfo {
      text-align: center;
    }

    h4 {
      font-size: 1.5rem;
    }
  }
`;

const WebBrand = styled.div`
  font-size: 1.3rem !important;
  color: rgba(255, 128, 162, 1);
  text-align: center;
  margin: 3rem auto 0 auto;

  a {
    text-align: center;
  }

  .branding {
    height: 3rem;
    margin: 0;
  }

  .footer-routes {
    i,
    .fas {
      display: none !important;
    }

    a {
      color: deeppink;
      text-align: center !important;
      margin: 7px 0 !important;
      width: max-content !important;
      display: inline-block !important;
      font-style: oblique !important;

      :hover {
        background-color: rgba(30, 30, 30, 0.5);
        border-radius: 6px;
      }
    }
  }

  .legal {
    i,
    .fas {
      display: none !important;
    }

    a {
      font-size: 0.9rem;
      color: rgba(255, 115, 162, 0.85);
      text-align: center !important;
      margin: 8px 0 !important;
      width: max-content !important;
      display: inline-block !important;

      :hover {
        background-color: transparent;
        text-decoration: underline;
        border-radius: 8px;
      }
    }
  }
`;

const GitHub = styled.a`
  font-size: 0.8rem;
  padding: 5px;
  color: rgba(255, 115, 162, 0.85);
  text-shadow: 0 0 6px #323232;
  width: max-content;
  margin: 0 auto 7px auto;
  display: block;

  :hover {
    text-decoration: none;
    color: deeppink;
    cursor: help;
  }
`;

const AdditionalInfoContent = styled.div`
  margin: 2.5rem auto !important;

  a,
  p {
    font-size: 1.1rem;
    color: rgba(255, 128, 162, 1);
    margin: 6px auto;

    :hover {
      color: deeppink;
    }
  }

  i {
    font-size: 1.2rem;
    color: deeppink;
    margin: 0 6px;
  }
`;

const Line = styled.hr`
  display: block;
  margin: 5px auto;
  background: -webkit-gradient(
    radial,
    50% 50%,
    0,
    50% 50%,
    230,
    from(#ff80a2),
    to(rgba(40, 40, 40, 0.3))
  );
`;

const Space = styled.br`
  margin: 6px auto;
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
      <GlobalStyle />
      <GitHub
        href="https://github.com/jhdcruz/BlackPearl-website"
        className="gh-redirect"
      >
        Copyright &copy; 2020 | BlackPearl in your Area!
      </GitHub>
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
            {/* <Line /> */}
            <div className="footer-routes">
              <PageLink page="/" theme="navbar-item" name="Home" />
              <PageLink page="/menu" theme="navbar-item" name="Menu" />
              <PageLink page="/events" theme="navbar-item" name="Events" />
              <PageLink page="/about" theme="navbar-item" name="About" />
              <PageLink page="/contact" theme="navbar-item" name="Contact" />
            </div>
            {/* <Line /> */}
            <div className="legal">
              <PageLink
                page="/terms"
                theme="navbar-item"
                name="Terms and Conditions"
              />
              <PageLink
                page="/privacy"
                theme="navbar-item"
                name="Privacy Policy"
              />
            </div>
          </WebBrand>
        </div>
        <div className="column">
          <div className="container">
            <AdditionalInfoContent className="addInfo">
              <Contact>Contact Information:</Contact>
              <a href="https://facebook.com/BlackPearl-in-your-area-419571681980696/">
                <i className="fab fa-facebook-square" /> BlackPearl in your
                Area!
              </a>
              <Space />
              <a href="https://instagram.com/blackpearlinyourarea/">
                <i className="fab fa-instagram" /> @blackpearlinyourarea
              </a>
              <p>
                <i className="fas fa-phone" />
                (+63) 918-627-3555 <span>(Jay Camagong)</span>
              </p>
              <a href="https://her.is/2smE9v2">
                <i className="fas fa-map-marker-alt" /> Blk 3 Lt 2, Mahogany
                Drive, Camella Homes, Seville, Habay 2. Bacoor City, Cavite,
                Philippines. 4:00PM - 12:00AM daily.
              </a>
            </AdditionalInfoContent>
          </div>
        </div>
      </div>
    </FooterBar>
  );
}
