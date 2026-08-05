import "./Hero.css";

import DashboardPreview from "../Dashboard/DashboardPreview";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <h1>
          Spend Smarter.
          <br />
          Save More.
          <br />
          Live Better.
        </h1>

        <p>
          Build healthier financial habits with intelligent budgeting,
          spending insights, and simple tools that help you keep more
          of what you earn.
        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
            Start Free Trial
          </button>

          <button className="secondary-btn">
            Watch Demo
          </button>

        </div>

      </div>

      <div className="hero-right">

        <DashboardPreview />

      </div>

    </section>
  );
}

export default Hero;