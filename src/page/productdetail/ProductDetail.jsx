// src/page/productdetail/ProductDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`https://project-f-beige.vercel.app/api/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => setError("Failed to load product"));
  }, [id]);

  if (error) return <p className="text-danger text-center">{error}</p>;
  if (!product) return <p className="text-center">Loading...</p>;

  const handleAddToCart = () => {
    addToCart(product);
    alert("✅ Item added to cart!");
  };

  return (
    <div className="container mt-5">
      <button className="btn btn-outline-secondary mb-4" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="row">
        <div className="col-md-6">
          <img
            src={
              product.image?.startsWith('http')
                ? product.image
                : `https://project-f-beige.vercel.app/${product.image}`
            }
            alt={product.name}
            className="img-fluid rounded"
          />
        </div>

        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p><strong>Price:</strong> ₹{product.price}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Quantity:</strong> {product.quantity}</p>
          <p><strong>Description: </strong>{product.description}</p>
          <button className="btn btn-primary mt-3" onClick={handleAddToCart}>
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
