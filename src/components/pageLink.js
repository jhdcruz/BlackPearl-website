import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

/*
 * =====================
 * React-router's Link
 * =====================
 */
const ButtonLink = styled(NavLink)`
  padding: 3px 13px !important;
`;

export default function PageLink(props) {
  return (
    <ButtonLink to={props.page} className={props.theme}>
      <i className={props.icon} /> {props.name}
    </ButtonLink>
  );
}
