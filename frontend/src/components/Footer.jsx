import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div>

          <h2>WalletIQ</h2>

          <p>
            Helping people build healthier financial habits through
            smarter budgeting and spending insights.
          </p>

        </div>

        <div>

          <h4>Product</h4>

          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">FAQ</a>

        </div>

        <div>

          <h4>Company</h4>

          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 WalletIQ. All rights reserved.

      </div>

    </footer>
  );
}

export default Footer;