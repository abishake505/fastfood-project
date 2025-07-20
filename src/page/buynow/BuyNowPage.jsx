import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const BuyNowPage = () => {
  const [option, setOption] = useState(null);
  const [tableNo, setTableNo] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();
  const { cart } = useCart();

  const handleSubmit = () => {
    if (option === 'table') {
      alert(`🪑 Table Order placed for Table No: ${tableNo}\nItems: ${cart.map(i => i.name).join(', ')}`);
    } else if (option === 'takeaway') {
      alert(`🥡 Takeaway order placed!\nParcel Charge: ₹20`);
    } else if (option === 'delivery') {
      alert(`🚚 Delivery order placed to: ${address}\nDelivery Charge: ₹40`);
    }
  };

  return (
    <div className="container text-center pt-5">
      <h2>🎉 Thank you for choosing <strong>It's waffleTime!</strong></h2>
      <p className="mb-4">Please select how you'd like to receive your order:</p>

      <div className="d-flex justify-content-center gap-3 flex-wrap mb-4">
        <button className="btn btn-outline-primary px-4 py-2" onClick={() => setOption('table')}>
          🪑 Table
        </button>
        <button className="btn btn-outline-success px-4 py-2" onClick={() => setOption('takeaway')}>
          🥡 Takeaway
        </button>
        <button className="btn btn-outline-warning px-4 py-2" onClick={() => setOption('delivery')}>
          🚚 Door Delivery
        </button>
      </div>

      {/* Conditional Forms */}
      {option === 'table' && (
        <div className="mb-4">
          <h5>🪑 Enter Table Number</h5>
          <input
            type="text"
            value={tableNo}
            onChange={(e) => setTableNo(e.target.value)}
            className="form-control w-50 mx-auto my-3"
            placeholder="e.g., T05"
          />
          <button className="btn btn-primary" onClick={handleSubmit}>Pay & Confirm</button>
        </div>
      )}

      {option === 'takeaway' && (
        <div className="mb-4">
          <h5>🥡 Takeaway Charges: ₹20</h5>
          <button className="btn btn-success" onClick={handleSubmit}>Pay ₹20</button>
        </div>
      )}

      {option === 'delivery' && (
        <div className="mb-4">
          <h5>🚚 Enter Delivery Address</h5>
          <textarea
            rows="3"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="form-control w-75 mx-auto my-3"
            placeholder="Enter your full address"
          />
          <p>Delivery Charge: ₹40</p>
          <button className="btn btn-warning" onClick={handleSubmit}>Pay ₹40</button>
        </div>
      )}

      <button className="btn btn-secondary mt-3" onClick={() => navigate(-1)}>
        ⬅ Go Back
      </button>
    </div>
  );
};

export default BuyNowPage;
