import React from "react";
import "./Query-style.css";

const QuerySection = () => {
  return (
    <div className="query">
      <section className="query-section">
        <div className="query-body">
          <span>// Services //</span>
          <h1>What we do here</h1>
          <div className="query-boxes">
            <form>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email address"
              />

              <input
                type="name"
                id="name"
                name="name"
                placeholder="Website name"
              />
              <button>TEST SPEED</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuerySection;
