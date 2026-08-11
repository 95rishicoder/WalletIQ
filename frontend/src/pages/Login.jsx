import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch("http://localhost:8080/api/users/login", {

        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(formData)

      });

      if (response.ok) {

        const user = await response.json();

        localStorage.setItem("user", JSON.stringify(user));

        alert("Login successful!");

        navigate("/connect-bank");

      } else {

        alert("Invalid email or password.");

      }

    } catch (error) {

      console.error(error);

      alert("Server error.");

    }

  };

  return (

    <div className="auth-page">

      <Link to="/" className="auth-logo">
        WalletIQ
      </Link>

      <div className="auth-card">

        <h1>Welcome Back</h1>

        <p>Sign in to continue to WalletIQ.</p>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
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