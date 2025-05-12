import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./CreateNewPasswordPage.css";

const CreateNewPasswordPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token"); // Ambil token dari URL
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) {
      alert("Invalid or missing token. Please check your email link.");
      return;
    }
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Kirim permintaan ke server untuk mengatur ulang password
    console.log("Password reset successfully:", { token, newPassword });
    alert("Password reset successfully!");
  };

  return (
    <div className="create-password-container">
      <div className="create-password-box">
        <h1>Create New Password</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="new-password">New Password</label>
            <input
              type="password"
              id="new-password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="reset-password-button">Reset Password</button>
        </form>
      </div>
    </div>
  );
};

export default CreateNewPasswordPage;