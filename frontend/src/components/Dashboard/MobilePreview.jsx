function MobilePreview() {
  return (
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
  );
}

export default MobilePreview;