// src/components/Invoice.jsx
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const Invoice = ({ orderDetails, onBack }) => {
  const printRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  const { customerName, items, total, date } = orderDetails;

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between mb-3">
        <button className="btn btn-secondary" onClick={onBack}>← Back</button>
        <button className="btn btn-primary" onClick={handlePrint}>🧾 Print Invoice</button>
      </div>

      <div ref={printRef} style={{ backgroundColor: 'white', padding: '20px', border: '1px solid #ccc' }}>
        <h2>🍽️ WaffleHome Invoice</h2>
        <p><strong>Date:</strong> {new Date(date).toLocaleString()}</p>
        <p><strong>Customer:</strong> {customerName}</p>

        <hr />

        <table className="table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, idx) => (
              <tr key={idx}>
                <td>{item.name}</td>
                <td>{item.qty}</td>
                <td>₹{item.price}</td>
                <td>₹{item.price * item.qty}</td>
              </tr>
            ))}
            <tr>
              <td colSpan="3" className="text-end"><strong>Total:</strong></td>
              <td><strong>₹{total}</strong></td>
            </tr>
          </tbody>
        </table>

        <p className="text-center mt-4">Thank you for ordering with us! 🧇</p>
      </div>
    </div>
  );
};

export default Invoice;
