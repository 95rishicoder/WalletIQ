import "./WhyWalletIQ.css";

function WhyWalletIQ() {
  const features = [
    {
      title: "Smart Budgeting",
      description:
        "Create monthly budgets and stay on track with easy-to-understand spending limits.",
      icon: "📊",
    },
    {
      title: "Expense Tracking",
      description:
        "Automatically organize your purchases so you always know where your money goes.",
      icon: "💳",
    },
    {
      title: "Savings Goals",
      description:
        "Set financial goals and monitor your progress with visual milestones.",
      icon: "🎯",
    },
    {
      title: "Spending Insights",
      description:
        "Understand your habits with simple charts and personalized summaries.",
      icon: "📈",
    },
    {
      title: "AI Recommendations",
      description:
        "Receive intelligent suggestions to help you make smarter financial decisions.",
      icon: "🤖",
    },
    {
      title: "Desktop & Mobile",
      description:
        "Manage your finances from anywhere with a consistent experience across devices.",
      icon: "📱",
    },
  ];

  return (
    <section className="why-walletiq">

      <h2>Why WalletIQ?</h2>

      <p className="why-subtitle">
        Everything you need to build healthier financial habits in one modern dashboard.
      </p>

      <div className="feature-grid">

        {features.map((feature) => (
          <div className="feature-card" key={feature.title}>

            <div className="feature-icon">
              {feature.icon}
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default WhyWalletIQ;