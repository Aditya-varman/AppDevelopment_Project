import React from "react";
import './Steps.css';

const Steps = () => {
  return (
    <section className="steps-container">
      <div className="steps-content">
        <div className="step">
          <div className="step-icon">
            <svg className="icon" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <div className="step-details">
            <h2 className="step-title">Get a Quote</h2>
            <p className="step-description">
              Start by getting a personalized health insurance quote that fits your needs and budget.
            </p>
          </div>
        </div>

        <div className="step">
          <div className="step-icon">
            <svg className="icon" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div className="step-details">
            <h2 className="step-title">Compare Plans</h2>
            <p className="step-description">
              Compare different health insurance plans and choose the one that best meets your healthcare needs.
            </p>
          </div>
        </div>

        <div className="step">
          <div className="step-icon">
            <svg className="icon" viewBox="0 0 24 24">
              <circle cx="12" cy="5" r="3"></circle>
              <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
            </svg>
          </div>
          <div className="step-details">
            <h2 className="step-title">Enroll Online</h2>
            <p className="step-description">
              Easily enroll in the chosen health insurance plan online through our secure portal.
            </p>
          </div>
        </div>

        <div className="step">
          <div className="step-icon">
            <svg className="icon" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div className="step-details">
            <h2 className="step-title">Stay Covered</h2>
            <p className="step-description">
              Enjoy peace of mind with comprehensive health insurance coverage and access to a wide network of healthcare providers.
            </p>
          </div>
        </div>

        <div className="step">
          <div className="step-icon">
            <svg className="icon" viewBox="0 0 24 24">
              <path d="M12 2l9.5 18.5L12 22 2.5 20.5 12 2z"></path>
            </svg>
          </div>
          <div className="step-details">
            <h2 className="step-title">Access Support</h2>
            <p className="step-description">
              Access our 24/7 customer support for any assistance with your health insurance plan.
            </p>
          </div>
        </div>

        <div className="step">
          <div className="step-icon">
            <svg className="icon" viewBox="0 0 24 24">
              <path d="M12 7a5 5 0 100 10 5 5 0 000-10z"></path>
              <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M16.36 16.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M16.36 7.64l1.42-1.42"></path>
            </svg>
          </div>
          <div className="step-details">
            <h2 className="step-title">Monitor Claims</h2>
            <p className="step-description">
              Monitor your insurance claims and get real-time updates on their status through your account dashboard.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Steps;
