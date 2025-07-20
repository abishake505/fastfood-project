import React, { useState } from 'react';
import Invoice from '.../components/Invoice';

const OrderSuccess = () => {
  const [showInvoice, setShowInvoice] = useState(false);

  const mockOrder = {
    customerName: 'John Doe',
    date: new Date(),
    items: [
      { name: 'Chicken Pops', qty: 2, price: 90 },
      { name: 'French Fries', qty: 1, price: 65 }
    ],
    total: 245,
  };

  return showInvoice ? (
    <Invoice orderDetails={mockOrder} onBack={() => setShowInvoice(false)} />
  ) : (
    <div className="text-center p-5">
      <h2>🎉 Order Placed Successfully!</h2>
      <p>Thank you for ordering. You can now download your invoice below.</p>
      <button className="btn btn-primary mt-3" onClick={() => setShowInvoice(true)}>View Invoice</button>
    </div>
  );
};

export default OrderSuccess;
