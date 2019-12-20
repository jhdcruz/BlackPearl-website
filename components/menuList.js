import React from "react";
import Table from "react-bulma-components/lib/components/table";
import MenuData from "./data/menu.data";

// Menu for Milktea
function MilkteaMenu() {
  return (
    <Table>
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
    </Table>
  );
}

// Menu for Sinkers
function SinkersMenu() {
  return (
    <Table>
      <thead>
        <tr>
          <th>Sinkers</th>
          <th>
            <abbr title="Small">Price</abbr>
          </th>
        </tr>
      </thead>
      <tbody>
        {MenuData.menus.Sinkers.map(sinker => (
          <tr key={sinker.id}>
            <th>{sinker.title}</th>
            <td>{sinker.p}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

// Menu for Coolers
function CoolersMenu() {
  return (
    <Table>
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
    </Table>
  );
}

export default function MenuList() {
  return (
    <>
      <MilkteaMenu />
      <SinkersMenu />
      <CoolersMenu />
    </>
  );
}
