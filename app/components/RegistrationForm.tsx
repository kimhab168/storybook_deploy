// components/RegistrationForm.tsx

import React, { useState } from "react";

export const RegistrationForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Simulate form submission
    try {
      const response = await fetch("https://your-api-endpoint/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, confirmPassword }),
      });
      const result = await response.json();
      if (response.ok) {
        setMessage("Registration successful");
      } else {
        setMessage(result.error || "Registration failed. Please try again.");
      }
    } catch {
      setMessage("Registration failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="email"
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          aria-label="password"
        />
      </label>
      <label>
        Confirm Password:
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          aria-label="confirm password"
        />
      </label>
      <button type="submit">Register</button>
      {message && <p>{message}</p>}
    </form>
  );
};
