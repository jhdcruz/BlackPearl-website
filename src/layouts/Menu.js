import React from "react";
import "dependency/bulma/css/bulma.min.css";
import styled, { createGlobalStyle } from "styled-components";
import "dependency/@fortawesome/fontawesome-free/css/all.min.css";
import MenuData from "./data/menu.data";

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
  }

  th:hover,
  tr:hover {
    background-color: rgba(245, 245, 245, 0.8);
  }
`;

const MediaQuery = createGlobalStyle`
  @media screen and (max-width: 720px) {
    table {
      margin: 0 auto !important;
      padding: 0 !important;
      width: max-content;
    }

    .mobile-container {
      padding: 0 !important;
      margin: 0 auto !important;
      width: max-content;
    }

    .mobile {
      display: block !important;
      width: max-content !important;
    }

    .addon-mobile {
      width: max-content !important;
      margin: 0 auto !important;
    }
}
`;

const MilkteaTable = styled.div`
  margin: 0 !important;
`;

const AddOnTable = styled.div`
  table {
    display: compact;
    width: 13rem;
  }
`;

const Caption = styled.h6`
  text-align: center;
  font-size: 15px;
  margin: 10px 5px 30px 5px;
  padding: 2px;
  font-weight: 500;
  color: #f4f4f4;
  background-color: rgba(50, 50, 50, 0.9);
  border-radius: 3px;
`;

/*
 * Menu Tables
 * Data are fetched from JSON file (menu.data.json)
 */
function MilkteaMenu() {
  return (
    <MilkteaTable>
      <table className="table is-bordered">
        <thead>
          <tr>
            <th>MilkTea</th>
            <th>
              <abbr title="Small">S</abbr>
            </th>
            <th>
              <abbr title="Medium">M</abbr>
            </th>
            <th>
              <abbr title="Large">L</abbr>
            </th>
            <th>
              <abbr title="Litre">Litre</abbr>
            </th>
          </tr>
        </thead>
        <tbody>
          {MenuData.menus.Milktea.map(milktea => (
            <tr key={milktea.id}>
              <th>{milktea.title}</th>
              <td>{milktea.s}</td>
              <td>{milktea.m}</td>
              <td>{milktea.l}</td>
              <td>{milktea.x}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </MilkteaTable>
  );
}

function AddOn() {
  return (
    <AddOnTable className="addon-mobile">
      {/* Table for Sinkers Menu */}
      <table className="table is-bordered">
        <thead>
          <tr>
            <th>Sinkers</th>
            <th>
              <abbr title="Price">Price</abbr>
            </th>
          </tr>
        </thead>
        <tbody>
          {MenuData.menus.Sinkers.map(sinker => (
            <tr key={sinker.id}>
              <th>{sinker.title}</th>
              <td>{sinker.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Table for Coolers Menu */}
      <table className="table is-bordered">
        <thead>
          <tr>
            <th>Coolers</th>
            <th>
              <abbr title="Medium">M</abbr>
            </th>
            <th>
              <abbr title="Large">L</abbr>
            </th>
          </tr>
        </thead>
        <tbody>
          {MenuData.menus.Coolers.map(cooler => (
            <tr key={cooler.id}>
              <th>{cooler.title}</th>
              <td>{cooler.m}</td>
              <td>{cooler.l}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Caption>Prices are listed in Php. (&#8369;)</Caption>
    </AddOnTable>
  );
}

export default function Menu() {
  return (
    <ContentWrapper className="hero-body mobile-container">
      <MediaQuery />
      <Tables className="mobile">
        <MilkteaMenu />
        <AddOn />
      </Tables>
    </ContentWrapper>
  );
}
