import React from "react";
import styled from "styled-components";

import t1 from "images/reviews/1.jpg";
import t2 from "images/reviews/2.jpg";
import t3 from "images/reviews/3.jpg";

/*
 * ===================
 * Components Style
 * ===================
 */

const Media = styled.div`
  margin: 10px auto !important;
  text-align: center !important;

  figure {
    margin: 7px auto !important;
  }
`;

const Profile = styled.img`
  border-radius: 50%;
  margin: 5px auto !important;
  display: block !important;
`;

const Recommendation = styled.p`
  color: rgba(255, 128, 162, 1) !important;
  text-shadow: -1px 3px 2px #323232;
  text-align: center;

  span {
    color: #ff4c93;
  }
`;

const ReviewCard = styled.div`
  background-color: transparent;
  margin: 0 auto;
  text-align: center;

  .card-content {
    padding-top: 0;
  }

  .testimonial {
    margin: 0 auto;
    padding: 5px 10px;
  }
`;

const Reviewer = styled.p`
  color: rgba(255, 128, 162, 1) !important;
  text-shadow: -1px 3px 2px #323232;
  text-align: center;
`;

const ReviewContent = styled.div`
  font-family: "Segoe UI", "Kanit", sans-serif;
  color: rgba(255, 128, 162, 1) !important;
  text-shadow: -1px 3px 2px #323232;
  padding: 0;
  font-style: oblique;
`;

const ReviewDate = styled.h6`
  color: #ff4c93 !important;
  text-shadow: -1px 3px 2px #323232;
  margin: 10px auto auto auto;
`;

const Line = styled.hr`
  display: block;
  background: -webkit-gradient(
    radial,
    50% 50%,
    0,
    50% 50%,
    580,
    from(#ff80a2),
    to(rgba(40, 40, 40, 0.3))
  );
`;

/*
 * ===================
 * Component
 * ===================
 */
export default function TestimonialContent() {
  return (
    <>
      <Line />
      <ReviewCard className="card">
        <div className="card-content">
          {/* 1st Review */}
          <div className="testimonial">
            <Media>
              <figure className="image is-48x48">
                <Profile src={t1} alt="Profile Image" />
              </figure>
              <div className="media-content">
                <Reviewer className="title is-4">Jewel Alcantara</Reviewer>
                <Recommendation className="subtitle is-6">
                  recommends <span>BlackPearl in your area</span>.
                </Recommendation>
              </div>
            </Media>
            <ReviewContent className="content">
              "My favorite takoyaki. Super Sarap and sulit na sulit. Hindi
              Tinipid and Legit na Octopus at Cheese ang laman. And The sauce
              Superb talaga!!!"
              <br />
              <ReviewDate>22 Jan 2020 - 23:32</ReviewDate>
            </ReviewContent>
          </div>

          <Line />

          {/* 2nd Review */}
          <div className="testimonial">
            <Media>
              <figure className="image is-48x48">
                <Profile src={t2} alt="Profile Image" />
              </figure>
              <div className="media-content">
                <Reviewer className="title is-4">Luisa Jose Reyes</Reviewer>
                <Recommendation className="subtitle is-6">
                  recommends <span>BlackPearl in your area</span>.
                </Recommendation>
              </div>
            </Media>
            <ReviewContent className="content">
              "The best ang milk tea at yung mga silog, the best din... Bacsilog
              and Tapsilog one of my faves... isama na din natin yung super
              sulit na beef pares. mura na masarap pa. salamat sa patuloy na pag
              deliver samin ng masarap na pagkain at milk tea... more menu to
              come. yung takoyaki pag meron ulit..." <br />
              <ReviewDate>17 Jan 2020 - 7:41</ReviewDate>
            </ReviewContent>
          </div>

          <Line />

          {/* 3rd Review */}
          <div className="testimonial">
            <Media>
              <figure className="image is-48x48">
                <Profile src={t3} alt="Profile Image" />
              </figure>
              <div className="media-content">
                <Reviewer className="title is-4">Rosemarie Melgarejo</Reviewer>
                <Recommendation className="subtitle is-6">
                  recommends <span>BlackPearl in your area</span>.
                </Recommendation>
              </div>
            </Media>
            <ReviewContent className="content">
              "Thank you, for always doing such a great effort on bringing us
              our favorites(Bacsilog, Tapsilog, Siomai Rice, Takoyaki and Milk
              Tea) from Bacoor all the way through McKinley. Amidst the hustle,
              you never fail to satisfy our cravings with the very affordable
              and reasonable price. Truly, happiness can be experienced in every
              sip/bite. More Power to BlackPearl In Your Area" <br />
              <ReviewDate>17 Jan 2020 - 9:25</ReviewDate>
            </ReviewContent>
          </div>
        </div>
      </ReviewCard>
    </>
  );
}
