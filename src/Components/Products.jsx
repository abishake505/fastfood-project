import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Cart from "../Components/Cart";
import waffleImg from '../assets/waffle.jpg';
import vegImg from '../assets/veg.jpg';
import nonvegImg from '../assets/nonveg.jpg';
import burgerImg from '../assets/Burger.jpg';
import brownieImg from '../assets/Brownie.jpg';
import wafflewithicecreamImg from '../assets/wafflewithicecream.jpg';
import mojitoImg from '../assets/mojito.jpg';
import thickshakeImg from '../assets/thickshake.jpg';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [error, setError] = useState(null);
  const location = useLocation();

  const searchQuery = new URLSearchParams(location.search).get("search")?.toLowerCase() || "";

  useEffect(() => {
    fetch('https://project-f-beige.vercel.app/api/products')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(data => setProducts(data))
      .catch(err => {
        console.error("Failed to fetch products:", err);
        setError("Failed to load products. Please try again later.");
      });
  }, []);

  const categories = [
    { name: 'waffle', image: waffleImg },
    { name: 'Veg', image: vegImg },
    { name: 'Non-Veg', image: nonvegImg },
    { name: 'Burger', image: burgerImg },
    { name: 'Brownie', image: brownieImg },
    { name: 'Waffle with Ice Cream', image: wafflewithicecreamImg },
    { name: 'Mojito', image: mojitoImg },
    { name: 'Thickshake', image: thickshakeImg },
  ];

  const filteredProducts = products.filter(item => {
    if (searchQuery) {
      return item.name.toLowerCase().includes(searchQuery) ||
             item.category.toLowerCase().includes(searchQuery);
    }
    return selectedCategory ? item.category === selectedCategory : false;
  });

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">🍽️ Our Categories</h2>
      <div className="d-flex justify-content-center flex-wrap gap-4 mb-5">
        {categories.map(({ name, image }) => (
          <div
            key={name}
            className="text-center"
            onClick={() => setSelectedCategory(name)}
            style={{
              cursor: 'pointer',
              border: selectedCategory === name ? '3px solid #ff69b4' : '2px solid #ccc',
              borderRadius: '12px',
              padding: '10px',
              width: '140px',
              transition: '0.3s'
            }}
          >
            <img
              src={image}
              alt="select"
              style={{
                width: '100%',
                height: '100px',
                objectFit: 'cover',
                borderRadius: '10px',
                marginBottom: '8px'
              }}
            />
            <strong>{name}</strong>
          </div>
        ))}
      </div>

      {filteredProducts.length > 0 ? (
        <>
          <h3 className="text-center mb-3">
            {searchQuery
              ? `Search Results for: "${searchQuery}"`
              : `Showing: ${selectedCategory} Items`}
          </h3>
          <div className="row">
            {filteredProducts.map(item => {
              const imageUrl = item.image?.startsWith('http')
                ? item.image
                : `https://project-f-beige.vercel.app/${item.image}`;
              return (
                <div className="col-md-3 mb-4" key={item._id}>
                  <Cart
                    img={imageUrl}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    category={item.category}
                    id={item._id}
                  />
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <p className="text-center text-muted">
          {searchQuery
            ? "No products found for your search."
            : selectedCategory
              ? "No items found in this category."
              : "Please select a category above to view products."}
        </p>
      )}

      {error && <p className="text-danger text-center">{error}</p>}
    </div>
  );
};

export default Products;
