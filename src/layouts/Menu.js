import React from "react";
import "dependency/bulma/css/bulma.min.css";
import styled from "styled-components";
import "dependency/@fortawesome/fontawesome-free/css/all.min.css";
import MenuData from "./data/menu.data";

const ContentWrapper = styled.div`
  margin: 1.5vh auto !important;
  padding: 1rem 3rem;
`;

const Tables = styled.div`
  margin: 0 auto !important;

  table {
    margin: 0 auto !important;
  }

  .combined-table {
    display: block !important;
  }
`;

const Caption = styled.h6`
  text-align: center;
  font-size: 20px;
`;

/*
 * Menu Tables
 * Data are fetched from JSON file (menu.data.json)
 */
function MilkteaMenu() {
  return (
    <div className="column">
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
    </div>
  );
}

function AddOn() {
  return (
    <div className="column combined-table">
      // * Table for Sinkers Menu
      <table className="table is-bordered column">
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
      // * Table for Coolers Menu
      <table className="table is-bordered column">
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
    </div>
  );
}

export default function Menu() {
  return (
    <ContentWrapper className="hero-body">
      <Tables className="columns is-gapless">
        <MilkteaMenu />
        <AddOn />
      </Tables>
      <Caption>Prices are listed in Php. (&#8369;)</Caption>
    </ContentWrapper>
  );
}
