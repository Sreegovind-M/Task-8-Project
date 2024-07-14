import React from "react";
import "./Portfolio-style.css";
import cyber from '../../Images/cyber.jpg'
import ps from '../../Images/prob-sol.jpg'
import web from '../../Images/web.jpg'
import pa from '../../Images/prod-ana.jpg'
import Image from "next/image";

const Portfolio = () => {
  return (
    <div>
      <section className="portfolio-section">
        <div className="port-header">
          <div className="port-title">
            <span>// Portfolio</span>
            <h1>Case Studies</h1>
          </div>
          <div className="arrow-toggle">
            <button className="left-arrow">&lt;</button>
            <button className="right-arrow">&gt;</button>
          </div>
        </div>
        <div className="port-body">
        <div className="port-box" id="port-1">
            <Image src={cyber} className="cyber-img" alt="" />
            <div className="port-content">
              <h3>Cybersecurity</h3>
              <p>If you’ve built up your IT system over a period of time.</p>
              <span><b>Read More</b></span>
            </div>
          </div>
          <div className="port-box" id="port-2">
            <Image src={ps} className="ps-img" alt="" />
            <div className="port-content">
              <h3>Problem Solutions</h3>
              <p>If you’ve built up your IT system over a period of time.</p>
              <span><b>Read More</b></span>
            </div>
          </div>
          <div className="port-box" id="port-3">
            <Image src={web} className="web-img" alt="" />
            <div className="port-content">
              <h3>Web Analysis</h3>
              <p>If you’ve built up your IT system over a period of time.</p>
              <span><b>Read More</b></span>
            </div>
          </div>
          <div className="port-box" id="port-4">
            <Image src={pa} className="pa-img" alt="" />
            <div className="port-content">
              <h3>Product Analysis</h3>
              <p>If you’ve built up your IT system over a period of time.</p>
              <span><b>Read More</b></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
