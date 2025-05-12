import React from "react";
import "./ForgotPasswordPage.css";

const ForgotPasswordPage: React.FC = () => {
  return (
    <div className="forgot-password-container">
      <div className="forgot-password-box">
        <h1>Forgot Password</h1>
        <p>
          Enter the email address you used to create the account, and we will email you instructions to reset your password.
        </p>
        <form>
          <div className="form-group">
            <label htmlFor="email">Enter Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <button type="submit" className="forgot-password-button">Send Email</button>
        </form>
        <p className="login-link">
          Remember Password? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;