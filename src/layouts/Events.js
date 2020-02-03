import React from "react";
import styled from "styled-components";

const Notice = styled.h4`
  color: rgba(255, 128, 162, 1) !important;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  text-shadow: -1px 3px 2px #323232;
  margin: 12rem auto 0 auto;
  line-height: 1.1;
  display: block;
`;

export default function Events() {
  return <Notice>No Current Events...</Notice>;
}
