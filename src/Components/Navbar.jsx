import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../page/context/CartContext';

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const { cart } = useCart();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  const handleSearch = (e) => {
  e.preventDefault();
  const query = e.target.search.value.trim();
  if (query) {
    navigate(`/products?search=${query}`);
  } else {
    navigate('/products'); // 🔄 Reset to show all products
  }
};


  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark px-4 py-2"
      style={{ backgroundColor: '#ff69b4' }}
    >
      <Link className="navbar-brand fw-bold text-white" to="/about">
        It's Waffle Time
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/products">Foods</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/about">About Us</Link>
          </li>
        </ul>

        {/* 🔧 WRAPPED Container for right side buttons */}
        <div
          className="d-flex flex-wrap align-items-center justify-content-start gap-2"
          style={{ maxWidth: '100%' }}
        >
          {/* 🔍 Search */}
          <form
            className="d-flex flex-shrink-1"
            onSubmit={handleSearch}
            style={{ flexWrap: 'wrap', gap: '6px' }}
          >
            <input
              type="text"
              name="search"
              className="form-control form-control-sm"
              placeholder="Search here..."
              style={{
                width: '150px',
                minWidth: '120px',
                flexGrow: 1,
              }}
            />
            <button
              className="btn btn-light btn-sm"
              type="submit"
              style={{ whiteSpace: 'nowrap' }}
            >
              Go
            </button>
          </form>

          {/* 🛒 Cart */}
          <Link
            to="/cart"
            className="text-white position-relative"
            style={{ fontSize: '1.2rem' }}
          >
            <FontAwesomeIcon icon={faCartShopping} />
            {cart.length > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
              </span>
            )}
          </Link>

          {/* 🔐 Logout / Auth */}
          {token ? (
            <button
              className="btn btn-danger btn-sm ms-3"
              onClick={handleLogout}
              style={{ whiteSpace: 'nowrap' }}
            >
              <FontAwesomeIcon icon={faRightFromBracket} className="me-1" />
              Logout
            </button>
          ) : (
            <>
              <Link to="/">
                <button className="btn btn-outline-light btn-sm me-2">Register</button>
              </Link>
              <Link to="/login">
                <button className="btn btn-light btn-sm">Login</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
