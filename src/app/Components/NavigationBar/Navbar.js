"use client";
import React, { useState } from "react";
import title from "./../../Images/title.png";
import title2 from "./../../Images/title-2.png";
import phone from "./../../Images/phone.png";
import mail from "./../../Images/mail.png";
import menuBar from "./../../Images/menu-bar.png";
import menuDots from "./../../Images/menu-dots.png";
import search from "./../../Images/search-2.png";
import location from "../../Images/location.png";
import maili from "../../Images/maili.png";
import phonei from "../../Images/phone-icon.png";
import Image from "next/image";

import "./Nav_style.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <header className="header-section">
        {/* Top Header start  */}

        <div className="top-header">
          <a>
            <Image src={title} className="title-img"></Image>
          </a>
          <div className="header-menu-section">
            <div className="nav-contact">
              <div className="nav-contact-info">
                <div className="contact-img">
                  <Image src={phone}></Image>
                </div>
                <div className="contact-info">
                  <p>Call us now</p>
                  <h4>9876543210</h4>
                </div>
              </div>

              <div className="nav-contact-info">
                <div className="contact-img">
                  <Image src={mail}></Image>
                </div>
                <div className="contact-info">
                  <p>Email Address</p>
                  <h4>info@gmail.com</h4>
                </div>
              </div>
            </div>
            <div className="appointment-box">
              <button>GET APPOINTMENT</button>
            </div>
          </div>
          <Image
            src={menuBar}
            className="toggle-menu"
            onClick={openNav}
          ></Image>
        </div>

        {/* Top Header end  */}

        {/* Responsive Nav start */}

        <div className="fix">
          <div className={isOpen ? "sidenav" : "sidenavbar-close"}>
            <div className="sidenav-content">
              <div className="sidenav-header">
                <Image src={title2} />
                <div className="sidenav-close" onClick={closeNav}>
                  <button className="close-btn">&times;</button>
                  hello
                </div>
              </div>
              <div className="sidenav-searchbox">
                <input
                  type="text"
                  placeholder="What are you searching for?"
                  className="search-input"
                />
                <div>
                  <Image src={search} className="search-btn" />
                </div>
              </div>
              <div className="sidenav-menu">
                <ul className="nav-links">
                  <li>
                    <a>Home</a>
                  </li>
                  <li>
                    <a>About</a>
                  </li>
                  <li>
                    <a>Services</a>
                  </li>
                  <li>
                    <a>Blog</a>
                  </li>
                  <li>
                    <a>Pages</a>
                  </li>
                  <li>
                    <a>Contact</a>
                  </li>
                </ul>
              </div>
              <div className="sidenav-contact-info">
                <h4>Contact Info</h4>
                <ul>
                  <li className="center-align">
                    <div className="contactinfo-icon">
                      <Image src={location} className="icon"></Image>
                    </div>
                    <div className="contactinfo-text">
                      <a>12, Marchbank Road, Birmingham, UK</a>
                    </div>
                  </li>
                  <li className="center-align">
                    <div className="contactinfo-icon">
                      <Image src={phonei} className="icon"></Image>
                    </div>
                    <div className="contactinfo-text">
                      <a>+008897238474</a>
                    </div>
                  </li>
                  <li className="center-align">
                    <div className="contactinfo-icon">
                      <Image src={maili} className="icon"></Image>
                    </div>
                    <div className="contactinfo-text">
                      <a>support@email.com</a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="sidenav-socialmedia">
                <ul>
                  <li>
                    <a>f</a>
                  </li>
                  <li>
                    <a>t</a>
                  </li>
                  <li>
                    <a>Y</a>
                  </li>
                  <li>
                    <a>in</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive navbar end  */}

        {/* Navigation-bar section start  */}

        <div className="navigation-section">
          <div className="menu-dot-box">
            <Image src={menuDots} className="menu-dots"></Image>
          </div>
          <nav className="nav-bar">
            <ul class="nav-items">
              <li>
                <a href="">HOME + </a>
              </li>
              <li>
                <a href="">ABOUT</a>
              </li>
              <li>
                <a href="">SERVICES + </a>
              </li>
              <li>
                <a href="">BLOG + </a>
              </li>
              <li>
                <a href="">PAGES + </a>
              </li>
              <li>
                <a href="">CONTACT</a>
              </li>
            </ul>
          </nav>
          <div className="search-box">
            <Image src={search} className="search-img"></Image>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
