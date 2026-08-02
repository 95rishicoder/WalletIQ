function DashboardPreview() {
  return (
    <section className="dashboard-preview">

      {/* Desktop Dashboard */}

      <div className="desktop-preview">

        <div className="dashboard-header">
          <h3>WalletIQ Dashboard</h3>
          <span>July Overview</span>
        </div>

        <div className="balance-card">
          <h4>Total Balance</h4>
          <h2>$4,325.80</h2>
        </div>

        <div className="dashboard-row">

          <div className="mini-card">
            <h4>Income</h4>
            <p>$5,200</p>
          </div>

          <div className="mini-card">
            <h4>Expenses</h4>
            <p>$2,480</p>
          </div>

          <div className="mini-card">
            <h4>Savings</h4>
            <p>$2,720</p>
          </div>

        </div>

        {/* Monthly Spending */}

        <div className="chart-card">

          <h4>Monthly Spending</h4>

          <div className="fake-chart">

            <div className="bar bar1"></div>
            <div className="bar bar2"></div>
            <div className="bar bar3"></div>
            <div className="bar bar4"></div>
            <div className="bar bar5"></div>
            <div className="bar bar6"></div>

          </div>

        </div>

        {/* Recent Transactions */}

        <div className="transactions">

          <h4>Recent Transactions</h4>

          <div className="transaction">
            <span>☕ Starbucks</span>
            <span>-$6.25</span>
          </div>

          <div className="transaction">
            <span>🛒 Costco</span>
            <span>-$82.14</span>
          </div>

          <div className="transaction">
            <span>🎬 Netflix</span>
            <span>-$15.99</span>
          </div>

        </div>

      </div>

      {/* Mobile Dashboard */}

      <div className="mobile-preview">

  <div className="phone-top"></div>

  <h4>Today's Budget</h4>

  <div className="mobile-balance">
    $78 Remaining
  </div>

  <div className="progress-card">

    <p>Daily Budget</p>

    <div className="progress-bar">

      <div className="progress-fill"></div>

    </div>

  </div>

  <div className="recent-expense">

    <span>☕ Coffee</span>

    <span>-$6.25</span>

  </div>

  <button className="mobile-button">
    + Add Expense
  </button>

</div>

    </section>
  );
}

export default DashboardPreview;