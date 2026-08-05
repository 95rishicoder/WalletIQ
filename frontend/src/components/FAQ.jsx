import "./FAQ.css";

function FAQ() {
  return (
    <section className="faq">

      <h2>Frequently Asked Questions</h2>

      <div className="faq-list">

        <div className="faq-item">
          <h3>Is WalletIQ free?</h3>
          <p>
            Yes. WalletIQ offers a free plan with budgeting,
            expense tracking, and savings goals.
          </p>
        </div>

        <div className="faq-item">
          <h3>Can I upgrade later?</h3>
          <p>
            Absolutely. You can upgrade to Pro at any time to
            unlock advanced features.
          </p>
        </div>

        <div className="faq-item">
          <h3>Will there be a mobile app?</h3>
          <p>
            Yes. WalletIQ is being built for both desktop and
            mobile so you can manage your finances anywhere.
          </p>
        </div>

        <div className="faq-item">
          <h3>Is my financial data secure?</h3>
          <p>
            Security is a top priority. We are building WalletIQ
            with modern security practices to protect user data.
          </p>
        </div>

      </div>

    </section>
  );
}

export default FAQ;