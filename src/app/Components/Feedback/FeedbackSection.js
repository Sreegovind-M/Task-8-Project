import React from "react";
import "./Feedback-style.css";
import prof from "../../Images/prof.png";
import Image from "next/image";

const FeedbackSection = () => {
  return (
    <div>
      <section className="feedback-section">
        <div className="feedback-title">
          <span>// Testimonals //</span>
          <h1>User feedbacks</h1>
        </div>
        <div className="feedback-container">
          <div className="feedback-box1">
            <div className="box-content">
              <p>
                "The worlds #1 web data platform from data collection
                infrastructure to ready-made datasets, brights tow allow you to
                retrive the public web data you care about."
              </p>
            </div>
            <div className="box-user">
              <Image src={prof} className="feed-img"></Image>
              <div className="user-info">
                <h4>Miranda Nelson</h4>
                <p>Head of Idea</p>
              </div>
            </div>
          </div>
          <div className="feedback-box2">
            <div className="box-content">
              <p>
                "The worlds #2 web data platform from data collection
                infrastructure to ready-made datasets, brights tow allow you to
                retrive the public web data you care about."
              </p>
            </div>
            <div className="box-user">
              <Image src={prof} className="feed-img"></Image>
              <div className="user-info">
                <h4>Alexis Dowson</h4>
                <p>Founder</p>
              </div>
            </div>
          </div>
          <div className="feedback-box3">
            <div className="box-content">
              <p>
                "The worlds #3 web data platform from data collection
                infrastructure to ready-made datasets, brights tow allow you to
                retrive the public web data you care about."
              </p>
            </div>
            <div className="box-user">
              <Image src={prof} className="feed-img"></Image>
              <div className="user-info">
                <h4>Steven Smith</h4>
                <p>Designer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeedbackSection;
