import React from "react";
import styled from "styled-components";
import EventsCard from "components/eventsCard";
import Footer from "components/footer";

const Notice = styled.p`
  color: rgba(255, 128, 162, 1) !important;
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  text-shadow: -1px 3px 3px #222;
  margin: 1.5rem auto 2rem auto;
  line-height: 1.1;
  display: block;
`;

export default function Events() {
  return (
    <>
      <>
        <Notice>Upcoming Promos & Events</Notice>
        <EventsCard />
      </>
      <Footer />
    </>
  );
}
