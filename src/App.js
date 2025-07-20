import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './page/home/Home';
import Products from './Components/Products';
import LoginPage from './page/loginpage/LoginPage';
import RegisterPage from './page/registerpage/RegisterPage';
import AdminDashboard from './page/admindashboard/AdminDashboard';
import UserDashboard from './page/userdashboard/UserDashboard';
import ProtectedRoute from './Components/ProtectedRoute';
import AboutPage from './page/aboutpage/AboutPage';
import { CartProvider } from './page/context/CartContext';
import CartPage from './page/cartpage/CartPage';
import ProductDetail from './page/productdetail/ProductDetail';
import BuyNowPage from './page/buynow/BuyNowPage';

const App = () => {
  const location = useLocation();
  const hideNavbarFooter = location.pathname === '/login' || location.pathname === '/';

  return (
    <CartProvider>
      {/* ✅ Hide Navbar on login & register page */}
      {!hideNavbarFooter && <Navbar />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Protected Routes */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <AboutPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/product/:id"
          element={
            <ProtectedRoute>
              <ProductDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/buy-now"
          element={
            <ProtectedRoute>
              <BuyNowPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user-dashboard"
          element={
            <ProtectedRoute requiredRole="user">
              <UserDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>

      {/* ✅ Hide Footer on login & register page */}
      {!hideNavbarFooter && <Footer />}
    </CartProvider>
  );
};

export default App;
