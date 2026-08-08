import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Signup() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {

      const response = await fetch("http://localhost:8080/api/users/register", {

        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password
        })

      });

      if (response.ok) {

        alert("Account created successfully!");

        navigate("/login");

      } else {

        alert("Unable to create account.");

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

        <h1>Create Your Account</h1>

        <p>Start managing your finances with WalletIQ.</p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
          />

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

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
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