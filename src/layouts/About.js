import React from "react";
import "dependency/@fortawesome/fontawesome-free/css/all.min.css";
import styled, { createGlobalStyle } from "styled-components";

// Asset Import
import Brand from "images/brand.svg";

/*
 * ===================
 * Components Style
 * ===================
 */

const ContainerCard = createGlobalStyle`
  .CompanyCard {
    background-color: rgba(20, 20, 20, 0.7);
    border-radius: 8px;
    padding: 18px !important;
    vertical-align: middle;
    margin: 4% auto !important;
    max-width: 75% !important;
    height: 45% !important;
  }
`;

const Branding = styled.div`
  color: #ff6c93;
  font-size: 28px;
  margin: 15px auto;
  font-weight: bold;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;

  img {
    width: 22rem;
  }
`;

const CatchPhrase = styled.h2`
  font-size: 22px;
  text-align: center;
  color: #ff6c93;
  font-weight: 600 !important;
  text-shadow: -1px 3px 2px #323232;
`;

const Story = styled.h6`
  padding: 10px calc(25px - 3px);
  margin: 8px auto;
  font-size: 17px;
  color: #ff6c93;
  text-shadow: -1px 3px 2px #323232;
  font-weight: 600 !important;

  strong {
    color: deeppink;
    font-size: 18px;
  }
`;

export default function About() {
  return (
    <div className="container CompanyCard">
      <ContainerCard />
      {/* Left Side */}
      <Branding>
        <img src={Brand} alt="BlackPearl" />
        <br /> In Your Area!
      </Branding>
      <CatchPhrase>
        Home of the Best Bubbles Tea Shop in Bacoor, Cavite.
      </CatchPhrase>
      <Story>
        Founded by <strong>Jay Camagong</strong> and his family on
        <strong> May 2019</strong>. The shop is located at their home,
        <strong>
          {" "}
          Blk 3 Lt 2, Mahogany Drive, Camellia Homes, Seville, Habay 2.
        </strong>{" "}
        Serving refreshing drinks and scrumptious foot at great value for your
        money. With a great variety of milk and fruitteas, snacks, and rice
        toppers to choose from.
      </Story>
    </div>
  );
}
