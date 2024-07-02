import React from "react";
import "./Footer-style.css";
import message from "../../Images/message.png";
import title from "../../Images/title-2.png";
import Image from "next/image";

const FooterSection = () => {
  return (
    <div>
      <section className="footer-section">
        <div className="footer-body">
          <div className="foot">
            <h3>About Us</h3>
            <p>
              Learn from industry-leading speakers like Romain Guy and Chet
              Haase who have been building Android since 1.0, Jhey Tompkins and
              Una Kravets from the Google Chrome team.
            </p>
          </div>
          <div className="foot-2">
            <h3>Pages</h3>
            <div className="foot-2-content">
              <ul>
                <li>About Us</li>
                <li>Services</li>
                <li>Price & Plan</li>
                <li>Case Study</li>
                <li>404 Page</li>
              </ul>
              <ul>
                <li>Our Terms</li>
                <li>Faq</li>
                <li>News</li>
                <li>Contact</li>
                <li>Membership</li>
              </ul>
            </div>
          </div>
          <div className="foot">
            <h3>Our Services</h3>
            <ul>
              <li>Software Solution</li>
              <li>Digital Marketing</li>
              <li>UI & UX Design</li>
              <li>Web Development</li>
              <li>24/7 Online Support</li>
            </ul>
          </div>
          <div className="foot-l">
            <h3>Our Availability</h3>
            <ul>
              <li>Mon - Fri</li>
              <h4>10:00 am to 06:00 pm</h4>
              <br />
              <li>Saturday (1st & 4th)</li>
              <h4>08:00 am to 04:00 pm</h4>
              <span className="emergency-box">
                <Image src={message}></Image>
                <span>
                  <h5>Emergency Service</h5>
                  <h5>000 111 222 333</h5>
                </span>
              </span>
            </ul>
          </div>
        </div>
        <div className="footer-bar">
          <div className="footer-bar-content">
            <Image src={title} className="title"></Image>
            <div>
              <ul className="bar-nav">
                <li>ABOUT</li>
                <li>FAQ</li>
                <li>CONTACT</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FooterSection;
