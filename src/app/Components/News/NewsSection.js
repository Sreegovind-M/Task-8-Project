import React from "react";
import "./News-style.css";
import news1 from "../../Images/news-1.jpg";
import news2 from "../../Images/news-2.jpg";
import news3 from "../../Images/news-3.jpg";
import Image from "next/image";

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
            <button>MORE NEWS <span>&gt;</span></button>
          </div>
        </div>
        <div className="news-body">
          <div className="news1-body">
            <div className="news-img">
              <button>IT SOLUTION</button>
              <Image src={news1} alt="" className="img" />
            </div>
            <div className="news-content">
              <p>Jul 10, 2022 ---- Romarola H.</p>
              <h3>That will bring together 20 industry leading speakers</h3>
            </div>
          </div>
          <div className="news2-body">
            <div className="news-img">
              <button>TECHNOLOGY</button>
              <Image src={news2} alt=""  className="img"/>
            </div>
            <div className="news-content">
              <p>Aug 10, 2022 --- Steven</p>
              <h3>DevFest for Ukraine is a charitable tech conference</h3>
            </div>
          </div>
          <div className="news3-body">
            <div className="news-img">
              <button>WEB SECURITY</button>
              <Image src={news3} alt="" className="img" />
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
