import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // When form data is changed
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // When user submits teh form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5150/api/auth/login",
        formData,
        { withCredentials: true }
      );
      console.log("Login successful:", response);
      // Optionally reset the form or redirect the user
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="form-table">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-input-container">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-input-container">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginForm;
