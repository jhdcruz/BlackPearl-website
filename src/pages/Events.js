import React from "react";
import styled from "styled-components";

const Notice = styled.h4`
  color: rgba(255, 128, 162, 1) !important;
  font-size: 3.2rem;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  text-shadow: -1px 3px 2px #323232;
  margin: 14rem auto 0 auto;
  line-height: 1.1;
  display: block;

  @media screen and (max-width: 720px) {
    h4 {
      font-size: 2rem;
    }
`;


// TODO: Make-up Events | Must not be empty
export default function Events() {
  return <Notice>No Current Events...</Notice>;
}