import React from 'react';

const UserDashboard = () => {
  const name = localStorage.getItem("name") || "User";

  return (
    <div style={{ padding: 20 }}>
      <h2>👤 Welcome to User Dashboard</h2>
      <p>Hello, {name}!</p>
      <p>Here you can view your orders, cart, and other details (coming soon).</p>
    </div>
  );
};

export default UserDashboard;
