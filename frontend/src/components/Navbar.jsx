import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <Link
        to="/"
        style={{ textDecoration: "none" }}
      >
        <h2>WalletIQ</h2>
      </Link>

      <div className="nav-buttons">

        <Link to="/login">

          <button className="login-btn">
            Login
          </button>

        </Link>

        <Link to="/signup">

          <button className="signup-btn">
            Start Free Trial
          </button>

        </Link>

      </div>

    </nav>
  );
}

export default Navbar;