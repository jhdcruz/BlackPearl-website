import React from "react";
import "dependency/@fortawesome/fontawesome-free/css/all.min.css";
import styled, { createGlobalStyle } from "styled-components";

// Component Imports
import TestimonialContent from "components/testimonialContent";
import Footer from "components/footer";

// Asset Import
import Brand from "images/brand.svg";

/*
 * ===================
 * Components Style
 * ===================
 */

const ContainerCard = createGlobalStyle`
  .columns {
    padding: 20px !important;

    a,
    p {
      color: #ff6c93;
      padding: 8px;
      font-size: 1.2rem;

      :hover {
        color: #ff4c93;
      }
    }

    i {
      font-size: 1.5rem;
      margin: auto 6px;
      padding: 3px;
    }
  }

  .CompanyCard {
    background-color: rgba(20, 20, 20, 0.7);
    color: #ff6c93;
    border-radius: 8px;
    padding: 20px 10px !important;
    vertical-align: middle;
    margin: 15px auto 30px auto !important;
    height: max-content !important;
  }

  .TestimonialSection {
    margin: 0 auto 30px auto !important;
  }

`;

const Branding = styled.div`
  color: #ff6c93;
  font-size: 28px;
  margin: 15px auto;
  font-weight: bold;
  text-align: center;
  vertical-align: middle;
  font-family: "Kaushan Script", "Kanit", "Segoe UI", sans-serif;
  user-select: none;

  img {
    width: 22rem;
  }
`;

const CatchPhrase = styled.h2`
  font-size: 22px;
  text-align: center;
  font-weight: 600 !important;
  text-shadow: -1px 3px 2px #323232;
`;

const Story = styled.h6`
  padding: 10px calc(25px - 3px);
  margin: 8px auto;
  font-size: 17px;
  text-indent: 3em;
  color: #ffa1c6;
  text-shadow: -1px 3px 2px #323232;
  font-weight: 600 !important;

  strong {
    color: #ff6c93;
    font-size: 18px;
  }
`;

const Label = styled.h3`
  line-height: 1;
  margin-top: 20px;
  font-size: 2rem;
  text-align: center;
  text-transform: uppercase;
  text-shadow: -1px 3px 2px #323232;
`;

const SubLabel = styled.h6`
  color: #ffa1c6;
  font-size: 1.2rem;
  text-align: center;
  text-shadow: -1px 3px 2px #323232;
  margin-bottom: 20px;
`;

function BusinessCard() {
  return (
    <div>
      <div className="container CompanyCard">
        <Branding>
          <img src={Brand} alt="BlackPearl" />
          <br /> In Your Area!
        </Branding>
        <CatchPhrase>
          Home of the Best Bubble Tea Shop in Bacoor, Cavite.
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
          toppers to choose from. Operating hours is from{" "}
          <strong>4:00pm</strong> to <strong>12:00am</strong> everyday.
        </Story>
      </div>
      {/* <AdditionalInfo /> */}
    </div>
  );
}

function Testimonials() {
  return (
    <>
      <div className="container CompanyCard TestimonialSection">
        <Label>Testimonials</Label>
        <SubLabel>What our customers says about us...</SubLabel>
        <TestimonialContent />
      </div>
    </>
  );
}

export default function About() {
  return (
    <>
      <ContainerCard />
      <BusinessCard />
      <Testimonials />
      <Footer />
    </>
  );
}
