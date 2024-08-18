import React, { useState } from "react";
import "./styles.css";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Firebase";

const Login = () => {
  const navigate = useNavigate();

  // State for email, password, and error message
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Handle Sign In
  const handleSignIn = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => setError(error.message));
  };

  // Handle Register
  const handleRegister = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div className="signin-page">
      <div className="signin-container">
        <h2>Sign In</h2>
        <form>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
          </div>
          {error && <p className="error-message">{error}</p>}

          <div className="action-btns">
            <button type="submit" className="signin-button" onClick={handleSignIn}>
              Sign In
            </button>
            <p>OR</p>
            <button type="submit" className="create-account" onClick={handleRegister}>
              Create your eShop account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
