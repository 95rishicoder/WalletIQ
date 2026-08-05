import "./Pricing.css";

function Pricing() {
  return (
    <section className="pricing">

      <h2>Simple Pricing</h2>

      <p className="pricing-subtitle">
        Start for free and upgrade when you're ready.
      </p>

      <div className="pricing-grid">

        <div className="pricing-card">

          <h3>Free</h3>

          <h1>$0</h1>

          <p>Perfect for getting started.</p>

          <ul>
            <li>✓ Expense Tracking</li>
            <li>✓ Budgets</li>
            <li>✓ Spending Charts</li>
            <li>✓ Savings Goals</li>
          </ul>

          <button className="pricing-btn secondary-btn">
            Get Started
          </button>

        </div>

        <div className="pricing-card featured">

          <span className="popular-tag">
            Most Popular
          </span>

          <h3>Pro</h3>

          <h1>$4.99<span>/month</span></h1>

          <p>Everything in Free plus:</p>

          <ul>
            <li>✓ AI Spending Insights</li>
            <li>✓ Smart Recommendations</li>
            <li>✓ Advanced Analytics</li>
            <li>✓ Priority Support</li>
          </ul>

          <button className="pricing-btn primary-btn">
            Start Free Trial
          </button>

        </div>

      </div>

    </section>
  );
}

export default Pricing;