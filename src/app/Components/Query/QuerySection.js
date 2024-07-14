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
                id="query-namei"
                name="email"
                placeholder="Email address"

              />

              <input
                type="name"
                id="query-webi"
                name="name"
                placeholder="Website name"
              />
              <button>
                TEST SPEED <span>&gt;</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuerySection;
