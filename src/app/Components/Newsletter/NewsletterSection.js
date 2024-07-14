import React from "react";
import "./Newsletter-style.css";

const NewsletterSection = () => {
  return (
    <div>
      <section className="newsletter-section">
        <div className="newsletter-body">
          <div className="newsletter-title">
            <span>// Newsletter</span>
            <h1>User feedbacks</h1>
          </div>
          <div className="newsletter-content">
            <form>
              <input
                type="email"
                id="news-in"
                name="email"
                placeholder="Email address"
              />
              <button>NEWSLETTER</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsletterSection;
