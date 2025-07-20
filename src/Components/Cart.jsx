import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import { useCart } from '../page/context/CartContext'; // ✅ Corrected

const Cart = (props) => {
  const { addToCart } = useCart(); // ✅ use useCart instead of useContext

  const handleAdd = () => {
    const item = {
      _id: props.id,
      name: props.name,
      price: props.price,
      image: props.img,
      qty: 1,
    };
    addToCart(item);
    alert("Added to cart!");
  };

  return (
    <Card
      hoverable
      cover={
        <img
          alt="example"
          style={{ height: "300px", objectFit: "cover" }}
          src={props.img}
        />
      }
    >
      <div className='card-body g-0'>
        <p><strong>Name:</strong> {props.name}</p>
        <p><strong>Price:</strong> ₹{props.price}</p>
        <p><strong>Quantity:</strong> {props.quantity}</p>
        <p><strong>Category:</strong> {props.category}</p>

        <div className='d-flex justify-content-between mt-3'>
          <button className='btn btn-primary' style={{ width: "110px" }} onClick={handleAdd}>
            Add to Cart
          </button>

          <Link to={`/product/${props.id}`}>
  <button className="btn btn-success">Buy Now</button>
</Link>

        </div>
      </div>
    </Card>
  );
};

export default Cart;
