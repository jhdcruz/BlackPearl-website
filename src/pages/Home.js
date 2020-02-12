import React from "react";
import { Route } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import "dependency/@fortawesome/fontawesome-free/css/all.min.css";

// * Component Imports
import PageLink from "components/pageLink";
import Footer from "components/footer";

// * Layouts Import
import Menu from "./Menu";
import Events from "./Events";
import About from "./About";
import Contact from "./Contact";

/*
 * ===================
 * Components Style
 * ===================
 */
const ContentWrapper = styled.div`
  margin: 12% auto 15% auto;
  text-align: center;

  @media screen and (max-width: 720px) {
    margin: 4vh auto 10vh auto;
  }
`;

const Title = styled.h3`
  color: rgba(38, 38, 38, 0.95);
  text-shadow: 0 0 6px rgba(255, 118, 162, 0.8);
  font-weight: bold;
  text-transform: uppercase;
  font-size: 4.5rem;
  line-height: 1.1;
`;

const Subtitle = styled.h6`
  color: rgba(255, 128, 162, 1) !important;
  text-shadow: -1px 3px 3px #222;
  font-weight: 600 !important;
  font-size: 1.3rem !important;
  margin: 4.5px 0 16px 0;
`;

const ButtonGroup = styled.div`
  display: block !important;
  justify-content: center !important;
  text-align: center;
  margin: 0 auto;

  a.button {
    margin: 5px;
    background-color: rgba(50, 50, 50, 0.9);
    border: 1px solid rgba(255, 128, 162, 1);
    border-radius: 30px;
    color: rgba(255, 128, 162, 1);
    text-transform: uppercase;
    font-weight: bold;
    font-size: 15px;
    box-shadow: 0 0 4px rgba(255, 128, 162, 1);

    :hover {
      color: rgba(255, 128, 162, 0.9);
      background-color: rgba(60, 60, 60, 0.95);
    }
  }
`;

// ? Media Queries
const MediaQuery = createGlobalStyle`
  @media screen and (max-width: 720px) {
    h3 {
      font-size: 3.3rem !important;
      margin-top: 8% !important;
    }

    h6 {
      font-size: 1.2rem !important;
    }
  }
`;

/*
 * ===================
 * Components
 * ===================
 */
function Intro() {
  return <Title className="header">BlackPearl In Your Area!</Title>;
}

function SubIntro() {
  return (
    <Subtitle className="subtitle">
      Home of the Best Bubble Tea Shop in Bacoor, Cavite.
    </Subtitle>
  );
}

export default function Home() {
  return (
    <>
      <ContentWrapper className="hero-body">
        {/* Mobile Styles */}
        <MediaQuery />

        {/* Main Content */}
        <div className="container">
          <Intro />
          <SubIntro />
          <ButtonGroup className="field is-grouped">
            <PageLink
              page="/menu"
              theme="button is-outlined"
              name="Our Menu"
              icon="far fa-list-alt"
            />
            <PageLink
              page="/events"
              theme="button is-outlined"
              name="Promos & Events"
              icon="fas fa-calendar-alt"
            />
            <PageLink
              page="/about"
              theme="button is-outlined"
              name="About Us"
              icon="fas fa-user-friends"
            />
            <PageLink
              page="/contact"
              theme="button is-outlined"
              name="Contact us"
              icon="fas fa-envelope"
            />
          </ButtonGroup>
        </div>

        {/* Button Redirects/Routes */}
        <div className="mainContent">
          <Route path="/menu" component={Menu} />
          <Route path="/about" component={About} />
          <Route path="/events" component={Events} />
          <Route path="/contact" component={Contact} />
        </div>
      </ContentWrapper>
      <Footer />
    </>
  );
}
