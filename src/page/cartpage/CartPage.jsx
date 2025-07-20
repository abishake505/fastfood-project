// src/page/cartpage/CartPage.jsx
import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { cart, addToCart, removeFromCart, decreaseQty, clearCart } = useCart();
  const navigate = useNavigate();

  const getTotal = () =>
    cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleBuyNow = () => {
    navigate("/buy-now");
  };

  return (
    <div className="container pt-5">
      <h2 className="text-center mb-4">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty!</p>
      ) : (
        <>
          <div className="row">
            {cart.map(item => {
              const imageUrl = item.image?.startsWith("http")
                ? item.image
                : `https://project-f-beige.vercel.app/${item.image}`;

              return (
                <div key={item._id} className="col-md-6 mb-4">
                  <div className="card shadow-sm p-3">
                    <div className="d-flex align-items-center flex-column flex-sm-row">
                      <img
                        src={imageUrl}
                        alt={item.name}
                        className="me-3 mb-3 mb-sm-0"
                        style={{
                          width: '100px',
                          height: '100px',
                          objectFit: 'cover',
                          borderRadius: '8px'
                        }}
                      />
                      <div className="flex-grow-1 w-100">
                        <h5>{item.name}</h5>
                        <p className="mb-1">Price: ₹{item.price}</p>

                        {/* ✅ Responsive Qty Section */}
                        <div className="d-flex align-items-center flex-wrap gap-2 mb-2">
                          <span>Qty:</span>
                          <button
                            className="btn btn-sm btn-secondary"
                            onClick={() => decreaseQty(item._id)}
                          >
                            -
                          </button>
                          <span>{item.qty}</span>
                          <button
                            className="btn btn-sm btn-secondary"
                            onClick={() => addToCart(item)}
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <button
                        className="btn btn-danger btn-sm ms-sm-3 mt-3 mt-sm-0"
                        onClick={() => removeFromCart(item._id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <h4 className="text-end mt-4">Total: ₹{getTotal()}</h4>

          <div className="d-flex justify-content-end gap-3 mt-3 flex-wrap">
            <button className="btn btn-success" onClick={handleBuyNow}>
              🛒 Buy Now
            </button>
            <button className="btn btn-warning" onClick={clearCart}>
              🧹 Clear Cart
            </button>
            <button className="btn btn-secondary" onClick={() => navigate(-1)}>
              ⬅ Go Back
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
