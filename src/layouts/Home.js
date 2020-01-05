import React from "react";
import { Route } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

// * Component Imports
import Menu from "./Menu";
import About from "./About";
import PageLink from "../components/pageLink";
import "dependency/@fortawesome/fontawesome-free/css/all.min.css";

// * Component Style
const ContentWrapper = styled.div`
  margin: 17.4vh auto;
  text-align: center;
`;

const Title = styled.h3`
  font-weight: bold;
  color: whitesmoke;
  text-transform: uppercase;
  font-size: 58px;
  margin-top: calc(25% - 7rem);
  line-height: 1.1;
`;

const Subtitle = styled.h6`
  color: #e4e4e4 !important;
  font-weight: 400;
  font-size: 1.4rem !important;
  margin: 4.5px 0 16px 0;
`;

const ButtonGroup = styled.div`
  display: block !important;
  justify-content: center !important;
  text-align: center;
  margin: 0 auto;
`;

const OutlineButton = styled(PageLink)`
  background-color: transparent;
  border: whitesmoke;
  border-radius: 8px;
`;

const MediaQuery = createGlobalStyle`

@media screen and (max-width: 720px) {
  h3 {
    font-size: 45px !important;
  }

  h6 {
    font-size: 1.2rem !important;
  }
}
`;

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
    <ContentWrapper className="hero-body">
      {/* Mobile Styles */}
      <MediaQuery />

      {/* Main Content */}
      <div className="container">
        <Intro />
        <SubIntro />
        <ButtonGroup className="field is-grouped">
          <OutlineButton
            page="/menu"
            theme="button is-outlined"
            name="Our Menu"
            icon="far fa-list-alt"
          />
          <OutlineButton
            page="/about"
            theme="button is-outlined"
            name="Our Story"
            icon="fas fa-user-friends"
          />
        </ButtonGroup>
      </div>

      {/* Button Redirects/Routes */}
      <div className="mainContent">
        <Route path="/menu" component={Menu} />
        <Route path="/about" component={About} />
      </div>
    </ContentWrapper>
  );
}
