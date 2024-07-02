import React from "react";
import custexp from "../../Images/exp-img.png";
import "./CustExp-style.css";
import Image from "next/image";

const CustExp = () => {
  return (
    <div>
      <section className="customer-experience-section">
        <div className="cust-body">
          <div className="cust-header">
            <div className="cust-title">
              <span>// Some Facts</span>
              <h1>The best customer experience</h1>
            </div>
            <div className="skill-prog">
              <div className="skill-1">
                <div className="skill-title">
                  <h4>Design & Servicing --- 64%</h4>
                </div>
                <div className="skill-bar-1"></div>
              </div>
              <div className="skill-2">
                <div className="skill-title">
                  <h4>Support & Productivity --- 82%</h4>
                </div>
                <div className="skill-bar-2"></div>
              </div>
              <div className="skill-3">
                <div className="skill-title">
                  <h4>Troubleshooting --- 70%</h4>
                </div>
                <div className="skill-bar-3"></div>
              </div>
            </div>
          </div>
          <div className="exp-img">
            <Image src={custexp} className="cust-exp-img"></Image>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustExp;
