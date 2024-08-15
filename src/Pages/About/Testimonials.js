import React from "react";
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials-container">
      <h2 className="testimonials-title">What Our Clients Say</h2>
      <div className="testimonials-slider">
        <div className="testimonial">
          <p className="testimonial-text">
            "Caresurance has provided me with the best health insurance coverage I could ask for!"
          </p>
          <p className="testimonial-author">- John Doe</p>
        </div>

        <div className="testimonial">
          <p className="testimonial-text">
            "The customer service at Caresurance is exceptional. They really care about their clients."
          </p>
          <p className="testimonial-author">- Jane Smith</p>
        </div>

        <div className="testimonial">
          <p className="testimonial-text">
            "Thanks to Caresurance, I feel confident that my family is protected with the right coverage."
          </p>
          <p className="testimonial-author">- Michael Brown</p>
        </div>

        <div className="testimonial">
          <p className="testimonial-text">
            "The process of choosing and enrolling in a plan was so easy and straightforward!"
          </p>
          <p className="testimonial-author">- Sarah Wilson</p>
        </div>

        <div className="testimonial">
          <p className="testimonial-text">
            "I highly recommend Caresurance to anyone looking for reliable health insurance."
          </p>
          <p className="testimonial-author">- Emily Johnson</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
