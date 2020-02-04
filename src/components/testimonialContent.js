import React from "react";
import Testimonials from "./data/testimonials.data.json";
import styled from "styled-components";

/*
 * ===================
 * Components Style
 * ===================
 */

const Media = styled.div`
  margin: 10px auto !important;
`;

const Profile = styled.img`
  border-radius: 50%;
`;

const Recommendation = styled.p`
  color: rgba(255, 128, 162, 1) !important;
  text-shadow: -1px 3px 2px #323232;

  span {
    color: #ff4c93;
  }
`;

const ReviewCard = styled.div`
  background-color: rgba(20, 20, 20, 0.6);
`;

const Reviewer = styled.p`
  color: rgba(255, 128, 162, 1) !important;
  text-shadow: -1px 3px 2px #323232;
`;

const ReviewContent = styled.div`
  color: rgba(255, 128, 162, 1) !important;
  text-shadow: -1px 3px 2px #323232;
  padding: 0;
`;

const ReviewDate = styled.h6`
  color: #ff4c93 !important;
  text-shadow: -1px 3px 2px #323232;
  margin: 10px auto auto auto;
`;

/*
 * ===================
 * Component
 * ===================
 */
export default function TestimonialContent() {
  return (
    <ReviewCard className="card">
      <div className="card-content">
        {Testimonials.testimonial.map(review => (
          <div key={review.id}>
            <Media className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  {/* TODO: Replace with local image | to be presented offline! */}
                  <Profile src={review.profile} alt="Placeholder image" />
                </figure>
              </div>
              <div className="media-content">
                <Reviewer className="title is-4">{review.name}</Reviewer>
                <Recommendation className="subtitle is-6">
                  recommends <span>BlackPearl in your area</span>.
                </Recommendation>
              </div>
            </Media>

            <ReviewContent className="content">
              {review.content}
              <br />
              <ReviewDate>{review.datetime}</ReviewDate>
            </ReviewContent>
          </div>
        ))}
      </div>
    </ReviewCard>
  );
}
