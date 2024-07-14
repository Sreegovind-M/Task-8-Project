import React from "react";
import about from "./../../Images/about-us-img.jpg";
import "./Aboutus-style.css";
import Image from "next/image";

const Aboutus = () => {
  return (
    <div>
      <section className="about-us-section">
        <div className="about-imgs">
          <div className="experience-box">
            <h1>30</h1>
            <p>Years Experience</p>
          </div>

          <Image src={about} className="aboutus-img"></Image>
        </div>
        <div className="about-us-words">
          <div className="about-us-title">
            <span>// About Us</span>
            <h1>Best in classy product near from you.</h1>
          </div>
          <div className="about-us-descrip">
            <p>
              From finance, retail, and travel, to social media, cybersecurity,
              adtech, and more, market leaders are leveraging web data to
              maintain their advantage. Discover how it can work for you.
            </p>
          </div>
          <div className="about-us-quote">
            <h4>Highest quality data, #01 network uptime, fastest output.</h4>
            <h4>Unlimited scale and customizing possibilities.</h4>
            <h5>
              Miranda Helson, <span>Head of Idea</span>
            </h5>
          </div>
          <div className="learn-more">
            <button>
              LEARN MORE <span>&gt;</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
