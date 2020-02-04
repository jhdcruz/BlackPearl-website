import React from "react";
import Testimonials from "./data/testimonials.data.json";

/*
 * ===================
 * Components Style
 * ===================
 */

/*
 * ===================
 * Component
 * ===================
 */
export default function TestimonialContent() {
  return (
    <div className="card">
      <div className="card-content">
        {Testimonials.testimonial.map(review => (
          <div key={review.id}>
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src={review.profile} alt="Placeholder image" />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">{review.name}</p>
                <p className="subtitle is-6">
                  recommends <span>BlackPearl in your area</span>.
                </p>
              </div>
            </div>

            <div className="content">
              {review.content}
              <br />
              <p>{review.datetime}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
