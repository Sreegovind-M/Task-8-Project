import React from "react";
import './News-style.css'

const NewsSection = () => {
  return (
    <div>
      <section className="news-section">
        <div className="news-header">
          <div className="news-title">
            <span>// News</span>
            <h1>News & Insights</h1>
          </div>
          <div className="news-box">
            <button>MORE NEWS</button>
          </div>
        </div>
        <div className="news-body">
          <div className="news1-body">
            <div className="news1-img">
              <button>IT SOLUTION</button>
            </div>
            <div className="news-content">
              <p>Jul 10, 2022 ---- Romarola H.</p>
              <h3>That will bring together 20 industry leading speakers</h3>
            </div>
          </div>
          <div className="news2-body">
            <div className="news2-img">
              <button>TECHNOLOGY</button>
            </div>
            <div className="news-content">
              <p>Aug 10, 2022 --- Steven</p>
              <h3>DevFest for Ukraine is a charitable tech conference</h3>
            </div>
          </div>
          <div className="news3-body">
            <div className="news3-img">
              <button>WEB SECURITY</button>
            </div>
            <div className="news-content">
              <p>Aug 16, 2022 --- Perkar</p>
              <h3>In times like these, uniting efforts & working together</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsSection;
