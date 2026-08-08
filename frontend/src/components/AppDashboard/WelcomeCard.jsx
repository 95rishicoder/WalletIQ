function WelcomeCard() {
  const user = JSON.parse(localStorage.getItem("user"));

  const firstName = user?.fullName
    ? user.fullName.split(" ")[0]
    : "there";

  return (
    <section className="welcome-card">

      <div>
        <h2>Welcome back, {firstName} 👋</h2>

        <p>
          Here's your financial overview for today.
        </p>
      </div>

    </section>
  );
}

export default WelcomeCard;