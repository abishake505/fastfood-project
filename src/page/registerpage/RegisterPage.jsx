import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

// Background image
import bgImage from '../../assets/bgimage.jpg';

const RegisterPage = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [msg, setMsg] = useState('');
  const [errorType, setErrorType] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg('');
    setErrorType('');

    try {
      // Add role manually here before sending request
      const res = await axios.post('https://project-f-2cqg.onrender.com/api/auth/register', {
        ...form,
        role: 'user',
      });

      setMsg('✅ Registration successful! Redirecting to login...');
      setForm({ name: '', email: '', password: '' });
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      const errorMsg = err.response?.data?.message || '❌ Registration failed';
      setMsg(errorMsg);

      if (errorMsg.toLowerCase().includes('exists')) {
        setErrorType('exists');
      } else {
        setErrorType('general');
      }
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <div style={{
        maxWidth: 400,
        width: '100%',
        background: 'rgba(255, 255, 255, 0.95)',
        padding: 30,
        borderRadius: 15,
        boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
        backdropFilter: 'blur(4px)'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: 20 }}>📝 Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
            className="form-control mb-3"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="form-control mb-3"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="form-control mb-3"
          />

          <button
            type="submit"
            className="btn w-100"
            style={{ background: '#ff69b4', color: '#fff' }}
          >
            Register
          </button>

          {/* ➕ Login Button Below */}
          <Link to="/login">
            <button
              type="button"
              className="btn w-100 mt-2"
              style={{ background: '#fff', border: '1px solid #ff69b4', color: '#ff69b4' }}
            >
              Already have an account? Login
            </button>
          </Link>

          {/* 🛑 Error Message */}
          {msg && (
            <p
              style={{
                marginTop: 12,
                color: msg.includes('successful') ? 'green' : 'red',
                textAlign: 'center',
              }}
            >
              {msg}
              {errorType === 'exists' && (
                <>
                  <br />
                  👉 <Link to="/login">Go to Login</Link>
                </>
              )}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
