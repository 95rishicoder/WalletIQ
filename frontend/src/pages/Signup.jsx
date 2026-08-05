import "./Auth.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="auth-page">

      <Link to="/" className="auth-logo">
        WalletIQ
      </Link>

      <div className="auth-card">

        <h1>Create Your Account</h1>

        <p>Start managing your finances with WalletIQ.</p>

        <form>

          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="email"
            placeholder="Email"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <input
            type="password"
            placeholder="Confirm Password"
          />

          <button type="submit">
            Create Account
          </button>

        </form>

        <p>
          Already have an account?{" "}
          <Link to="/login">
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Signup;