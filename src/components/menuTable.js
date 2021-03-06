import React from "react";
import MenuData from "./data/menu.data";
import styled from "styled-components";

/*
 * ===================
 * Components Styles
 * ===================
 */
const MilkteaTable = styled.div`
  margin: 0 auto 0 4rem !important;

  @media screen and (max-width: 720px) {
    margin: 0 !important;
    padding: 25px !important;
  }
`;

const AddOnTable = styled.div`
  table {
    margin: 0 auto;
    display: compact;
    width: 14em;
  }
`;

const Caption = styled.h6`
  text-align: center;
  font-size: 15px;
  margin: 10px 5px 30px 5px;
  padding: 2px;
  font-weight: 500;
  color: #ff4c93;
  border: 1px solid rgba(255, 115, 162, 0.9);
  box-shadow: -1px 2px 5px rgba(255, 112, 162, 0.6);
  background-color: rgba(50, 50, 50, 0.9);
  border-radius: 3px;
`;

/*
 * ===================
 * Components
 ! Data are fetched from JSON file (data/menu.data.json)
 * ===================
 */

// * MilkTea Menu Table
function MilkteaMenu() {
  return (
    <MilkteaTable>
      <table className="table is-bordered">
        <thead>
          <tr>
            <th class="m-title">MilkTea</th>
            <th class="m-title">
              <abbr title="Small">S</abbr>
            </th>
            <th class="m-title">
              <abbr title="Medium">M</abbr>
            </th>
            <th class="m-title">
              <abbr title="Large">L</abbr>
            </th>
            <th class="m-title">
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

// * Add-On Menu Table
function AddOn() {
  return (
    <AddOnTable className="addon-mobile">
      {/* Table for Sinkers Menu */}
      <table className="table is-bordered">
        <thead>
          <tr>
            <th class="m-title">Sinkers</th>
            <th class="m-title">
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
            <th class="m-title">Coolers</th>
            <th class="m-title">
              <abbr title="Medium">M</abbr>
            </th>
            <th class="m-title">
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

export default function MenuTable() {
  return (
    <>
      <MilkteaMenu />
      <AddOn />
    </>
  );
}
