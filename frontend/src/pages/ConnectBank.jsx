import { useNavigate } from "react-router-dom";
import PlaidLinkButton from "../components/PlaidLinkButton";
import "./ConnectBank.css";

function ConnectBank() {
  const navigate = useNavigate();

  return (
    <div className="connect-bank-page">

      <div className="connect-bank-card">

        <div className="connect-bank-logo">
          WalletIQ
        </div>

        <h1>Welcome to WalletIQ 👋</h1>

        <p className="connect-bank-subtitle">
          Let's connect your bank account to build your personalized
          financial dashboard.
        </p>

        <div className="connect-benefits">

          <div className="connect-benefit">
            <div className="benefit-icon">💰</div>
            <div>
              <h3>Automatically track your money</h3>
              <p>
                See your income, transactions, balances, and spending
                in one place.
              </p>
            </div>
          </div>

          <div className="connect-benefit">
            <div className="benefit-icon">📊</div>
            <div>
              <h3>Understand your finances</h3>
              <p>
                WalletIQ turns your financial activity into useful
                insights.
              </p>
            </div>
          </div>

          <div className="connect-benefit">
            <div className="benefit-icon">🔒</div>
            <div>
              <h3>Your bank login stays private</h3>
              <p>
                WalletIQ never sees or stores your bank username or
                password. Your authentication is handled securely by
                Plaid.
              </p>
            </div>
          </div>

        </div>

        <div className="connect-bank-action">
          <PlaidLinkButton />
        </div>

        <p className="connect-bank-note">
          You won't need to enter your bank password into WalletIQ.
        </p>

      </div>

    </div>
  );
}

export default ConnectBank;