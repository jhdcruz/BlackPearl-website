import React from "react";
import { HashRouter, Route } from "react-router-dom";
import { AnimatedSwitch, spring } from "react-router-transition";
import { createGlobalStyle } from "styled-components";
import "dependency/bulma/css/bulma.min.css";

// * Components Import
import Nav from "../components/nav";

// * Pages Import
import Intro from "./Home";
import Menu from "./Menu";
import Events from "./Events";
import About from "./About";
import Contact from "./Contact";
import FormSuccess from "./Success";

/*
 * ===================
 * Component
 * ===================
 */
const RouterWrapper = createGlobalStyle`
  .routerContent {
    position: relative;
  }

  .routerContent > div {
    position: absolute;
    width: 100%;
  }
`;

/*
 * ===================
 * Components
 * ===================
 */
function Router() {
  // ? Map the props
  function mapStyles(styles) {
    return {
      opacity: styles.opacity,
      transform: `scale(${styles.scale})`
    };
  }

  // ? wrap the `spring` helper to use a bouncy config
  function bounce(val) {
    return spring(val, {
      stiffness: 400,
      damping: 65
    });
  }

  const bounceTransition = {
    // ? tart in a transparent, upscaled state
    atEnter: {
      opacity: 0,
      scale: 1.2
    },
    // ? leave in a transparent, downscaled state
    atLeave: {
      opacity: bounce(0),
      scale: bounce(0.8)
    },
    // ? and rest at an opaque, normally-scaled state
    atActive: {
      opacity: bounce(1),
      scale: bounce(1)
    }
  };

  return (
    // * Router Container
    <div className="routerContainer">
      {/* Router Transition */}
      <AnimatedSwitch
        atEnter={bounceTransition.atEnter}
        atLeave={bounceTransition.atLeave}
        atActive={bounceTransition.atActive}
        mapStyles={mapStyles}
        className="routerContent"
      >
        {/* Router Contents */}
        <Route exact path="/" component={Intro} />
        <Route path="/menu" component={Menu} />
        <Route path="/events" component={Events} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/success" component={FormSuccess} />
      </AnimatedSwitch>
    </div>
  );
}

export default function Wrapper() {
  return (
    <div className="hero-head">
      <HashRouter>
        <Nav />
        <RouterWrapper /> {/* <-- Global style for router/routing */}
        <Router />
      </HashRouter>
    </div>
  );
}
