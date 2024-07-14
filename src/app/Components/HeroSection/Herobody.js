import React from "react";
import "./hero-style.css";
import play from "./../../Images/play.png";
import Image from "next/image";

const Herobody = () => {
  return (
    <div>
      <section className="hero-body">
        <div className="hero-body-words">
          <div className="hero-body-content">
            <span>We Provide Outsourced</span>
            <h1>IT Solution</h1>
            <p>
              IT producers worldwide face similar challenges around animal
              welfare, farm profitablility, product and work efficiency.
            </p>
            <div className="start-box">
              <button>GET STARTED <span>&gt;</span></button>
              <div className="play-box">
                <Image src={play} className="play-img"></Image>
                <h4>INTRO VIDEO</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Herobody;
