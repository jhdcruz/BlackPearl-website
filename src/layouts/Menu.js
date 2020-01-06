import React from "react";
import "dependency/bulma/css/bulma.min.css";
import styled, { createGlobalStyle } from "styled-components";
import "dependency/@fortawesome/fontawesome-free/css/all.min.css";
// * Components Import
import MenuTable from "components/menuTable";

/*
 * ===================
 * Component Style
 * ===================
 */
const ContentWrapper = styled.div`
  margin: 0 auto;
`;

const Tables = styled.div`
  margin: 0 !important;
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;

  table {
    margin: 10px 5px !important;
    background-color: rgba(50, 50, 50, 0.95);
    box-shadow: 4px 4px 5px rgba(255, 112, 162, 0.25);
  }

  th,
  tr {
    color: rgba(255, 128, 162, 0.9) !important;
    border-color: rgba(255, 115, 162, 0.9) !important;

    :hover {
      background-color: rgba(60, 60, 60, 0.9);
    }
  }

  td {
    color: deeppink !important;
    border-color: rgba(255, 115, 162, 0.9) !important;
  }
`;

const MediaQuery = createGlobalStyle`
  @media screen and (max-width: 720px) {
    table {
      margin: 0 auto !important;
      padding: 0 !important;
      width: 100%;
    }

    .mobile-container {
      padding: 0 !important;
      margin: 0 auto !important;
      width: 100%;
    }

    .mobile {
      display: block !important;
      width: 100%;
    }

    .addon-mobile {
      width: max-content !important;
      margin: 0 auto !important;
    }
}
`;

export default function Menu() {
  return (
    <ContentWrapper className="hero-body mobile-container">
      <MediaQuery />
      <Tables className="mobile">
        <MenuTable />
      </Tables>
    </ContentWrapper>
  );
}
