import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = () => {
  const [form, setForm] = useState({ email: 'abi262952@gmail.com', password: '123456' });
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setMsg('');
    try {
      const res = await axios.post('https://project-f-2cqg.onrender.com/api/auth/login', form);
      const { token, role } = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem("role", role);

      if (role === "admin") navigate("/admin-dashboard");
      else navigate("/home");
    } catch (err) {
      setMsg(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "50px auto", padding: 20, border: "1px solid #ddd", borderRadius: 10 }}>
      <h2 style={{ textAlign: 'center' }}>🔐 Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: 8, marginBottom: 10 }}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: 8, marginBottom: 10 }}
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: 10, backgroundColor: '#ff69b4', color: 'white', border: 'none' }}>
          Login
        </button>
        {msg && <p style={{ color: 'red', marginTop: 10 }}>{msg}</p>}
        <p style={{ marginTop: 10, textAlign: 'center' }}>
          Don't have an account? <Link to="/">Register here</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
