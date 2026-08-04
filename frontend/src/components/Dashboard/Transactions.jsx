function Transactions() {
  return (
    <div className="transactions">

      <div className="transactions-header">

        <h4>Recent Transactions</h4>

        <span>View All</span>

      </div>

      <div className="transaction">

        <div className="transaction-left">

          <div className="transaction-icon">☕</div>

          <div>

            <h5>Starbucks</h5>

            <p>Today • Coffee</p>

          </div>

        </div>

        <span className="expense">-$6.25</span>

      </div>

      <div className="transaction">

        <div className="transaction-left">

          <div className="transaction-icon">🛒</div>

          <div>

            <h5>Costco</h5>

            <p>Yesterday • Groceries</p>

          </div>

        </div>

        <span className="expense">-$82.14</span>

      </div>

      <div className="transaction">

        <div className="transaction-left">

          <div className="transaction-icon">🎬</div>

          <div>

            <h5>Netflix</h5>

            <p>Jul 28 • Subscription</p>

          </div>

        </div>

        <span className="expense">-$15.99</span>

      </div>

    </div>
  );
}

export default Transactions;