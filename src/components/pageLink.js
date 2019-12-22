import React from "react";
import { NavLink } from "react-router-dom";

export default function PageLink(props) {
  return (
    <NavLink to={props.page} className={props.theme}>
      <i className={props.icon} /> {props.name}
    </NavLink>
  );
}
