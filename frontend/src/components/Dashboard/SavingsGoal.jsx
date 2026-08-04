function SavingsGoal() {
  return (
    <div className="savings-card">

      <div className="savings-header">
        <h4>Monthly Savings Goal</h4>
        <span>72%</span>
      </div>

      <div className="goal-amounts">
        <span>$720 Saved</span>
        <span>$1,000 Goal</span>
      </div>

      <div className="goal-progress">
        <div className="goal-fill"></div>
      </div>

      <p className="goal-message">
        You're on track to reach your goal this month! 🎉
      </p>

    </div>
  );
}

export default SavingsGoal;