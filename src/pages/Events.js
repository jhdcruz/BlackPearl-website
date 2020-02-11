import React from "react";
import styled from "styled-components";
import EventsCard from "components/eventsCard";

const Notice = styled.p`
  color: rgba(255, 128, 162, 1) !important;
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  text-shadow: -1px 3px 2px #323232;
  margin: 2.5rem auto;
  line-height: 1.1;
  display: block;
`;

export default function Events() {
  return (
    <>
      <Notice>Upcoming Promos & Events</Notice>
      <EventsCard />
    </>
  );
}
