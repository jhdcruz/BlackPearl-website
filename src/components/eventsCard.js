import React from "react";
import styled from "styled-components";
import EventsData from "./data/events.data";

const Card = styled.div`
  background-color: rgba(40, 40, 40, 0.9);
  margin: 25px auto !important;
  border-radius: 7px;
  box-shadow: 1px 2px 5px rgba(255, 128, 162, 1);
  max-width: 30% !important;
  height: max-content;

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

  button {
    font-size: 1rem;
    color: deeppink;
    background-color: transparent;
    border: none;
    cursor: pointer;

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
      {EventsData.events.map(event => (
        <Card className="card column" key={event.id}>
          <div className="card-content">
            <p className="title">{event.title}</p>
            <p className="subtitle">{event.date}</p>
          </div>
          <footer className="card-footer">
            <a
              className="card-footer-item"
              href="https://www.facebook.com/BlackPearl-in-your-area-419571681980696/"
            >
              <button>
                <span>View on </span>Facebook
              </button>
            </a>
            <a
              className="card-footer-item"
              href="https://www.instagram.com/blackpearlinyourarea/"
            >
              <button>
                <span>View on </span>Instagram
              </button>
            </a>
          </footer>
        </Card>
      ))}
    </div>
  );
}
