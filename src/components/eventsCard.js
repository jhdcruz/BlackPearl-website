import React from "react";
import styled from "styled-components";

// Events Images
import Graduation from "images/events/graduation.jpg";
import Summer from "images/events/summer.jpg";
import Valentine from "images/events/valentine.jpg";

const Card = styled.div`
  background-color: rgba(40, 40, 40, 0.9);
  margin: 25px auto !important;
  border-radius: 7px;
  box-shadow: 1px 2px 5px rgba(255, 128, 162, 1);
  max-width: 28.5% !important;
  height: max-content;

  .card-image {
    width: 23rem;
    margin: 0 auto;
    height: 13rem;

    img {
      height: 13rem;
    }
  }

  .title {
    font-size: 1.85em;
  }

  .subtitle {
    color: deeppink;
  }

  .card-footer {
    border-color: rgba(255, 128, 162, 1);
  }

  p {
    color: #ffb5d0;
    border-color: rgba(255, 128, 162, 1) !important;
  }

  a {
    background-color: transparent;
  }

  i {
    margin: 0 4px;
  }

  button {
    font-size: 1rem;
    color: deeppink;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-weight: bold;

    span {
      color: #ffc5e0;
    }
  }

  @media screen and (max-width: 720px) {
    max-width: 87% !important;
  }
`;

export default function EventsCard() {
  return (
    <div className="columns">
      <Card className="card column">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={Summer} alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content">
          <p className="title">
            Beat the heat this Summer with our coolers, 10% Discount on Coolers.
          </p>
          <p className="subtitle">Apr 1-5 | 9:00AM - 10:00PM</p>
        </div>
        <footer className="card-footer">
          <a
            className="card-footer-item"
            href="https://www.facebook.com/BlackPearl-in-your-area-419571681980696/"
          >
            <button>
              <span>
                <i className="fab fa-facebook-square" />
              </span>
              Facebook
            </button>
          </a>
          <a
            className="card-footer-item"
            href="https://www.instagram.com/blackpearlinyourarea/"
          >
            <button>
              <span>
                <i className="fab fa-instagram" />
              </span>
              Instagram
            </button>
          </a>
        </footer>
      </Card>
      <Card className="card column">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={Graduation} alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content">
          <p className="title">
            Celebrate your Graduation with a FREE Large Oreo Cream Cheese.
          </p>
          <p className="subtitle">Mar 28-31 | 9:00AM - 10:00PM</p>
        </div>
        <footer className="card-footer">
          <a
            className="card-footer-item"
            href="https://www.facebook.com/BlackPearl-in-your-area-419571681980696/"
          >
            <button>
              <span>
                <i className="fab fa-facebook-square" />
              </span>
              Facebook
            </button>
          </a>
          <a
            className="card-footer-item"
            href="https://www.instagram.com/blackpearlinyourarea/"
          >
            <button>
              <span>
                <i className="fab fa-instagram" />
              </span>
              Instagram
            </button>
          </a>
        </footer>
      </Card>
      <Card className="card column">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={Valentine} alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content">
          <p className="title">
            Treat each other this Valentines with FREE 1 Large Wintermelon for
            couples!
          </p>
          <p className="subtitle">Feb 14-15 | 9:00AM - 10:00PM</p>
        </div>
        <footer className="card-footer">
          <a
            className="card-footer-item"
            href="https://www.facebook.com/BlackPearl-in-your-area-419571681980696/"
          >
            <button>
              <span>
                <i className="fab fa-facebook-square" />
              </span>
              Facebook
            </button>
          </a>
          <a
            className="card-footer-item"
            href="https://www.instagram.com/blackpearlinyourarea/"
          >
            <button>
              <span>
                <i className="fab fa-instagram" />
              </span>
              Instagram
            </button>
          </a>
        </footer>
      </Card>
    </div>
  );
}
