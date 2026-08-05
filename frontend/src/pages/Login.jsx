import "./Auth.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="auth-page">

      <Link to="/" className="auth-logo">
        WalletIQ
      </Link>

      <div className="auth-card">

        <h1>Welcome Back</h1>

        <p>Sign in to continue to WalletIQ.</p>

        <form>

          <input
            type="email"
            placeholder="Email"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <button type="submit">
            Login
          </button>

        </form>

        <p>
          Don't have an account?{" "}
          <Link to="/signup">
            Create One
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;