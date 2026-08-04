function SpendingChart() {
  return (
    <div className="chart-card">

      <div className="chart-title">

        <h4>Monthly Spending</h4>

        <span>Last 6 Months</span>

      </div>

      <div className="fake-chart">

        <div className="chart-column">

          <div className="bar bar1"></div>

          <p>Feb</p>

        </div>

        <div className="chart-column">

          <div className="bar bar2"></div>

          <p>Mar</p>

        </div>

        <div className="chart-column">

          <div className="bar bar3"></div>

          <p>Apr</p>

        </div>

        <div className="chart-column">

          <div className="bar bar4"></div>

          <p>May</p>

        </div>

        <div className="chart-column">

          <div className="bar bar5"></div>

          <p>Jun</p>

        </div>

        <div className="chart-column">

          <div className="bar bar6"></div>

          <p>Jul</p>

        </div>

      </div>

    </div>
  );
}

export default SpendingChart;