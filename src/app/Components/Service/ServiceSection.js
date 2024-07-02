import React from "react";
import "./Service-style.css";
import seo from "../../Images/seo.png";
import server from "../../Images/server.png";
import ui from "../../Images/ui.png";
import ana from "../../Images/analyse.png";

import Image from "next/image";

const ServiceSection = () => {
  return (
    <div>
      <section className="service-section">
        <div className="service-header">
          <div className="service-title">
            <span>// Service</span>
            <h1>What we do here</h1>
          </div>
          <div className="service-box">
            <button>SERVICES</button>
          </div>
        </div>
        <div className="service-options">
          <div className="service-grid">
            <div>
              <Image src={seo} className="seo"></Image>
              <h2>SEO Monitoring</h2>
              <p>The quality data, best network uptime, fastest output.</p>
              <span>// Read More</span>
            </div>
            <div>
              <Image src={server} className="server"></Image>
              <h2>Server Security</h2>
              <p>The quality data, best network uptime, fastest output.</p>
              <span>// Read More</span>
            </div>
            <div>
              <Image src={ui} className="ui"></Image>
              <h2>UX/UI Strategy</h2>
              <p>The quality data, best network uptime, fastest output.</p>
              <span>// Read More</span>
            </div>
            <div>
              <Image src={ana} className="ana"></Image>
              <h2>Analysis Tools</h2>
              <p>The quality data, best network uptime, fastest output.</p>
              <span>// Read More</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceSection;
